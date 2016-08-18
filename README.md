Ghost ᗣ
=======

LESS mix-in to the Netherworld

### Importing
Import directly.
```
@import "ghost/face";
.face(...);
```
Import with a namepsace.
```
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
#### Input
```css
.rule(blue, 0);
```
#### Output
&#9636;

#### Input
```css
.rule(blue, 1);
```
#### Output
&#9637;

### Grid
Paint vertical and horzontal lines.

#### Usage
```css
.grid(blue, dotted, 1em);
.grid(blue, ruled, 1em);
```
##### Arguments
  1. line color (optional)
  1. line style 'ruled' or 'dotted' (optional)
  1. line gap (optional)

### Face
#### Input
```css
.face(magenta);
```
#### Output
&#9712;
