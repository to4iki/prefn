'use strict';

var assert = require('assert');
require('../lib/');

describe('prefn', function() {

    var f1 = function(x) { return x + 10; }
    var f2 = function(x) { return x * 2; }
    var f3 = function(x) { return x * 3; }
    var plus = function(x, y, z) { return x + y + z; }

    it('#compose', function() {
        var f = f1.compose(f2).compose(f3);
        var g = f1.compose(f2, f3)
        assert(f(1), 16);
        assert(g(1), 16);

        var h = f3.compose(f2).compose(f1);
        var i = f3.compose(f2, f1);
        assert(h(1), 66);
        assert(i(1), 66);
    });

    it('#andThen', function() {
        var f = f1.andThen(f2).andThen(f3);
        var g = f1.andThen(f2, f3);
        assert(f(1), 66);
        assert(g(1), 66);

        var h = f3.andThen(f2).andThen(f1);
        var i = f3.andThen(f2, f1);
        assert(h(1), 16);
        assert(i(1), 16);
    });

    it('#curried', function() {
        var f = plus.curried();
        assert(f(1,2,3), 6);
        assert(f(1)(2,3), 6);
        assert(f(1)(2)(3), 6);
        assert(f(1,2)(3), 6);
    });

    it('#partial', function() {
        var f = plus.partial(1, undefined, 3);
        assert(f(1), 5);
        assert(f(2), 6);
        assert(f(3), 7);
    });
});
