( function () {
	'use strict';

	require.config( {
		'baseUrl' : '../lib',

		'paths' : {
			'JSON' : '../bower_components/json3/lib/json3.min'
		}
	} );

	require( [ 'main' ], function( Porthole ) {
		var windowProxy = new Porthole.WindowProxy( 'iframe-build.html', 'guestFrame' );

		// Register an event handler to receive messages;
		windowProxy.addEventListener( function ( event ) {
			console.log( "parent event.data:", event.data );
		} );

		windowProxy.post({'action': 'supersizeme'});
	} );

} )();
