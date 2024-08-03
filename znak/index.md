# Znak

Znak is a parser for a Markdown-like markup language that supports a smaller subset of Markdown syntax, and is stricter and more opinionated. It has features like [Shiki](https://shiki.style) syntax highlighting, [KaTeX](https://katex.org), and heading IDs using [github-slugger](https://github.com/Flet/github-slugger) built-in.

The name "Znak" comes from the Polish word "znak", meaning "sign" or "mark".

## Usage

1. Install the package as a dependency to your project.

   ```sh
   # Use the command for your package manager
   npx jsr add @noclaps/znak
   yarn dlx jsr add @noclaps/znak
   pnpm dlx jsr add @noclaps/znak
   bunx jsr add @noclaps/znak
   deno add @noclaps/znak
   ```

2. Import the package in your code, and use it.

   ```ts
   import Znak from "@noclaps/znak";

   const text = "# Hello World"; // Your text to be rendered.
   const renderedHTML = await new Znak(text).renderToHTML();
   // <h1 id="hello-world">Hello World</h1>
   const headings = new Znak(text).headings();
   // [{depth: 1, slug: "hello-world", title: "Hello World"}]
   ```

You will have to include the KaTeX CSS file somewhere in your page for it to render correctly. See [KaTeX browser usage](https://katex.org/docs/browser) for instructions.

See the [Types](/znak/types) documentation for all of the configuration options and types, and the [Syntax](/znak/syntax) documentation for the supported syntax.
