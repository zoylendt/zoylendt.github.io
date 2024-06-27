---
title: How to remove specific rows from a CSV file in Python
date: 2024-06-27
publishDate: 2024-06-27
updated: 2024-06-27
draft: true
tags:
  - note
  - unfinished
  - python
---
 
Let's say you have a CSV file, `data.csv`, and a file `unwanted.txt` where each line contains a string. Now you want to remove each row from `data.csv` where a string from `unwanted.txt` appears in a specific column.

```python
import csv
import shutil    # optional, required for safety backup

# variables
input_csv_file = 'data.csv'
output_csv_file = 'data_out.csv'
column_to_check = 2                     # which column of input_csv_file should be checked
delete_lines_file = 'unwanted.txt'

# make safety backup before proceeding
shutil.copy2(input_csv_file,str(input_csv_file + '_backup'))   # optional

# convert delete_lines_file to list
with open(delete_lines_file) as file0:
    lines = [line.rstrip() for line in file0]
    
with open(input_csv_file ,"r") as inp, open(output_csv_file,"w") as out:
    reader = csv.reader(inp)
    writer = csv.writer(out)
    for row in reader:
        name = row[column_to_check]
        if name not in lines:
            writer.writerow(row)
```