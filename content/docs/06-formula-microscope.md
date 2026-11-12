---
title: Formula Microscope
description: See how a formula evaluates and jump to the cells behind its result.
group: Guides
---

**Select a formula cell and click ƒx in the formula bar. You can also choose Inspect Formula from the command palette.**

## Read a calculation

Enter `3` in A1 and `5` in A2. Enter `=SUM(A1:A2)*2` in B1 and inspect it. The microscope shows `16` for the result, `8` for the sum and `2` for the multiplier. Click `A1:A2` to select that range in the grid.

An `IF` formula shows which branch ran. Parts Scratch didn’t evaluate are marked **Skipped**. A range shows how many cells it covers. Press Escape to close the microscope and keep the grid open.

## Find a cell behind an error

Set A1 to `0`, B1 to `=12/A1` and C1 to `=B1+1`. Inspect C1 and choose **Go to A1** to jump to the zero divisor. For an error inside the formula itself, such as `=1/0`, the microscope shows the failing step. A formula Scratch cannot parse shows the error above the expression.
