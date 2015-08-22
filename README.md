prefn
=====

[![NPM package][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![License][license-image]][license-url]

## Description
JavaScript simple functional extension.

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

### npm
Install

```
$ npm i -D prefn
```

Use

```javascript
require('prefn');
```

## Author

[to4iki](https://github.com/to4iki)

## Licence

[MIT](http://to4iki.mit-license.org/)

[travis-url]: http://travis-ci.org/to4iki/prefn
[travis-image]: https://travis-ci.org/to4iki/prefn.svg?branch=master

[npm-url]: https://npmjs.org/package/prefn
[npm-image]: https://badge.fury.io/js/prefn.svg

[license-url]: http://to4iki.mit-license.org/
[license-image]: http://img.shields.io/badge/license-MIT-brightgreen.svg
