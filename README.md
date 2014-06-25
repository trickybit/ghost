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
#### Input
```css
.grid(blue, dotted);
```
#### Output
&#11820;

#### Input
```css
.grid(blue, ruled);
```
#### Output
&#9638;

### Face
#### Input
```css
.face(magenta);
```
#### Output
&#9712;
