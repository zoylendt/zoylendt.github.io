---
title: 
description: 
date: 2024-05-13
publishDate: 2024-05-13
updated: 2024-05-17
draft: false
tags:
  - note
  - beer
  - brewing
---
 
markdown content :)

![[giphy.gif]]

<!-- Snek -->   
<p align="center">
<a href="https://gitstar-ranking.com/Lissy93" title="Snek 🐍"><img width="500" src="https://raw.githubusercontent.com/Lissy93/Lissy93/master/assets/github-snake.svg" /></a>
</p>

---

```mermaid
timeline
    title My career timeline
    section Academia
	    2007 : Researcher
	    2010 : Ph.D. thesis
	    2013 : Researcher
	section Private Sector
    2015 : 1st solo Data Scientist at Weplan
    2016 : DS Consultant at BBVA Next
    2018 : Lead Data Scientist at idealista/data
    2020 : Head of Data Science at idealista
    
```

---

>[!code]- List markdown files from smallest to biggest

> Usually bigger file means more content, while smaller file means can be merged or removed

> ```python

> import os

>

> def get_markdown_files(directory):

> """Recursively finds all Markdown files in a directory and its subdirectories.

>

> Args:

> directory: The path to the directory to search.

>

> Returns:

> A list of tuples, where each tuple contains:

> * The filename (str)

> * The file size in bytes (int)

> """

>

> markdown_files = []

> for root, dirs, files in os.walk(directory):

> if 'Omnivore' in dirs:

> dirs.remove('Omnivore')

> for filename in files:

> if filename.endswith('.md') and not filename.endswith('excalidraw.md'):

> filepath = os.path.join(root, filename)

> filesize = os.path.getsize(filepath)

> markdown_files.append((filename, filesize))

> return markdown_files

>

> def main():

> current_directory = os.getcwd() # Get the current working directory

> files = get_markdown_files(current_directory)

>

> # Sort files by size (ascending)

> files.sort(key=lambda item: item[1])

>

> # Print the results

> for filename, filesize in files:

> print(f"{filename:<40} {filesize} bytes")

>

> if __name__ == "__main__":

> main()

> ```