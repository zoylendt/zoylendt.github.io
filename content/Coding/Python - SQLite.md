---
title: 
date: 2024-07-05
publishDate: 2024-07-05
updated: 2024-07-05
draft: true
tags:
  - note
  - unfinished
---
 
Some notes about how to interact with a SQLite DB using Python.

# Resources

...

# Basic setup

...

# Interactions with CSV and Dataframes

## Load CSV into new table

```python
import sqlite3
import csv

#variables
csv_file = '/home/jovyan/root/db/imported.csv'
db_file = 'example.db'

# establish connection to db file and create cursor
conn = sqlite3.connect(db_file)
cursor = conn.cursor()

# create table 'table_name' with headers (can be different from headers in CSV)
cursor.execute("CREATE TABLE table_name (db_header_1, db_header_2, db_header_3);")

with open(csv_file,'r') as fin:
    dr = csv.DictReader(fin) # csv.DictReader uses first line in file for column headings by default, comma is default delimiter
    to_db = [(i['csv_header_1'], i['csv_header_2'], i['csv_header_3']) for i in dr]

cursor.executemany("INSERT INTO table_name (db_header_1, db_header_2, db_header_3) VALUES (?, ?, ?);", to_db)
conn.commit()
conn.close()
```

# Extract data from DB

## Return a row as dictionary

[Source](https://stackoverflow.com/a/3300514)
```python
import sqlite3

#variables
db_file = 'example.db'

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

con = sqlite3.connect(db_file)
con.row_factory = dict_factory
cur = con.cursor()

cur.execute("select * from table_name")    #  -> get all rows from table 'table_name'

dictionary_one = cur.fetchone() # return first row mathing the query
dictionary_all = cur.fetchall() # return complete table mathing the query
```