---
title: 
aliases:
  - alias1
description: <Description of the page used for link previews>
date: 2024-05-18
publishDate: 2024-05-18
updated: 2024-05-18
draft: true
publish: false
tags:
  - note
  - changeme
---
 
Idea: 
	- scan through jellyfin video library
	- get list of all video files
	- list files with lowest bitrate/quality/resolution/...

# ffprobe (Windows)

-> https://www.reddit.com/r/DataHoarder/comments/lwqmwt/comment/gpjaylb/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button

```ps1 title="Check_Video_Integrity.ps1"
if ((Get-ChildItem Env: | where {$_.name -eq "path"}) -eq $null) {
    copy-item \\192.168.1.201\Public\Services\Software\CMD_Tools\ffmpeg.exe -Recurse C:\
    [Environment]::SetEnvironmentVariable("path", "C:\ffmpeg\bin", "user")
}
Get-ChildItem "\\192.168.1.201\Public\Media\Videos" -recurse | Where-Object {$_.extension -eq ".mp4" -or $_.extension -eq ".mkv" -or $_.extension -eq ".avi"} | foreach {
ffmpeg.exe -v error -i $_.FullName -f null - >BrokenVideos.log 2>&1 }
```

```ps1 title="Check_Video_Quality.ps1"
remove-item ResolutionCheck.txt
if ((Get-ChildItem Env: | where {$_.name -eq "path"}) -eq $null) {
    copy-item R:\Powershell_Exclusive_Network\Software\CMD_Tools\ffmpeg -Recurse C:\
    [Environment]::SetEnvironmentVariable("path", "C:\ffmpeg\bin", "user")
}
$Videos = Get-ChildItem "R:\Media\Videos" -recurse | Where-Object {$_.extension -eq ".mp4" -or $_.extension -eq ".mkv" -or $_.extension -eq ".avi" -or $_.extension -eq ".mpg"}
foreach ($Video in $Videos) {
    ffprobe -v quiet -print_format json -show_format -show_streams $Video.fullname >> VideoQuality.txt
    Select-String -Pattern '"width": ' -path VideoQuality.txt | foreach {
        [int]$widthVar = ($_.Line) -replace '\D+(\d+)\D*','$1'}
    Select-String -Pattern '"height": ' -path VideoQuality.txt | foreach {
        [int]$heightVar = ($_.Line) -replace '\D+(\d+)\D*','$1'}
    if ($widthVar -lt 1100 -or $heightVar -lt 650) {
        $fullName = $Video.fullname
        Write-Output "ISSUE: $fullName has poor resolution! <$widthVar by $heightVar>" >> ResolutionCheck.txt
    }
}
remove-item VideoQuality.txt
```

# python (Linux)

-> https://askubuntu.com/questions/536091/sort-videos-by-bitrate

```python 
import os, sys, glob
import pprint

# Call: python mediainfo_sort.py 'search_criteria' 'sort_criteria'
# Call example: python mediainfo_sort.py '*.avi' 'Bit rate'

files = glob.glob(sys.argv[1])
criteria = sys.argv[2]

# Will have data in format: {'file_path': {'Media Attribute', 'Value'}}
file_datas = {}

# Contruct data by calling mediainfo for all files in 
for file_path in files:
    mediainfo = os.popen('mediainfo "%s"' % file_path).read()
    file_data = {}
    infos = mediainfo.splitlines()
    for info in infos:
        if ':' in info:
            info_split = info.split(':')
            file_data[info_split[0].strip()] = info_split[1].strip()
        file_datas[file_path] = file_data

# function for sorted, uses Media attribute (sort_criteria) value as sorting key
def getKey(item):
    return item[1][criteria]

sorted_files = sorted(file_datas.items(), key=getKey)

# In the end just join the keys (filenames) with newline and print
print '\n'.join([x[0] for x in sorted_files])
```

# moviescanner2

-> https://www.tweaking4all.com/home-theatre/moviescanner2/