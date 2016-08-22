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

#### Parameters
  1. line color (optional)
  1. line gap (optional)

#### Input
```css
.crosshatch(blue, 1em);
```

#### Output
[CODEPEN](http://s.codepen.io/tappily/debug/EyJEOj#crosshatch)

### Hatch (left)

#### Input
```css
.hatch(blue, 1);
```

#### Output
[CODEPEN](http://s.codepen.io/tappily/debug/EyJEOj#hatch-left)

### Hatch (right)

#### Input
```css
.hatch(blue, -1);
```

#### Output
[CODEPEN](http://s.codepen.io/tappily/debug/EyJEOj#hatch-right)

### Rule
Fill the surface with vertical or horzontal lines.

#### Parameters
  1. line color (optional)
  1. line direction (optional)
    - 0 (horizontal)
    - 1 (vertical)
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
[CODEPEN](http://s.codepen.io/tappily/debug/EyJEOjgrid-ruled)

#### Input (dotted)

```css
.grid(blue, dotted, 1rem);
```

#### Output
[CODEPEN](http://s.codepen.io/tappily/debug/EyJEOjgrid-dotted)

### Face
Fill the surface with a color and draw an outline.

#### Parameters
  1. fill color (optional)

#### Input
```css
.face(magenta);
```


