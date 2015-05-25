/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	incrmstdev = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-incrmstdev', function tests() {

	it( 'should export a function', function test() {
		expect( incrmstdev ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a positive integer', function test() {
		var values = [
			'5',
			-5,
			0,
			Math.PI,
			true,
			null,
			undefined,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				incrmstdev( value );
			};
		}
	});

	it( 'should return a function', function test() {
		expect( incrmstdev( 3 ) ).to.be.a( 'function' );
	});

	it( 'should compute a moving sample standard deviation incrementally', function test() {
		var data,
			N,
			d,
			expected,
			actual,
			mstdev;

		data = [ 2, 3, 4, -1, 3, 1 ];
		N = data.length;

		mstdev = incrmstdev( 3 );

		actual = new Array( N );
		for ( var i = 0; i < N; i++ ) {
			d = data[ i ];
			actual[ i ] = mstdev( d );
		}

		expected = [ 0, Math.sqrt( 0.5 ), 1, Math.sqrt(7), Math.sqrt(7), 2 ];

		assert.deepEqual( actual, expected );
	});

	it( 'should return the current moving sample standard deviation if provided no arguments', function test() {
		var data = [ 2, 3, 10 ],
			len = data.length,
			mstdev = incrmstdev( 3 ),
			i;

		for ( i = 0; i < len-1; i++ ) {
			mstdev( data[ i ] );
		}
		assert.strictEqual( mstdev(), Math.sqrt( 0.5 ) );

		for ( i = 0; i < len; i++ ) {
			mstdev( data[ i ] );
		}
		assert.closeTo( mstdev(), Math.sqrt(19), 1e-10 );
	});

	it( 'should return null if asked for a moving sample standard deviation when not having received any data', function test() {
		var mstdev = incrmstdev( 3 );
		assert.isNull( mstdev() );
	});

	it( 'should return 0 if asked for a moving sample standard deviation when having received only a single datum', function test() {
		var mstdev = incrmstdev( 3 );
		mstdev( 4 );
		assert.strictEqual( mstdev(), 0 );
	});

	it( 'should always return 0 if provided a window size equal to 1', function test() {
		var mstdev = incrmstdev( 1 );
		mstdev( 4 );
		assert.strictEqual( mstdev(), 0 );
		assert.strictEqual( mstdev( 5 ), 0 );
		assert.strictEqual( mstdev( 2 ), 0 );
		for ( var i = 0; i < 100; i++ ) {
			assert.strictEqual( mstdev( i ), 0 );
		}
	});

});
