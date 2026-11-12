---
title: Notes and Obsidian
description: Link notes to live cells and send the table and notes to your vault.
group: Guides
---

**Press ⌘J to show or hide the current sheet’s notes. Press ⌥⌘J to move focus between the notes and the grid.**

## Format a note

Use the toolbar for headings, bold, italic, lists, checklists and inline code. Click a checkbox to mark it done. ⌘B and ⌘I also work in the notes editor. Scratch saves the formatting as Markdown.

## Put a live result in a note

Select a cell and press ⌥⌘L to insert its live value. The value changes with its source cell. Click it or press ⌥Return on the selected note link to go to the source.

The command palette also inserts cell and range links, live tables, bar charts, and fixed value snapshots. Pick a source sheet and address to link across sheets. **Find Notes Referencing Selection** finds links in the current sheet’s notes.

A live table previews up to six rows and four columns. Copy or send the note for the full table. A chart accepts one row or up to two columns and previews up to eight positions. Click a bar to open its source cell. Markdown exports include the chart’s source data as a table.

## Send the table and notes

Press ⇧⌘J or use **Send to ryn**. Scratch saves a dated copy under `Scratch/Sheets` and appends the table and notes to today’s daily note. Sending the same sheet again updates its saved copy and leaves one daily note entry when the content is identical.

Choose **Send Selection and Notes** in the palette to append just that range and its notes to the daily note. Choose **Save Sheet to Obsidian** to update just the saved sheet copy.

The handoff uses the Obsidian command line and the configured vault’s Daily Notes settings. The local preview targets the `ryn` vault by default. [Set up the Obsidian CLI](https://obsidian.md/help/cli).

## Save a dated sheet note

Open **Scratch → Sheets** in Obsidian’s file explorer. Each saved sheet has its own named note with the table, notes and save date. Add your own Obsidian content outside Scratch’s generated section so it survives a resave.

The first save creates **Scratch Sheets.base**. Open it from the command palette to find saved sheets by name and date. The table and linked values are snapshots at export time. To refresh them, save the sheet again from Scratch.

Use **Copy Markdown** or **Save Markdown File** in the notes menu to take the same notes elsewhere.
