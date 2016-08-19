Ghost ᗣ
=======

LESS mix-in to the Netherworld

### Importing
Import directly.
```css
@import "ghost/face";
.face(...);
```
Import with a namepsace.
```css
@import "ghost/ghost";
.ghost.face(...)
```

### Crosshatch
#### Input
```css
.crosshatch(blue);
```
#### Output
&#9641;

### Hatch
#### Input
```css
.hatch(blue, 1);
```
#### Output
&#9640;

#### Input
```css
.hatch(blue, -1);
```
#### Output
&#9639;

### Rule
Fill the surface with vertical or horzontal lines.

#### Usage
```css
.rule(blue, 0);
.rule(blue, 1);
```
#### Parameters
  1. line color (optional)
  1. line direction (optional)
    - 0 (horizontal)
    - 1 (vertical)

### Grid
Fill the surface with vertical and horzontal lines.

#### Usage
```css
.grid(blue, dotted, 1em);
.grid(blue, ruled, 1em);
```
#### Parameters
  1. line color (optional)
  1. line style (optional)
  1. line gap (optional)

### Face
Fill the surface with a color and draw an outline.

#### Usage
```css
.face(magenta);
```
#### Arguments
  1. fill color (optional)
