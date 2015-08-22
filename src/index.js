'use strict';

import { Prelude } from './prelude';

/**
* Composes two instances of Function in a new Function, with this function applied first.
*/
Function.prototype.andThen = function(fn) {
    return Prelude.andThen(this, fn);
};

/**
* Composes two instances of Function in a new Function, with this function applied last.
*/
Function.prototype.compose = function(fn) {
    return Prelude.compose(this, fn);
};

/**
* currying for functions
*/
Function.prototype.curried = function() {
    return Prelude.curried(this);
};
