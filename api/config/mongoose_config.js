const config = require( './server_config' ),
	mongoose = require( 'mongoose' );

module.exports = () => {
	let db = mongoose.connect( config.mongoURI );

	/**
	 * connection promise
	 * @param  {Object} resolve [when connection is stablish]
	 * @param  {Object} reject [if something went wrong]
	 * @return {Method} db [connect to Db]
	 */
	let dbP = new Promise( (resolve, reject) => {
		let connected = true;
		if ( !connected ) {
			throw new Error( 'something went wrong' );
		} else {
			resolve( db );
		}
	});

	// if connection OK, send message
	dbP.then( () => {
		console.log( 'connection stablished successfully' );
	});

	return db;
}