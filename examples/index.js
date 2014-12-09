'use strict';

var incrmstdev = require( './../lib' );

// Initialize a method to calculate the moving sample standard deviation incrementally:
var mstdev = incrmstdev( 5 );

// Simulate some data...
var value, sigma;

console.log( '\nValue\tSample StDev\n' );

for ( var i = 0; i < 100; i++ ) {

	value = Math.random() * 100;
	sigma = mstdev( value );

	console.log( '%d\t%d', value.toFixed( 4 ), sigma.toFixed( 4 ) );
}
