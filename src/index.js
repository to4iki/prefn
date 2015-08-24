'use strict';

import { Prelude } from './prelude';

/**
* Composes two instances of Function in a new Function, with this function applied first.
*/
Function.prototype.andThen = function(...fns) {
    return Prelude.andThen(this, ...fns);
};

/**
* Composes two instances of Function in a new Function, with this function applied last.
*/
Function.prototype.compose = function(...fns) {
    return Prelude.compose(this, ...fns);
};

/**
* currying for functions
*/
Function.prototype.curried = function() {
    return Prelude.curried(this);
};
