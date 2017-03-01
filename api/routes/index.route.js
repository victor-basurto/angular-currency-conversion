module.exports.getRoute = (req, res, next) => {
	res.render( './pages/index/index.pug' );
	next();
}