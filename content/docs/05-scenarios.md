---
title: Compare A/B scenarios
description: Try different inputs and compare formula results before applying them.
group: Guides
---

**Select the inputs and results you want to compare, then choose Compare A/B Scenario in the command palette.**

## Try a different input

1. Enter `100` in A1, `3` in B1 and `=A1*B1` in C1.
2. Select A1:C1, press ⇧⌘P and choose **Compare A/B Scenario**.
3. Change A1 to `125` on the B side. A stays at `300`. B shows `375` with a difference of `+75`.
4. Press Escape to discard the trial, or choose **Apply B Changes** (⌘Return). Press ⌘Z in the grid to undo the inputs together.

The comparison fits up to eight rows and four columns. Existing formulas recalculate in B using the original sheet’s references, including references outside the selection. Formula cells are read-only in the comparison. You can change or clear inputs and see numeric differences beneath the results.

If you edit the source sheet while the comparison is open, close the comparison and reopen it before applying changes. The trial lasts until you close its window.
