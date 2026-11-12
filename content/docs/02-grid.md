---
title: Grid and shortcuts
description: Move, edit, format and calculate from the keyboard.
group: Guides
---

**Type on the grid to edit the selected cell. Return commits and moves down. Tab commits and moves right, or accepts the visible formula suggestion first.**

## Move and select

| Keys | Action |
| --- | --- |
| Arrows | Move between cells |
| Shift+Arrows | Extend or shrink the selection |
| ⌘+Arrows | Move to the next edge of populated data |
| ⇧Space, ⌃Space | Select the current row or column |
| ⌘A | Select the data block. Press again for the populated bounds. |
| F2, Escape | Edit the cell in place, or cancel the edit |
| Delete | Clear the selected cells |
| ⌘Z, ⇧⌘Z | Undo or redo an edit |

Shift+Tab and Shift+Return reverse direction. Tab wraps within a selected block. After tabbing across a row, Return moves to the next row at the column where you started.

Press ⌘F to search displayed values, formulas or notes. Return goes to a match. Escape returns to the pane where you opened Find. Find shows the first 80 matches.

## Resize the window

Click **Expand** in the toolbar to fill the usable area of your display. Click **Compact** to return to the previous size. You can also drag the grip at the lower right to set the size yourself or find both commands in the command palette.

In compact mode, opening Notes widens the window when there’s room on the display. In expanded mode, you can show or hide Notes without changing the window size. [Drag the Notes divider](/docs/notes-and-obsidian#resize-notes) to give either pane more room.

## Format a range

Drag a column divider to resize it or double-click to fit the contents. **Wrap** grows the row. Press ⌥Return in a wrapped cell to insert a line break.

Use the **Format** menu for currencies, dates, decimals and text. ⌥⌘1 through ⌥⌘6 apply number, currency, percent, date, text and wrap. Use ⌘B or ⌘I to toggle bold or italic. SUM, SUMIF and SUMIFS results start in bold. Toggle bold off for a particular total, or use **Clear Formatting** to return to the default.

## Calculate and copy

Type `=SUM(` in a cell or in the formula bar, then drag across the cells to enter a range. Click a single cell to enter its address. Type a comma to pick another range, or press Return to finish the formula. The selection is highlighted while you drag.

Click **ƒx** on a formula cell to see the intermediate results and jump to its references. [Formula Microscope](/docs/formula-microscope).

Open **Command Palette** from the ⋯ menu or press its shortcut (⇧⌘P by default). Type a cell address to jump to it, or try `12 kg to lb` to copy a unit conversion. Currency formatting sets how a value is displayed. It does not fetch exchange rates. [Keyboard Shortcuts](/docs/shortcuts).

Select numbers and press ⌘Return to insert the suggested calculation. Press ⇧⌘C to copy the selected result or sum. **Pin Result** keeps the active cell’s formatted value in a small window above other apps. It updates when the source changes and lasts until Scratch quits.

Each sheet has 1,000 rows and 64 columns. Formula references stay within the current sheet. Undo history lasts for the app session.

Use **Show Selection History** to compare and restore older cell entries and formats after a restart. [Selection History](/docs/history).

Use **Start Recording** to save a sequence of fill, format and clear commands for another range. [Record and Replay](/docs/replay).
