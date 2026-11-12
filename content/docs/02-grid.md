---
title: Grid and shortcuts
description: Move, edit, format and calculate from the keyboard.
group: Guides
---

**Type on the grid to edit the selected cell. Return commits and moves down. Tab commits and moves right, or accepts the visible formula suggestion first.**

## Grid toolbar

Use the labeled controls just above the formula bar. **Freeze** keeps headings in view, **Sort** and **Filter** use the selected column, **Export** offers a CSV, and **Tables** creates or finds a named table. The freeze and filter buttons highlight while those features are active.

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

While dragging, Scratch shows the selection’s rows × columns. The active cell stands out inside the selected block. Drag the border of a populated selection to move its cells, or hold Option to copy them. The destination shows **Move** or **Copy** and previews the contents. A copy shifts relative references, and a move keeps formula addresses as written. Cell annotations and links stay at their existing addresses. Occupied destinations are protected, and Escape cancels the drag.

Press ⌘F to search displayed values, formulas or notes. Return goes to a match. Escape returns to the pane where you opened Find. Find shows the first 80 matches.

## Select separate ranges

Select the first range, then ⌘-click a cell or hold ⌘ while dragging to add another range. From the keyboard, open **Add Range to Selection** in the command palette and enter an address such as `D2:F4`.

Formatting, Delete and **Copy Result** apply across the selection. Overlapping ranges count each cell once. Undo restores the edits and the selection. Press Escape to keep the latest range.

Copying or pasting cell data, filling, replaying commands, viewing selection history and sending selected cells to Obsidian each use one range. Scratch saves the latest range when you leave the sheet or quit.

## Save a named range

Select one rectangle, choose **Name Selected Range**, and enter a name such as `Monthly totals`. Choose **Go to Named Range** and type part of the name to select those cells again. Names are unique within a sheet and move with their cells when you insert or delete rows and columns. If you delete the cells, Undo brings the range back.

Use **Remove Named Range** to remove the name. Formulas use cell addresses.

## Named tables

Select a rectangle that includes the header and at least one data row. Click **Tables**, choose **Create Table from Selection**, and enter a name. Each table has a unique name on its sheet, and tables can sit side by side.

Click any cell in the table to use **Sort**, **Filter**, or **Export** for that table. The toolbar highlights **Tables**, and the panels beside **Sort** and **Filter** show the table’s name and range.

- **Sort** starts with the selected column. Choose a different column if needed, then click **Ascending** or **Descending**. The first row stays as a header. Cells move within the table’s columns. Formula references follow the cells they refer to. Press ⌘Z to undo.
- **Filter** shows matches as you type. Choose a column and enter part of a displayed value. The panel shows the match count and a **Clear** button. Shaded cells mark excluded rows inside the table. Cells beside the table stay visible and row numbers stay in place. The arrow keys skip shaded cells. Each sheet has one active filter. Click the filter count to clear it.
- **Export** saves the table as a CSV named after it. With a filter active, choose **Export Matching Rows as CSV** to include the header and matching data, or choose the table by name to include every row.

Use **Tables** to jump to a table by name. With the cursor inside a table, the picker also offers actions to select it, rename it, or remove its name while keeping its cells. Row and column insertions and deletions update the table’s bounds and clear its active filter.

## Duplicate a sheet or import a file

Choose **Duplicate Sheet** to create a copy beside the current sheet. The copy includes cells, formulas, formatting, notes, named ranges, and capture evidence. Note links within the sheet point to the copied cells. Links to other sheets keep their destinations. Use **Sync Editable Table with Obsidian** to give the copy its own sync destination.

Choose **Import CSV or TSV** from the sheet menu or command palette, then pick a UTF-8 file. Scratch opens the data in a new sheet named after the file. Quoted fields and embedded line breaks are preserved. Fields beginning with `=` come in as text. Each file can contain up to 1,000 rows and 64 columns and must fit within 10 MB.

## Insert or delete rows and columns

Select a cell or a rectangular range, then open **Rows and Columns** from the sheet menu. You can also find these commands in the command palette.

| Command | What moves |
| --- | --- |
| **Insert Rows Above** | Adds a blank row for each selected row. Existing rows move down. |
| **Insert Columns Before** | Adds a blank column for each selected column. Existing columns move right. |
| **Delete Rows** | Removes the selected rows. Rows below move up. |
| **Delete Columns** | Removes the selected columns. Columns to the right move left. |

Formulas, including references such as `$A$1`, follow the cells that move. Inserting inside a referenced range expands it. Deleting part of a range shrinks it. A formula that loses its source shows `#REF!`. Linked notes, pinned results, and screenshot sources follow their cells too.

Use ⌘Z to undo the edit or ⇧⌘Z to redo it. If an insertion would push data or formatting beyond the last row or column, Scratch leaves the sheet as it was.

## Freeze rows and columns

Select B2, click **Freeze**, and choose **Freeze Above and Left of Selection** to keep row 1 and column A in view as you scroll. **Freeze Top Row** and **Freeze First Column** work independently. Find all three in the sheet menu under **Freeze Panes**, or in the command palette.

Drag the blue grip at the top of a vertical divider or the left end of a horizontal divider. The boundary snaps to a row or column as you drag. Release to save it or press Escape to cancel. **Unfreeze Panes** restores ordinary scrolling. Scratch remembers the boundary per sheet and makes room for scrolling cells when you shrink the window.

