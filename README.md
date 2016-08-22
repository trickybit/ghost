Ghost ᗣ
=======
LESS mix-in to the Netherworld

Importing
---------
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

Mixins
------

###Crosshatch
Fill the surface with crossing diagonal lines.

#### Parameters
  1. line color (optional)
  1. line gap (optional)

#### Input
```css
.crosshatch(blue, 1rem);
```

#### Output
[CODEPEN](http://s.codepen.io/tappily/debug/EyJEOj#crosshatch)

### Hatch
Fill the surface with diagonal lines.

#### Parameters
  1. line color (optional)
  1. line direction (optional)
    - 1 (left)
    - -1 (right)
  1. line gap (optional)

#### Input (left)
```css
.hatch(blue, 1, 1rem);
```

#### Output
[CODEPEN](http://s.codepen.io/tappily/debug/EyJEOj#hatch-left)

#### Input (right)
```css
.hatch(blue, -1, 1rem);
```

#### Output
[CODEPEN](http://s.codepen.io/tappily/debug/EyJEOj#hatch-right)

### Rule
Fill the surface with vertical or horzontal lines.

#### Parameters
  1. line color (optional)
  1. line direction (optional)
    - 0 (vertical)
    - 1 (horizontal)
  1. line gap (optional)

#### Input (horizontal)
```css
.rule(blue, 1, 1rem);
```

#### Output
[CODEPEN](http://s.codepen.io/tappily/debug/EyJEOj#rule-horizontal)

#### Input (vertical)
```css
.rule(blue, 1, 1rem);
```

#### Output
[CODEPEN](http://s.codepen.io/tappily/debug/EyJEOj#rule-vertical)

### Grid
Fill the surface with vertical and horzontal lines.

#### Parameters
  1. line color (optional)
  1. line style (optional)
  1. line gap (optional)

#### Input (ruled)
```css
.grid(blue, ruled, 1rem);
```
#### Output
[CODEPEN](http://s.codepen.io/tappily/debug/EyJEOj#grid-ruled)

#### Input (dotted)
```css
.grid(blue, dotted, 1rem);
```
#### Output
[CODEPEN](http://s.codepen.io/tappily/debug/EyJEOj#grid-dotted)

### Face
Fill the surface with a color and draw an outline.

#### Parameters
  1. fill color (optional)

#### Input
```css
.face(magenta);
```

#### Output
[CODEPEN](http://s.codepen.io/tappily/debug/EyJEOj#face)
