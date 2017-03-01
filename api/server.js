const express = require( 'express' ),
	path = require( 'path' ),
	morgan = require( 'morgan' ),
	bodyParser = require( 'body-parser' ),
	methodOverride = require( 'method-override' ),
	pug = require( 'pug' ),
	config = require( './config/server_config' ),
	mongoose = require( './config/mongoose_config' );

const db = mongoose(),
	api = express();
	
api.set( 'views', path.join( __dirname, 'views' ));
api.set( 'view engine', 'pug' );

api.use( morgan( 'dev' ) );
api.use( bodyParser.urlencoded({ 'extended': 'true' }) );
api.use( bodyParser.json() );
api.use( bodyParser.json({ type: 'application/vnd.api+json' }));
api.use( methodOverride() );
api.use( '/', express.static( 'app' ) );	// views

require( './routes/_all-routes' )( api );

api.listen( config.port, () => {
	console.log( 'app running in http://localhost:' + config.port );
});