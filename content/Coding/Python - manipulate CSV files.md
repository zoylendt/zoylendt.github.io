---
title: How to manipulate a CSV file with Python
date: 2024-06-27
publishDate: 2024-06-27
updated: 2024-07-02
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

## check dtypes of each column

[Source](https://www.geeksforgeeks.org/pandas-detect-mixed-data-types-and-fix-it/)

```python
for column in df.columns:
    print(column,':',pd.api.types.infer_dtype(df[column]))
```
or:
```python
display(df.dtypes)
```

## convert dtype of single column

[Source](https://www.geeksforgeeks.org/convert-floats-to-integers-in-a-pandas-dataframe/)

```python
df['Weight'] = df['Weight'].astype(int)
```

## 'Handling' dtype errors

Error message while reading a CSV into a df with `df = pd.read_csv(csv_file)`:

```
/tmp/ipykernel_39709/1197580658.py:4: DtypeWarning: Columns (30) have mixed types. Specify dtype option on import or set low_memory=False.
  df = pd.read_csv("galleries_out_2.csv")
```

Solution: `df = pd.read_csv(csv_file, sep = ",", dtype={"favorites_category_number": 'unicode'})`

# List all unique elements of a column

```python
a = df['column_name'].unique()
print(sorted(a))
```

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

[Source](https://stackoverflow.com/questions/43859804/compare-two-list-and-output-missing-and-extra-element-python)

```python
import pandas as pd

#variables
csv_file_a = 'data_a.csv'
csv_file_b = 'data_b.csv'
column = 'id'

# load both CSV files into dataframes
df_a = pd.read_csv('nonexistent_galleries.csv')
df_b = pd.read_csv('v2_nonexistent_galleries.csv')

# create lists from the column you want to compare
list_a = df_a[column]
list_b = df_b[column]

# turn lists to sets (removing duplicates)
set_a = set(list_a)
set_b = set(list_b)

# extract information
missing_in_b = list(sorted(set_a - set_b))
added_to_b = list(sorted(set_b - set_a))
```

# Modify a single CSV field

Search in the file `csv_file_input` for the row where the column `search_col` has the value `search_value`. Write in this row to the column `target_col` the value `target_value` and save as a new csv file `csv_file_output`.

Warning: dtype is important, no handling for multiple matches

```python
import pandas as pd

#variables
csv_file_input = 'data_in.csv'
csv_file_output = 'data_out.csv'
search_col = 'url'
search_value = 'https://google.com/'
target_col = 'year'
target_value = '2012'

# load csv into dataframe
df = pd.read_csv(csv_file_input)

# find row
result_row = df[df[search_col] == str(search_value)]
result_row_index = result_row.index.values[0]

# write content to cell
df.loc[result_row_index, target_col] = target_value

# save as new csv
df.to_csv(csv_file_output, index = False)
```

# Create empty CSV with set column names

```python
from pathlib import Path
import csv
import numpy as np
import pandas as pd

#variables
csv_header = ['header_0', 'header_1', 'header_2']
csv_file = 'empty_data.csv'

# prepare provided variables
csv_file_path = Path(csv_file)
csv_headers_list = np.asarray([csv_header])

# create CSV if it doesn't exist yet
if csv_file_path.is_file():
	pass
else:
	df = pd.DataFrame(csv_headers_list)
	df.to_csv(csv_file, header=False, index=False)
```

# Find duplicate fields within same column 

```python
# find duplicates in csv file

import pandas as pd  

#variables
input_csv_file = 'move_local_files_cbr.csv'
column_to_check = 'file_md5sum'

# create dataframe from csv file
df = pd.read_csv(input_csv_file)

# create list from column 'column_to_check'
list = df[column_to_check].tolist()

# find duplicates -> https://stackoverflow.com/questions/9835762/how-do-i-find-the-duplicates-in-a-list-and-create-another-list-with-them
seen = set()
dupes = []
for x in list:
    if x in seen:
        dupes.append(x)
    else:
        seen.add(x)

# create dataframe based on dupes list -> https://saturncloud.io/blog/how-to-select-rows-from-a-dataframe-based-on-list-values-in-a-column-in-pandas
mask = df[column_to_check].isin(dupes)
dupes_dataframe = df[mask]

# print result dataframe, sorted by the vaules of 'column_to_check'
dupes_dataframe.sort_values(column_to_check)
```