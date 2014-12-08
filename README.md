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

To use the module,

``` javascript
var foo = require( 'compute-incrmstdev' );
```

#### foo( arr )

What does this function do?


## Examples

``` javascript
var foo = require( 'compute-incrmstdev' );
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


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


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
