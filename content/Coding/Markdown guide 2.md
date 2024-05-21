---
title: Markdown Guide
date: 2024-02-04
updated: 2024-05-21
publishDate: 2024-02-04
draft: false
tags:
  - note
  - markdown
  - quartz
  - unfinished
---

> [!warning]
> This note is highly unfinished!
 
Here are some examples about how markdown rendered by Quartz.

# Guides

- https://markdownguide.offshoot.io/basic-syntax/

# General formatting techniques

# Text boxes

## Callouts

-> https://zanca.dev/notes/callouts

Text can be placed within a `tip` (aka `hint`), `note` or a `warning` block.

```
> [!tip]
> This is a tip or a hint.
```

is rendered as:

> [!tip]
> This is a tip or a hint.

---

```
> [!note]
> This is a note.
```

is rendered as:

> [!note]
> This is a note.

---

```
> [!warning]
> This is a warning.
```

is rendered as:

> [!warning]
> This is a warning.

## Code blocks

Text can be placed within a code block, which acepts a "code type", a `block title` and specific lines can be `highlighted`.

Some valid code types are: `ts`, `shell`, `poetry`, `rust`, `tsx`

```
'''ts {1-2,4} title="code block title"
line 1

line 3
line 4
line 5
'''
```

This is rendered as:

```ts {1-2,4} title="code block title"
line 1

line 3
line 4
line 5
```

> [!warning]
> The code title is omitted if no code type is specified.

## Einrückung

```
> intended text
>
> second block
```

is rendered as:

> intended text
>
> second block

## creating diagrams

see http://localhost:8070/advanced/paths

# Linking to pages or images

## Internal links

### link to a whole page

[[Markdown guide 2]]

[[index]]

### links to a paragraph

[[Markdown guide 2#Code block|alternative name]]

## external links

[micromorph](https://github.com/natemoo-re/micromorph)

## linking to images

Pictures are placed in the subdirectory `quartz/content/images`, allowed extensions are `.png`, `.jpg` and ...

An image can be reffered to by name:

```md title="image code"
![[example-image.png]]
```

or by full path:

```
![[images/example-image.png]]
```

![[images/example-image.png]]

## proper quote with external reference

```
> [“the end of a book’s wisdom appears to us as merely the start of our own,”](https://www.themarginalian.org/2016/10/20/proust-on-reading/) Nussbaum writes
```

is rendered as:

> [“the end of a book’s wisdom appears to us as merely the start of our own,”](https://www.themarginalian.org/2016/10/20/proust-on-reading/) Nussbaum writes

## proper quote with internal reference

```
- **[[thoughts/Alexandre Grothendieck#Reflection and testimony on a past as a mathematician|Récoltes et Semailles]]** by Alexandre Grothendieck
```

is rendered as:

- **[[thoughts/Alexandre Grothendieck#Reflection and testimony on a past as a mathematician|Récoltes et Semailles]]** by Alexandre Grothendieck

# LaTEX rendering

More information: http://localhost:8070/features/Latex

## LaTEX blocks

Example 1:

```
$$
f(x) = \int_{-\infty}^\infty
    f\hat(\xi),e^{2 \pi i \xi x}
    \,d\xi
$$
```

$$
f(x) = \int_{-\infty}^\infty
    f\hat(\xi),e^{2 \pi i \xi x}
    \,d\xi
$$

Example 2:

```
$$
\begin{aligned}
a &= b + c \\ &= e + f \\
\end{aligned}
$$
```

$$
\begin{aligned}
a &= b + c \\ &= e + f \\
\end{aligned}
$$

Example 3:

```
$$
\begin{bmatrix}
1 & 2 & 3 \\
a & b & c
\end{bmatrix}
$$
```

$$
\begin{bmatrix}
1 & 2 & 3 \\
a & b & c
\end{bmatrix}
$$

## LaTEX inline

Similarly, inline math can be rendered by delimiting math expression with a single `$`. 

For example, `$e^{i\pi} = -1$` produces $e^{i\pi} = -1$

`$` in text can be escaped with `\$`.

# Footnotes

To reference a footnote, one has to include `[^1]` in the text, optinally after marking the previous word(s) bold:

```
For **this example**[^1]?
```

Rendered this results in:

For **this example**[^1]?

The footnote can be placed anywhere on the page, formatted like this:

```
[^1]: This is a footnote, followed by a back link to where it is used on this site
```

[^1]: This is a footnote, followed by a back link to where it is used on this site

The footnote is then rendered on the bottom of the page.

# Tables


| Spalte 1 | Spalte 2 | Spalte 3 |
| ---- | ---- | ---- |
| Zeile 1 | 2 | 3 |
| Zeile 2 | 5 | 7 |





