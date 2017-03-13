"use strict";

exports.print_me = function() {

  for( var i = 0; i < arguments.length; i++ ) {
    if( typeof arguments[i] === "object" && Array.isArray(arguments[i]) ) {
      arguments[i].forEach(function( value ) {
        console.log( value );
      });
    } else {
      console.log( arguments[i] );
    }
  }

  return exports.print_me;

}


console.log("Question 1.");
exports.print_me( 'foo', 'bar' );
console.log("");

console.log("Question 2.");
exports.print_me( 'foo', ['bar', 'baz', 'bazza'] );
console.log("");


console.log("Question 3.");
exports.print_me( 'foo' )( 'bar' );
console.log("");

