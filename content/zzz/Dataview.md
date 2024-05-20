# Unpublished notes

```dataview title="Unpublished notes"

table title, date, updated
from "public"
WHERE draft = true
sort date

```

# Notes about untested topics

```dataview title="Untested notes"

table title, date, updated
from "public"
WHERE "tags" = untested
sort date

```

# 10 Notes created in the last week

```dataview
TABLE file.ctime AS "Created"
WHERE file.ctime >= date(today) - dur(1 week)
LIMIT 10
```
