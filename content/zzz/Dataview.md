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