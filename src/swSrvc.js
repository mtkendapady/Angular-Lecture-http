angular.module( "giphySearch" )
	.service( "starwarsService", function( $http ) {

	this.getSW = function() {
		return $http({
		  method: 'GET',
		  url: 'http://swapi.co/api/films/1/'
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		    console.log(response);
				return response.data;
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    console.log(response);
		  });
	}
	} );
