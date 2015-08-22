prefn
=====

[![License][license-image]][license-url]

## Description
JavaScript framework of simple functional extension.

## Usage

preparation

```js
let f = x => x + 10
let g = x => x * 2
```

##### compose

```js
let h = f.compose(g);
h(1) // 12
```

##### andThen

```js
let h = f.andThen(g);
h(1) // 22
```

##### curried

```js
let plus = (a,b,c) => a + b + c;
let f = plus.curried();
f(1,2,3) // 6
f(1)(2,3) // 6
f(1)(2)(3) // 6
f(1,2)(3) // 6
```

## Installation

## Author

[to4iki](https://github.com/to4iki)

## Licence

[MIT](http://to4iki.mit-license.org/)

[license-url]: http://to4iki.mit-license.org/
[license-image]: http://img.shields.io/badge/license-MIT-brightgreen.svg
