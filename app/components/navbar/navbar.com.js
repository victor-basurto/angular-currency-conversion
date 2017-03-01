(function() {
	'use strict';
	/**
	 * [NAVBAR_COMP description]
	 * @type {Object} - OPTIONS
	 */
	var NAVBAR_COMP = {
		bindings: {},
		templateUrl: '/components/navbar/navbar.tpl.html',
		restrict: 'E',
		replace: true,
		controller: navbarComp
	};

	/**
	 * Module Definition
	 */
	angular
		.module( 'Component.navbar', [] )
		.component( 'navbar', NAVBAR_COMP );

	/**
	 * [inject modules to be used]
	 * @type {Array} - depenencies
	 */
	NAVBAR_COMP.$inject = [ 'APPCONST' ];

	/* jshint latedef: false*/
	/**
	 * [navbarComp options]
	 * @return {String} [appname]
	 */
	function navbarComp( APPCONST ) {
		var vm = this;
		vm.appTitle = APPCONST._appName;
	}
})();