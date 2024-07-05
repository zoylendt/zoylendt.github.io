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

# create table '' with headers (can be different from headers in CSV)
cursor.execute("CREATE TABLE imported (exhex_archive_id, original_archive_type, original_archive_name, original_archive_path, original_archive_size_bytes, original_archive_md5sum, new_archive_name);")

with open(csv_file,'r') as fin:
    dr = csv.DictReader(fin) # csv.DictReader uses first line in file for column headings by default, comma is default delimiter
    to_db = [(i['exhex_id'], i['original_archive_type'], i['original_archive_name'], i['original_archive_path'], i['original_archive_size_bytes'], i['original_archive_md5sum'], i['new_archive_name']) for i in dr]

cursor.executemany("INSERT INTO imported (exhex_archive_id, original_archive_type, original_archive_name, original_archive_path, original_archive_size_bytes, original_archive_md5sum, new_archive_name) VALUES (?, ?, ?, ?, ?, ?, ?);", to_db)
conn.commit()
conn.close()
```