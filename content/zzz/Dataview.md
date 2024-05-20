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

# Notes tagged #untested 

```dataview title="Untested notes"
table title, date, updated
from "public"
where econtains(tags, "untested")
sort updated
```

# 10 Notes created in the last week

```dataview
TABLE file.ctime AS "Created"
WHERE file.ctime >= date(today) - dur(1 week)
LIMIT 10
```
