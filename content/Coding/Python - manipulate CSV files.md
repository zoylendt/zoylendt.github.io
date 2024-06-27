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

## Print the rows before deletion

```python
import csv

# variables
input_csv_file = 'data.csv'
output_csv_file = 'data_out.csv'
column_to_check = 2                     # which column of input_csv_file should be checked
delete_lines_file = 'unwanted.txt'

# convert delete_lines_file to list
with open(delete_lines_file) as file0:
    delete_lines_list = [line.rstrip() for line in file0]
    
with open(input_csv_file ,"r") as inp, open(output_csv_file,"w") as out:
    reader = csv.reader(inp)
    for row in reader:
        name = row[column_to_check]
        if name not in delete_lines_list:
            continue
        else:
            print(row)
```

# Replacing specific content of a column

Replace all cells in the row `parent_url` that only contain `[]` with `''` (= empty) and all cells containing only `A` with `B`.

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

# modify dataframe
df[column_to_check]=df[column_to_check].replace(correctiondict)

# write the dataframe to another csv file
df.to_csv(output_csv_file, index = False)
```

# Convert datatypes of columns

- https://sentry.io/answers/change-a-column-type-in-a-dataframe-in-python-pandas/
- https://stackoverflow.com/questions/52369572/python-how-to-get-data-types-for-all-columns-in-csv-file

## 'Handling' dtype errors

Error message while reading a CSV into a df with `df = pd.read_csv(csv_file)`:

```
/tmp/ipykernel_39709/1197580658.py:4: DtypeWarning: Columns (30) have mixed types. Specify dtype option on import or set low_memory=False.
  df = pd.read_csv("galleries_out_2.csv")
```

Solution: `df = pd.read_csv(csv_file, sep = ",", dtype={"favorites_category_number": 'unicode'})`

# Extract specific cells from csv

Extract from `data.csv` the content of the column `target_col` in the row where the column `search_col` has the value `search_value`.

Warning: only works if there is **exactly one match** of `search_col` and `search_value`!

```python
import pandas as pd

#variables
csv_file = 'data.csv'
search_value = 2866006
search_col = 'gallery_id'
target_col = 'gallery_token'

# Read csv into df. Define dtype for all cells as unicode so we don't have to worry about the dtype of `search_value`.
df = pd.read_csv(csv_file, sep = ",", dtype='unicode')

# Find row with combination of `search_col` and `search_value`.
result_row = df[df[search_col] == str(search_value)]

# Get `target_col` cell of the row.
result_row.iloc[0][target_col]
```

# Compare CSV files for missing elements

```python
import pandas as pd

#variables
csv_file_a = 'data_a.csv'
csv_file_b = 'data_b.csv'
column = 'id'

# load both CSV files into dataframes
df_a = pd.read_csv('nonexistent_galleries.csv')
df_b = pd.read_csv('v2_nonexistent_galleries.csv')

# create lists from the 
list_v1 = df_a[column]
list_v2 = df_b[column]

set1 = set(list_v1)
set2 = set(list_v2)
missing_in_b = list(sorted(set1 - set2))
added = list(sorted(set2 - set1))
```