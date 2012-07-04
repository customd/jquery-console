/**
 * jQuery debug-console plug-in 1.0.0
 * Copyright 2012, Digital Fusion
 * Licensed under the MIT license.
 * http://teamdf.com/jquery-plugins/license/
 *
 * @author Sam Sehnert
 * @desc A jquery plugin to provide easy to use wrappers for debugging jquery.
 */

(function($){
	
	/**
	 * The plugins name. Rename this if it conflicts with another plugin.
	 */
	var plugin_name = 'console',
		_disabled	= { log : $.noop, warn : $.noop, error : $.noop },
		_enabled	= 'console' in window ? window.console : _disabled 
		_console	= _enabled;
	
	/**
	 * Plugin method calling handler.
	 *
	 * @param method string : (opt) Calls the defined method (or init function if omitted).
	 * @param arguments		: Any remaining arguments will be passed as arguments to the recieving method. 
	 *
	 * @return mixed : Returns the result of the called method.
	 */
	$.fn[plugin_name] = function(){
		if( _console && _console.log ){
			try{
				_console.log.apply( _console, arguments );
				this.each(function(){ _console.log.apply( _console, arguments ); });
			} catch(e){
				try{
					// Hack for IE, which doesn't allow .apply on console methods.
					for( var i in arguments ){ _console.log( arguments[i] ); }
					this.each(function(i,elem){ _console.log( i, elem ); })
				} catch(e){ /* Just in case... */}
			}
		}
		return this;
	}
	
	// The methods array will allow you to define public methods that
	// can be called using the plugin function using the following syntax;
	//
	// $.plugin_name( 'log'/*, optional messages */);
	// $.plugin_name( 'warn'/*, optional messages */);
	// $.plugin_name( 'error'/*, optional messages */);
	//
	// The 'log' method is special, and will also be called when the user calls;
	//
	// $.plugin_name(/* messages */);
	var methods = {
				
		/**
		 * Prints a log level message to the console.
		 * 
		 * $.console( 'Log level message' );
		 */
		log : function( message ){
			if( _console && _console.log ){
				_console.log( message );
			}
		},
		
		/**
		 * Prints a warning level message to the console.
		 * 
		 * $.console( 'warn', 'Warn level message' );
		 */
		warn : function( message ){
			if( _console && _console.warn ){
				_console.warn( message );
			}
		},
		
		/**
		 * Prints an error level message to the console.
		 * 
		 * $.console( 'error', 'Error level message' );
		 */
		error : function( message ){
			if( _console && _console.error ){
				_console.error( message );
			}
		},
		
		/**
		 * Use this to enable or disable console logging.
		 * 
		 * $.console( 'disable', true ); // Disable console output
		 * $.console( 'disable', true ); // Re-enable console output
		 */
		disable : function( disable )
		{
			_console = disable === true ? _disabled : _enabled;
		}
	}
	
	/**
	 * Plugin method calling handler.
	 *
	 * @param method string : (opt) Calls the defined method (or init function if omitted).
	 * @param arguments		: Any remaining arguments will be passed as arguments to the recieving method. 
	 *
	 * @return mixed : Returns the result of the called method.
	 */
	$[plugin_name] = function( method ){
		// Method calling logic
		if ( method in methods && arguments.length > 1 ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else {
			return methods.log.apply( this, arguments );
		}	
	}
	
})(jQuery);