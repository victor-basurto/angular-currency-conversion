(function() {
	'use strict';
	// App Dependencies
	var DEPENDENCIES = [
		'ngMaterial', 
		'ui.router', 
		'ngAnimate',

		'Currency.Config',
		'Currency.Components',
		'Currency.Views',
		'Currency.Shared'
	];

	// Angular Main Module
	angular.module( 'Currency', DEPENDENCIES );
})();