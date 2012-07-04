jQuery Debug Console Plugin
===========================
### By Sam Sehnert, [Digital Fusion](http://teamdf.com/) 2012

A is a simple, lightweight [jQuery](http://jquery.com/) debugging plugin which lets you easily see 
what's in a jquery collection at any point in a chain, while still maintaining chain-ability.

Demos
-----

The Demos for this plugin live under the examples/ directory. Open them directly in your web browser, or view the following online examples:

- [Basic Example](http://www.teamdf.com/jquery-plugins/console/examples/demo-basic.html)

Documentation
-------------
### Basic console usage

Print the list of elements to the console as they are at the current time in the jQuery collection:

	$('.selector').console('My Elements');

You can use this in the middle of a chain to figure out what elements are currently selected:

	$('.selector').console('Unfiltered').filter(':not(.complete)').console('Incomplete (filtered)')
	
There is also an easy shortcut to print console.log, console.warn and console.error messages:

	$.console( 'My log message' );
	$.console( 'warn', 'My warning message' );
	$.console( 'error', 'My error message' );
	
We support arbitrary arguments:

	$('.selector').console('Test',[1,2,3],{a:1,b:2,c:3})

You can even turn off all console messages with the flick of a switch:

	$.console( 'disable', true ); // false to turn it back on.

License
-------

Copyright 2012, [Digital Fusion](http://teamdf.com)
Released under the [MIT license](http://teamdf.com/jquery-plugins/license/).
