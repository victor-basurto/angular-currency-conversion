(function() {
	'use strict';
	angular
		.module( 'CurrencyAPI.shared', [] )
		.factory( 'CurrencyAPI', CurrencyAPI );

	CurrencyAPI.$inject = [ '$http', '$log' ];

	/* jshint latedef: false*/
	/**
	 * [CurrencyAPI contructor]
	 * @param {Service} $http [get data]
	 */
	function CurrencyAPI( $http, $log ) {

		return {
			getData: getData,
			getCountry: getCountry
		};

		/**
		 * [getData - get all currency data]
		 * @return {Promise} - [currencyData is returned]
		 */
		function getData() {
			return $http({
				url: '/api/data',
				method: 'GET',
				dataType: 'jsonp',
				headers: { 'Accept': 'application/json' }
			})
			.then( dataComplete )
			.catch( dataError );
		}

		/**
		 * [getCountry - get all countries]
		 * @return {Promise} - [Country with abbr is returned]
		 */
		function getCountry() {
			return $http({
				url: 'shared/currency-data.json',
				method: 'GET',
				dataType: 'jsonp',
				headers: { 'Accept': 'application/json' }
			})
			.then( dataComplete )
			.catch( dataError );
		}

		/**
		 * success handler
		 */
		function dataComplete( res ) {
			return res.data;
		}
		/**
		 * error handler
		 */
		function dataError( err ) {
			return $log.debug( 'There\'s an error on: ' + err.data );
		}
	}
})();