## Sort rows

Select a cell and click **Sort**. Check the affected rows, choose a column, and click **Ascending** or **Descending**. Use **First row is a header** to keep the top row in place. With a single cell selected, Scratch uses the populated row bounds. Select a rectangle spanning several rows to limit the sort to that band.

For a sheet-level sort, Scratch moves every cell in each affected row. If the affected rows contain a named table, select a cell inside that table to sort it. Frozen rows stay put. Numbers and formula results sort by value, text sorts naturally, and blanks go last. Equal keys keep their order.

Formulas, annotations, named ranges and live note links follow the cells they reference. If moving a row would split a referenced range into separate pieces, Scratch leaves the sheet as it was. Press ⌘Z to undo a sort or ⇧⌘Z to redo it.

## Filter rows

Select a cell and click **Filter**. Choose a column and type a word, number or fragment. The grid and match count update as you type. Click **Done** or press Return to close the panel. Scratch matches the text you see in the column, including formatted values and formula results. Case and accents are ignored. To limit the filter to a row band, select those rows before opening the command.

The first row stays visible by default. Turn off **First row is a header** to include it when it is unfrozen. Arrow keys and cell entry skip hidden rows. The footer shows how many rows match. Click the filter button in the footer to clear it. Jumping directly to a hidden address also clears the filter.

A sheet-level filter lasts for the session and keeps the underlying rows and addresses intact. Selection operations and calculations still use the selected addresses. Exports and Obsidian sync include all rows within the chosen range. CSV carries the values and current sort order. Freeze panes and Scratch filters are view settings, so set them up in the destination app if you need them there.

## Resize the window

Click **Expand** in the toolbar to fill the usable area of your display. Click **Compact** to return to the previous size. You can also drag the grip at the lower right to set the size yourself or find both commands in the command palette.

When you reopen Scratch, it uses the display under your pointer. Move or resize the compact window there to set that display’s layout. Scratch remembers a separate position and size for each display, including displays you disconnect and reconnect.

In compact mode, opening Notes widens the window when there’s room on the display. In expanded mode, you can show or hide Notes without changing the window size. [Drag the Notes divider](/docs/notes-and-obsidian#resize-notes) to give either pane more room.

## Move or detach panes

Show **Notes**, then drag the grip beside the sheet name or on the **Notes** header. Drop on a highlighted left or right edge to arrange the panes side by side. Drop outside the window to separate them. Both panes stay editable. Notes follows the sheet selected in the grid.

Drag a detached grip onto the other window’s highlighted edge to dock it. Press Escape during a drag to cancel. Click either grip for its menu, or choose **Dock Notes Left**, **Dock Notes Right**, **Dock Grid Left**, **Dock Grid Right**, **Detach Notes** or **Detach Grid** in the command palette.

Scratch remembers which side Notes is on, the docked width, and the floating window positions across launches. Closing the floating Notes window hides it. Click **Notes** to bring it back to its last position.

## Open a sheet in its own window

Drag the sheet name past the edge of the Scratch panel and release. You can also choose **Open Sheet in Window** from the sheet menu or command palette. The larger window keeps its own scroll position and follows edits to that sheet. The floating panel keeps its place. To edit, double-click a cell in the larger window to open it in Scratch.

## Drag out a table or export CSV

Select a single range and drag **Export** from the grid toolbar. Drop it into an app that accepts tab-separated text, or onto the desktop or into Finder to create a CSV. You can also Control-drag inside the selection, or Control-drag the sheet name to export its populated area. The drag label shows the cell range and available formats. Click **Export** to choose a CSV of the selection or the sheet.

Choose **Export Selection as CSV** or **Export Sheet as CSV** and pick where to save the file. The larger sheet window also has an **Export CSV** button. The file contains values, including calculated results, and keeps blank cells inside the exported rectangle. If a drop does not land, save the CSV through **Export** and open the file from the destination app.

In Excel, import with **Data → Get Data → From Text/CSV** to read the UTF-8 text correctly. In Google Sheets, use **File → Import → Upload** and choose a comma separator. [Excel import guide](https://support.microsoft.com/en-gb/excel/import-data-from-a-csv-html-or-text-file) · [Google Sheets import guide](https://support.google.com/docs/answer/12236443?hl=en).

## Format a range

Hover near a column divider to see its grip and resize cursor. Drag it to resize the column or double-click to fit the contents. **Wrap** grows the row. Press ⌥Return in a wrapped cell to insert a line break.

Choose **Zoom In Sheet**, **Zoom Out Sheet** or **Reset Sheet Zoom** from the command palette. Zoom scales the grid text, rows, columns and grid controls. Scratch remembers the zoom for each sheet.

Use the **Format** menu for currencies, dates, decimals and text. ⌥⌘1 through ⌥⌘6 apply number, currency, percent, date, text and wrap. Use ⌘B or ⌘I to toggle bold or italic. SUM, SUMIF and SUMIFS results start in bold. Toggle bold off for a particular total, or use **Clear Formatting** to return to the default.

Point to a format in the menu or use the arrow keys to preview it on the selected cells. Choose the item to apply it, or press Escape to restore the original appearance. Wrap grows the row when applied. The command palette also opens the menu through **Browse Cell Formats**.

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
