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
#### Example
[CODEPEN](http://s.codepen.io/tappily/debug/EyJEOj#crosshatch)

### Hatch
#### Input
```css
.hatch(blue, 1);
```
#### Output
&#9640;

#### Usage
```css
.hatch(blue, -1);
```
#### Output
&#9639;

### Rule
Fill the surface with vertical or horzontal lines.

#### Usage
```css
.rule(blue, 0, 1rem);
.rule(blue, 1, 1rem);
```
#### Parameters
  1. line color (optional)
  1. line direction (optional)
    - 0 (horizontal)
    - 1 (vertical)
  1. line gap (optional)

### Grid
Fill the surface with vertical and horzontal lines.

#### Usage
```css
.grid(blue, dotted, 1rem);
.grid(blue, ruled, 1rem);
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
