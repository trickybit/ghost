Ghost ᗣ
=======
LESS mix-in to the Netherworld

Import
------
Import directly.
```css
@import "ghost/face";
.face(...);
```
Import with a namepsace.
```css
@import "ghost/ghost";
.ghost.face(...);
```

Crosshatch
----------
Fill the surface with crossing diagonal lines.

#### Parameters
  1. line color (optional)
  1. line gap (optional)

#### Input
```css
.crosshatch(blue, 1rem);
```
#### Example
[Crosshatch](http://s.codepen.io/tappily/debug/EyJEOj#crosshatch)

Hatch
-----
Fill the surface with diagonal lines.

#### Parameters
  1. line color (optional)
  1. line direction (optional)
    - 1 (left)
    - -1 (right)
  1. line gap (optional)

#### Usage
```css
.hatch(blue, 1, 1rem);
```
#### Examples
- [Hatch (left)](http://s.codepen.io/tappily/debug/EyJEOj#hatch-left)
- [Hatch (right)](http://s.codepen.io/tappily/debug/EyJEOj#hatch-right)

Rule
----
Fill the surface with vertical or horzontal lines.

#### Parameters
  1. line color (optional)
  1. line direction (optional)
    - 0 (vertical)
    - 1 (horizontal)
  1. line gap (optional)

#### Usage
```css
.rule(blue, 0, 1rem);
```
#### Examples
- [Rule (vertical)](http://s.codepen.io/tappily/debug/EyJEOj#rule-vertical)
- [Rule (horizontal)](http://s.codepen.io/tappily/debug/EyJEOj#rule-horizontal)

Grid
----
Fill the surface with vertical and horzontal lines.

#### Parameters
  1. line color (optional)
  1. line style (optional)
  1. line gap (optional)

#### Usage
```css
.grid(blue, ruled, 1rem);
```
#### Examples
- [Grid (ruled)](http://s.codepen.io/tappily/debug/EyJEOj#grid-ruled)
- [Grid (dotted)](http://s.codepen.io/tappily/debug/EyJEOj#grid-dotted)

Face
----
Fill the surface with a color and draw an outline.

#### Parameters
  1. fill color (optional)

#### Input
```css
.face(magenta);
```
#### Example
[Face](http://s.codepen.io/tappily/debug/EyJEOj#face)
