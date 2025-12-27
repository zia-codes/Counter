<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Inter&size=24&pause=1200&color=333333&center=true&vCenter=true&width=650&lines=React+Steps+and+Counter+App;State+Management+and+Reusable+Logic;Practice+Project" />

</div>

---

## Overview

This is a small React practice project focused on understanding how state flows through components and how UI changes based on state updates.

The project is intentionally simple so that the logic remains clear and reusable in future applications.

---

## What This Project Demonstrates

- How `useState` controls UI behavior  
- How components remain independent while sharing patterns  
- How conditional rendering changes layout dynamically  
- How small pieces of logic combine into usable features  

---

## Components and Logic

<details>
<summary><strong>Steps component</strong></summary>

Handles step based navigation using internal state.  
Supports toggling visibility without unmounting logic.  
Each instance works independently which makes it reusable.
</details>

<details>
<summary><strong>Counter component</strong></summary>

Separates step value from count value.  
Updates date output based on count changes.  
Shows how derived state affects UI.
</details>

<details>
<summary><strong>Styling approach</strong></summary>

Uses Tailwind for layout speed.  
Uses custom CSS for transitions and spacing.  
Animations are subtle and do not distract from logic.
</details>

---

## Features

- Step progress with previous and next controls  
- Toggleable UI without losing state  
- Counter that increments by dynamic step size  
- Date calculation based on counter value  
- Clean readable layout  

---

## Technologies Used

React  
JavaScript  
Tailwind CSS  
CSS transitions  

---

## Running the Project

```bash
npm install
npm run dev
