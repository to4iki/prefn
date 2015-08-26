'use strict';

import Prelude from './prelude';

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

/**
* pratially applied functions
*/
Function.prototype.partial = function() {
    let fn = this, args = Array.prototype.slice.call(arguments);

    return function() {
        let i = 0, arg = 0;
        for (i; i < args.length && arg < arguments.length; i++) {
            if (args[i] === undefined) {
                args[i] = arguments[arg++];
            }
        }
        return fn.apply(this, args);
    }
};
