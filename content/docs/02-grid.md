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

Drag from one cell to another to select a range. Hold Shift when you start the drag to extend the current selection from its original cell. Hold the pointer at a grid edge to keep scrolling and selecting. Move back inside the grid to pause scrolling, or release to finish.

Press ⌘F to search displayed values, formulas or notes. Return goes to a match. Escape returns to the pane where you opened Find. Find shows the first 80 matches.

## Select separate ranges

Select the first range, then ⌘-click a cell or hold ⌘ while dragging to add another range. From the keyboard, open **Add Range to Selection** in the command palette and enter an address such as `D2:F4`.

Formatting, Delete and **Copy Result** apply across the selection. Overlapping ranges count each cell once. Undo restores the edits and the selection. Press Escape to keep the latest range.

Copying or pasting cell data, filling, replaying commands, viewing selection history and sending selected cells to Obsidian each use one range. Scratch saves the latest range when you leave the sheet or quit.

## Resize the window

Click **Expand** in the toolbar to fill the usable area of your display. Click **Compact** to return to the previous size. You can also drag the grip at the lower right to set the size yourself or find both commands in the command palette.

When you reopen Scratch, it uses the display under your pointer. Move or resize the compact window there to set that display’s layout. Scratch remembers a separate position and size for each display, including displays you disconnect and reconnect.

In compact mode, opening Notes widens the window when there’s room on the display. In expanded mode, you can show or hide Notes without changing the window size. [Drag the Notes divider](/docs/notes-and-obsidian#resize-notes) to give either pane more room.

## Format a range

Drag a column divider to resize it or double-click to fit the contents. **Wrap** grows the row. Press ⌥Return in a wrapped cell to insert a line break.

Use the **Format** menu for currencies, dates, decimals and text. ⌥⌘1 through ⌥⌘6 apply number, currency, percent, date, text and wrap. Use ⌘B or ⌘I to toggle bold or italic. SUM, SUMIF and SUMIFS results start in bold. Toggle bold off for a particular total, or use **Clear Formatting** to return to the default.

## Calculate and copy

Type `=SUM(` in a cell or in the formula bar, then drag across the cells to enter a range. Hold at the grid edge to reach cells beyond the visible area. Click a single cell to enter its address. Type a comma to pick another range, or press Return to finish the formula.

Click the chevron beside the formula bar or press ⌥⌘E to expand it. Long expressions wrap, and underlined references match the outlines in the grid. The current argument and matching parentheses highlight as you move the caret. Press ⌥⌘E again to collapse the bar and keep editing at the same position. Return commits the edit and Escape cancels it.

Click **ƒx** on a formula cell to see the intermediate results and jump to its references. [Formula Microscope](/docs/formula-microscope).

Open **Command Palette** from the ⋯ menu or press its shortcut (⇧⌘P by default). Type a cell address to jump to it, or try `12 kg to lb` to copy a unit conversion. Currency formatting sets how a value is displayed. It does not fetch exchange rates. [Keyboard Shortcuts](/docs/shortcuts).

### Convert currency

Type `100 AUD to USD` in the command palette. Choose **Fetch ECB Rates** the first time. Scratch shows the converted amount, exchange rate, ECB publication date and the time Scratch fetched it. Choose **Copy** to put the converted number on the clipboard.

Saved rates work offline. After one hour, or after a failed refresh, the palette labels the rate **Saved**. Choose **Refresh ECB Rates** to check for a newer snapshot. A copied number stays fixed when rates change. [ECB reference rates](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html).

Select numbers and press ⌘Return to insert the suggested calculation. Press ⇧⌘C to copy the selected result or sum. **Pin Result** keeps the active cell’s formatted value in a small window above other apps. It updates when the source changes and lasts until Scratch quits.

Drag **Sum** or **Avg** from the footer to a visible empty cell. The outline and label show the destination and formula. Hold Option to drop the current value. Press Escape to cancel or ⌘Z to undo a drop. Clicking a footer result copies it.

From the keyboard, choose **Place Selection Sum in Cell** or **Place Selection Average in Cell** in the command palette. Type an empty destination address, then press Return for a formula or ⌥Return for a fixed value. Choose a cell outside the source range for a live formula.

To extend a value, series or formula, drag the small square at the selection’s bottom-right corner. The grid scrolls if you hold the pointer at the edge. Release to apply the preview, or press Escape to cancel.

Each sheet has 1,000 rows and 64 columns. Formula references stay within the current sheet. Undo history lasts for the app session.

Use **Show Selection History** to compare and restore older cell entries and formats after a restart. [Selection History](/docs/history).

Use **Start Recording** to save a sequence of fill, format and clear commands for another range. [Record and Replay](/docs/replay).

## Check inputs as you edit

Select a range and choose **Check for Numbers**, **Check for Positive Numbers**, or **Check for Duplicates** in the command palette. Apply more than one check to the same range if needed. Blank cells are allowed. Duplicate text matches regardless of case or spaces at the start or end.

An orange marker shows which cells need attention. Select a marked cell to see what to fix beside it. Formula errors such as division by zero are checked automatically. Use **Inspect Formula** to follow a formula error to its source. [Formula Microscope](/docs/formula-microscope).

Use **Manage Input Checks** to remove a rule. Undo restores the rule or a recent edit.
