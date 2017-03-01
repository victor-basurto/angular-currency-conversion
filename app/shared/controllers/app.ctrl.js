(function() {
	'use strict';
	/**
	 * Module Definition
	 */
	angular.module( 'App.shared', [] )
		.controller( 'AppCtrl', AppCtrl );
	/**
	 * [$inject modules to be used]
	 * @type {Array} - list of modules
	 */
	AppCtrl.$inject = [];
	/* jshint latedef: false*/
	/**
	 * Main Contructor
	 */
	function AppCtrl() {
		var vm = this;

		vm.appController = 'Hello from Shared App Controller';
	}
})();