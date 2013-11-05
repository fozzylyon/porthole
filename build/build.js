'use strict';

module.exports = function ( grunt ) {


	grunt.loadNpmTasks( 'grunt-contrib-requirejs' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );

	// grunt.file.setBase( './build' );

	var uglifyFiles = {};
	uglifyFiles[ 'porthole.min.js' ] = [ 'porthole.js' ];

	grunt.config.set( 'uglify', {
		'js' : {
			'files' : uglifyFiles
		}
	} );

	grunt.config.set( 'requirejs', {
		'compile' : {
			'options' : {
				'baseUrl'        : 'lib',
				'mainConfigFile' : 'lib/require-config.js',
				'include'        : [ '../build/almond', 'main' ],
				'stubModules'    : [ 'text' ],
				'out'            : 'porthole.js',

				'optimize'  : 'none',
				'useStrict' : true,
				'logLevel'  : 0,
				'wrap'      : {
					'startFile' : './build/wrap.start',
					'endFile'   : './build/wrap.end'
				}
			}
		}
	} );

	grunt.registerTask( 'build', 'builds js with r.js optimizer (requirejs)', [ 'build:js', 'uglify:js' ] );

	grunt.registerTask( 'build:js', 'builds f/e with requirejs optimizer (r.js)', [ 'requirejs' ] );

};