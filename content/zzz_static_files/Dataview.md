# Unpublished notes

```dataview title="Unpublished notes"
table title, date, updated
from "public"
WHERE draft = true
sort date
```

# Notes tagged #unfinished 

```dataview title="Untested notes"
table title, date, updated
from "public"
where econtains(tags, "unfinished")
sort updated
```

# Notes tagged #barebone 

```dataview title="Untested notes"
table title, date, updated
from "public"
where econtains(tags, "barebone")
sort updated
```

# Notes tagged #untested 

```dataview title="Untested notes"
table title, date, updated
from "public"
where econtains(tags, "untested")
sort updated
```

# Notes tagged #note 

```dataview title="Untested notes"
table title, date, updated
from "public"
where econtains(tags, "note")
sort updated
```

# 10 latest Notes created in the last week

```dataview
TABLE title, date AS "Created", updated AS "Updated"
from "public"
WHERE date >= date(today) - dur(1 week)
sort date DESC
LIMIT 10
```

# 10 latest Notes edited in the last week

```dataview
TABLE title, date AS "Created", updated AS "Updated"
from "public"
WHERE updated >= date(today) - dur(1 week)
sort updated DESC
LIMIT 10
```

---

# More dataview examples

```dataview
TABLE file.ctime AS "Created"
WHERE file.ctime >= date(today) - dur(1 week)
LIMIT 10
```

```dataview
table title, date, updated
from "public"
where econtains(title, "Example Title")
sort updated
```

---

# Testing Area

# Published notes

```dataview title="Unpublished notes"
table title, file.folder as "Directory", date, updated
from "public"
WHERE draft = false
sort updated desc
```

---

```dataview
TABLE WITHOUT ID
link(file.name, title) AS "Title", file.folder AS "Folder", regexreplace(file.folder, ".*\/([^\/]+)$", "$1") AS "Folder2", dateformat(updated, "MMM d, yyyy") AS "Updated" 
FROM "public/Braindump" OR "public/Life" OR "public/Notes" OR "public/Posts" OR "public/Projects"
SORT updated DESC 
WHERE file.name != this.file.name AND draft != "true" AND file.folder != "public/zzz_static_files/my quartz config files"
```

---

# Notes with a permalink

```dataview
TABLE WITHOUT ID
link(file.name, title) AS "Title", regexreplace(file.folder, ".*\/([^\/]+)$", "$1") AS "Folder", dateformat(updated, "MMM d, yyyy") AS "Updated" 
FROM "public/Braindump" OR "public/Life" OR "public/Notes" OR "public/Posts" OR "public/Projects"
WHERE permalink = ""
SORT updated DESC 
```

