# Common Feat Effect Data Structures

This document is used for reference on how the data on some common feature effects are structured.

---

## Ability Score Bonus
**abilityScoreBonus**
- statId: string (typically first three characters of ability name)
- amount: number (amount to add to base score)
- cap: number (maximum amount base can get to with bonus, typically 20)

## Initiative Bonus
**initiativeBonus**
- amount: number