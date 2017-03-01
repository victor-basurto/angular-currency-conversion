(function() {
	'use strict';

	var APPCONST = {
		_appName: 'Currency Converter'
	};

	/**
	 * Currency App Module
	 */
	angular
		.module( 'Currency.Config', [] )
		.constant( 'APPCONST', APPCONST )
		.config( RouteConfig );

	/**
	 * [inject modules to be used]
	 * @type {Array} - depenencies
	 */
	RouteConfig.inject = [ '$mdThemingProvider', '$stateProvider', '$urlRouterProvider' ];
	/* jshint latedef: false*/
	/**
	 * [Route Configuration through ui.router]
	 * @param {Provider} $mdThemingProvider [Themes]
	 * @param {Provider} $stateProvider     [routing]
	 * @param {Provider} $urlRouterProvider [routing]
	 */
	function RouteConfig( $mdThemingProvider, $stateProvider, $urlRouterProvider ) {

		$mdThemingProvider.theme( 'default' )
			.primaryPalette( 'grey' )
			.accentPalette( 'blue' )
			.warnPalette( 'red' );

		// default URL
		$urlRouterProvider.otherwise( '/' );

		// routing
		$stateProvider
			.state( 'currency', {
				url: '',
				templateUrl: './views/home/home.tpl.html',
				controller: 'HomeCtrl as home'
			});
	}
})();