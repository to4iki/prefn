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
        assert(f(1), 16);

        var g = f3.compose(f2).compose(f1);
        assert(g(1), 66);
    });

    it('#andThen', function() {
        var f = f1.andThen(f2).andThen(f3);
        assert(f(1), 66);

        var g = f3.andThen(f2).andThen(f1);
        assert(g(1), 16);
    });

    it('#curried', function() {
        var f = plus.curried();
        assert(f(1,2,3), 6);
        assert(f(1)(2,3), 6);
        assert(f(1)(2)(3), 6);
        assert(f(1,2)(3), 6);
    });
});
