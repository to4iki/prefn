'use strict';

/**
 * Function Trait
 */
export class Prelude {

    static andThen(...fns) {
        return fns.reverse().reduce((f, g) => (...args) => f(g(...args)));
    }

    static compose(...fns) {
        return fns.reduce((f, g) => (...args) => f(g(...args)));
    }

    static curried(fn, ...args) {
        let curry = args => {
            if (args.length < fn.length) {
                return (..._args) => curry([...args, ..._args])
            } else {
                return fn(...args);
            }
        }

        return curry(args);
    }
}
