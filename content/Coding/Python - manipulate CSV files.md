---
title: How to manipulate a CSV file with Python
date: 2024-06-27
publishDate: 2024-06-27
updated: 2024-06-27
draft: false
tags:
  - note
  - python
---

# Deleting specific rows

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
    delete_lines_list = [line.rstrip() for line in file0]
    
with open(input_csv_file ,"r") as inp, open(output_csv_file,"w") as out:
    reader = csv.reader(inp)
    writer = csv.writer(out)
    for row in reader:
        cell = row[column_to_check]
        if cell not in delete_lines_list:
            writer.writerow(row)
```

# Replacing specific content

Replace all cells in the row `parent_url` that only contain `[]` with `''` (= empty)

```python
import pandas as pd  

# variables
input_csv_file = 'data.csv'
output_csv_file = 'data_out.csv'
column_to_check = 'parent_url'
correctiondict= {
                  '[]': '',
                  'A': 'B'
                 }

# create dataframe from csv file
df = pd.read_csv(input_csv_file) 

df[column_to_check]=df[column_to_check].replace(correctiondict)


# writing the dataframe to another csv file 
df.to_csv(output_csv_file, index = False)
```