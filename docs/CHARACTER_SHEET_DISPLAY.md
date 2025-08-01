
# Character Sheet Display Structure (Mobile-First)

This document outlines the breakdown of the character sheet for mobile-first development. Use this as a reference for component layout, navigation structure, and data grouping.

---

## Overview
**Includes:**
- Character Name
- Class & Level
- Origin (Species + Background)
- Alignment
- Personality Traits, Ideals, Bonds, Flaws

---

## Stats & Saves
**Includes:**
- Ability Scores (STR, DEX, etc.)
- Saving Throws
- Proficiency Bonus
- Initiative
- Speed
- Size
- Passive Perception

These are all core stats or derived directly from them. Group them together for clarity and consistency.

---

## Combat
**Includes:**
- Armor Class (AC)
- Weapons & Attacks
- Hit Points (HP)
- Temporary HP (if used)
- Death Saves
- Heroic Inspiration (or reroll mechanic)

Use this section for moment-to-moment combat details only. Health is treated as a subcomponent of Combat.

---

## Features
**Includes:**
- Class Features
- Species Traits
- Background Features
- Feat Effects

Organize this section with collapsible or expandable groups by source. This helps mobile users find key features quickly.

---

## Spells
**Includes (only shown if character has spellcasting):**
- Spellcasting Ability & Modifier
- Spell Save DC & Attack Bonus
- Known/Prepared Spells by Level
- Slots Remaining (if applicable)

Design for vertical scroll with expandable/collapsible spell level sections.

---

## Inventory
**Includes:**
- Equipped Gear
- Carried Inventory
- Currency (GP, SP, CP)
- Tools and Kits
- Encumbrance or weight (optional)

Can be condensed or expanded based on screen size or complexity of equipment system.

---

## Optional: Roleplay / Notes
**Includes:**
- Detailed Personality Notes
- Custom Notes / Journaling
- Character Backstory

Consider as a secondary tab or expandable section within Overview.

---

## Navigation Layout Recommendation

Bottom Navigation Tabs (Icons + Labels):
1. 🧙‍♂️ Overview
2. 📊 Stats
3. ⚔️ Combat
4. ✨ Features
5. 🔮 Spells *(conditionally visible)*
6. 🎒 Inventory

Optional:
- Hamburger menu or top-right action bar for Print, Export, Save, etc.
- Top App Bar with character name and context menu

---

## Design Goals
- Mobile-first: prioritized for ease of thumb navigation
- Accessible: support screen readers and keyboard nav where possible
- Modular: Each section/component is independently scrollable and maintainable
- Scalable: Additional sections can be added for higher-level play

