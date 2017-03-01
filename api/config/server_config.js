require( 'dotenv' ).load();

const port = process.env.PORT || Number( 8000 ),
	mongoURI = process.env.LOCAL_DB_PATH;

module.exports = {
	port: port,
	mongoURI: mongoURI
}