const indexrt = require( './index.route' ),
	currencyData = require( './cdata.route' );

module.exports = api => {
	api.route( '/' ).get( indexrt.getRoute );
	api.route( '/api/data' ).get( currencyData.getJSON );
}