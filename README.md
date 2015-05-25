incrmstdev
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Provides a method to compute a moving sample standard deviation incrementally.


## Installation

``` bash
$ npm install compute-incrmstdev
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var incrmstdev = require( 'compute-incrmstdev' );
```

#### incrmstdev( window )

Returns an initialized method to compute a moving sample standard deviation incrementally. `window` sets the window size, i.e., the number of values over which to compute a moving sample standard deviation.

``` javascript
var mstdev = incrmstdev( 3 );
```

#### mstdev( [value] )

If provided a `value`, the method updates and returns the sample standard deviation of the current window. If not provided a `value`, the method returns the current sample standard deviation.

``` javascript
var sigma;

// Filling window...
sigma = mstdev( 2 );
// stdev is 0

mstdev( 4 );
// stdev is ~1.414

mstdev( 0 );
// stdev is 2

// Window starts sliding...
mstdev( -2 );
// stdev is ~3.082

mstdev( -1 );
// mstdev is 1

sigma = mstdev();
// returns 1
```


## Notes

1. 	If values have not yet been provided to `mstdev`, `mstdev` returns `null`.
1. 	The first `W-1` returned sample standard deviations will have less statistical support than subsequent sample standard deviations, as `W` values are needed to fill the window buffer. Until the window is full, the sample standard deviation returned equals the [sample standard deviation](https://github.com/compute-io/stdev) of all values provided thus far.

The use case for this module differs from the conventional [vector](https://github.com/compute-io/mstdev) implementation and the [stream](https://github.com/flow-io/) implementation. Namely, this module decouples the act of updating the moving sample standard deviation from the act of consuming the moving sample standard deviation.



## Examples

``` javascript
var incrmstdev = require( 'compute-incrmstdev' );

// Initialize a method to calculate the moving sample standard deviation incrementally:
var mstdev = incrmstdev( 5 ),
	sigma;

// Simulate some data...
for ( var i = 0; i < 1000; i++ ) {
	sigma = mstdev( Math.random()*100 );
	console.log( sigma );
}
sigma = mstdev();
console.log( sigma );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2014-2015. The Compute.io Authors.


[npm-image]: http://img.shields.io/npm/v/compute-incrmstdev.svg
[npm-url]: https://npmjs.org/package/compute-incrmstdev

[travis-image]: http://img.shields.io/travis/compute-io/incrmstdev/master.svg
[travis-url]: https://travis-ci.org/compute-io/incrmstdev

[coveralls-image]: https://img.shields.io/coveralls/compute-io/incrmstdev/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/incrmstdev?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/incrmstdev.svg
[dependencies-url]: https://david-dm.org/compute-io/incrmstdev

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/incrmstdev.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/incrmstdev

[github-issues-image]: http://img.shields.io/github/issues/compute-io/incrmstdev.svg
[github-issues-url]: https://github.com/compute-io/incrmstdev/issues
