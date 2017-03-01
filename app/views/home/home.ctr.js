(function() {
	'use strict';

	/**
	 * Module Definition
	 */
	angular
		.module( 'View.home', [] )
		.controller( 'HomeCtrl', Home );

	/**
	 * [$inject modules to be used]
	 * @type {Array} - list of modules
	 */
	Home.$inject = [ '$http', '$log', '$q', 'CurrencyAPI' ];
	/* jshint latedef: false*/
	/**
	 * Main Contructor
	 */
	function Home( $http, $log, $q, CurrencyAPI ) {
		var vm = this;
		vm.fx = {};
		vm.user = {};
		vm.user.from = '';
		vm.user.to = '';

		vm.transformData = transformData;
		vm.getCountry = getCountry;
		vm.getRates = getRates;
		vm.loadCountry = loadCountry;
		vm.loadRates = loadRates;
		/*====================================================================*/

		// init data
		loadRates();
		/**
		 * [loadRates load data in DOM]
		 * @return {Promise} [if data, send message]
		 */
		function loadRates() {
			return getRates().then( function() {
				loadCountry();
				$log.debug('Data Loaded Successfully');
			});
		}
		/**
		 * [getRates service]
		 * @return {Promise} [get data from API]
		 */
		function getRates() {
			return CurrencyAPI.getData()
				.then( function (data) {
					if ( typeof( fx ) !== 'undefined' && fx.rates ) { // jshint ignore:line
						fx.rates = data.rates; 	// jshint ignore:line
						fx.base = data.base; 	// jshint ignore:line

						// rates are available
						vm.rates = fx.rates; 	// jshint ignore:line
					} else {
						var fxSetup = {
							rates: data.rates,
							base: data.base
						};
						$log.info(fxSetup.rates);
					}
				});
		}

		/**
		 * [loadCountry - load data]
		 * @return {Promise} - [log message]
		 */
		function loadCountry() {
			return getCountry().then( function() {
				$log.debug('Countries Loaded Successfully');
			});
		}

		/**
		 * [getCountry get country JSON file]
		 * @return {Promise} - [data is available in variable]
		 */
		function getCountry() {
			return CurrencyAPI.getCountry()
				.then( function (data) {
					// country available
					vm.countries = data;
				});
		}

		/**
		 * [transformData - currency exchange]
		 * @param  {Integer} value - [value obtained from user `views/home/home.tpl.html`]
		 * @return {[type]}       [description]
		 */
		function transformData( value ) {
			// value is now Integer
			var val = parseInt( value, 10 );
			/**
			 * [dataConverted - money.js query, for more information
			 * 				http://openexchangerates.github.io/money.js/#fx.convert]
			 * @return {Integer} `dataConverted` - [single integer with results]
			 */
			vm.dataConverted = fx( val ).convert({	// jshint ignore:line
				from: vm.user.from,
				to: vm.user.to
			});
			console.log( vm.dataConverted );
		}

		// get properties of object
		// function pluk(obj) {
		// 	var v = [], k;
		// 	for ( k in obj ) {
		// 		if ( obj.hasOwnProperty( k ) ) {
		// 			v.push( obj[ k ] );
		// 		}
		// 	}
		// 	return v;
		// }
	}
})();