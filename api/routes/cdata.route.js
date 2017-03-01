const request = require( 'request' ),
	morgan = require( 'morgan' );

const CURRENCYROOT = 'https://openexchangerates.org/api/latest.json?app_id=',
	ACCESS_KEY = '5b9fbcbfe3f149ad93ade4185b4f91ca';

module.exports.getJSON = ( req, res ) => {
	request( CURRENCYROOT + ACCESS_KEY, (err, response, body) => {
		if( !err && res.statusCode === 200 ) {
			res.send( body );
		}
	});
}