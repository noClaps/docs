# Writing posts

All posts must go in one of the sections in the `src/content/posts` directory. If none of the sections match the content of your post, open an issue and I'll try to help out.

## Frontmatter

### Posts

Each post must have the following frontmatter properties:

- `title`: _string_

  The title of the post.
- `description`: _string_

  A short description of what the post is about.
- `date`: _ISO date_

  When the post was initially published.
- `lastmod`: _ISO date_ (_optional_)

  When the post was last modified **after publishing**.
- `author`: _string_

  Your name. See [Authors](#authors) for more details.
- `series`: _number_ (_optional_)

  If you have multiple posts, you can specify the order in which they appear using this. Lower numbers will appear earlier in the list, while higher numbers appear later. **Do not use this property without permission**.

Frontmatter must be in YAML format.

Example:
```md
---
title: "Google: A Misrepresented Evil"
description: Don't be evil, sometimes.
date: 2022-08-12
lastmod: 2022-11-26 # Optional
author: noClaps
series: 1 # Optional
---
```

### Authors

To add your author data to the blog, you must create a `[name].json` file in `src/content/authors/`. This JSON file should have the following data:

- `name`: _string_

  Your name. This will be the name that appears on blog posts that you write. You may choose whether you want to have your real name or a pseudonym.
- `link`: _URL_

  A link of your choosing, perhaps to a personal website or social media profile, where someone may want to find more of your work.

## Content

### Headings

You should only use headings 2 to 6 in posts

```md
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

Only headings 2 and 3 will appear in the table of contents.

### Text

If paragraphs are getting too long, they should be split up into multiple paragraphs. A good estimate would be if the paragraph exceeds 4-5 lines in your code editor (with soft wrapping enabled). Do not use `<br>` to split up paragraphs, use normal Markdown paragraph spacing.

HTML elements should be avoided if a Markdown equivalent is available. The blog uses [Znak syntax](/znak/syntax), so you should follow that.

Instead of `>` blockquotes, the [`quote` container](#quote) should be used.

### Adding files

Files that support your text, such as code, should go in `public/files/` and can be accessed using `/files/[your-file]`. If you're linking a code file, you should do so with:

```md
<a href="/files/[your-file]" download="[your-file]">Download the file (you can write whatever you want here)</a>
```

Images should go in the `content` directory with your files, and can be accessed relative to the post. For example, the `notes/mozilla` post references images in `notes/mozilla/[image].png` with `![Alt text](./mozilla/[image].png)`. Images in the `notes` collection should not be accessed by posts in the `posts` collection, and vice versa. All images should have alt text.

### Containers

#### Note

```md
::: note [note title]
[note content]
:::
```

The note title is optional, and the default title is "NOTE".

#### Quote

```md
::: quote [quote title] {href="[quote link]"}
[quote content]
:::
```

The quote title and link are both optional, but highly recommended. The default title is "QUOTE".

#### Warning

```md
::: warning [warning title]
[warning content]
:::
```

The warning title is optional, and the default title is "WARNING".
