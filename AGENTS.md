# AGENTS.md

## Shell Scripts

- Always use `#!/bin/sh` shebang for shell scripts
- Scripts must be POSIX compliant (no bashisms)
- When providing commands to users:
  - **Detect the user's OS first** (check working directory paths, env
    variables, or ask if unclear)
  - Windows/PowerShell: use `` ` `` for line continuation
  - Unix/Linux/macOS: use `\` for line continuation

## Commit Messages

- Follow the 50/72 rule:
  - Subject line: max 50 characters
  - Body lines: wrapped at 72 characters
- Use conventional commit prefixes (`feat:`, `fix:`, `docs:`, `chore:`,
  etc.)
- Separate subject from body with a blank line

Example:

```
feat: add video capture pipeline

Wire up the CVBS capture card through OpenCV and stream live
frames at 720x480 @ 30fps in YUY2 mode.
```

**Never commit on your own.** Always ask the user first before creating
or amending commits.

**Do not add yourself as a co-author.** Omit any `Co-Authored-By`
trailer from commit messages.

## Python

After writing or modifying Python files, run `ty` to check for type
errors and fix any issues before considering the task done:

```sh
uv run ty check
```

## Documentation (Markdown)

- Wrap normal text and lists at **max 80 columns** (for readability in
  terminals and editors).
- **Exceptions**: Tables and code blocks (```` ``` ````) can exceed 80
  columns when formatting requires it (e.g. trees, alignment).
- Use standard Markdown: `**bold**`, `` `inline code` ``, `##` headings,
  `-` or numbered lists, fenced code blocks with language hints
  (```` ```python ````, ```` ```sh ````).
- Use reference-style links (`[text][ref]`) instead of inline URLs;
  long links break the 80-column wrap and make prose hard to read.
  Collect all link targets at the bottom of the file.
- For code blocks containing commands the user must run, keep each
  command in its **own separate block** so it can be copied individually.
- Add a **short, concise description** above each command block so the
  reader knows what it does.
- Keep examples concise, up-to-date, and self-documenting.
- **No em dashes** (`—`). Use colons, commas, or parentheses instead.
- This file (`AGENTS.md`) follows its own rules.
