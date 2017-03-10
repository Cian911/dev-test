"use strict";

module.exports = {
  print_me: function() {

    for( var i = 0; i < arguments.length; i++ ) {
      if( typeof arguments[i] === "object" && Array.isArray(arguments[i]) ) {
        arguments[i].forEach(function( value ) {
          console.log( value );
        });
      } else {
        console.log( arguments[i] );
      }
    }

    return print_me;

  }
}


// console.log("Question 1.");
// print_me( 'foo', 'bar' );
// console.log("");

// console.log("Question 2.");
// print_me( 'foo', ['bar', 'baz', 'bazza'] );
// console.log("");


// console.log("Question 3.");
// print_me( 'foo' )( 'bar' );
// console.log("");
