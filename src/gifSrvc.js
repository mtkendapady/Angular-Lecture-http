angular.module( "giphySearch" )
	.service( "gifService", function( $http ) {
		var baseUrl = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=";

	this.getCharacters = function() {
		return $http.get( baseUrl + "people" );
	}

	// Example 1
	this.getData = function(giphSearch) {
		console.log(giphSearch);
		return $http.get(baseUrl + giphSearch);
					$http({
						method: 'GET',
						url: baseUrl + giphSearch,
				}).then(function(response) {
						console.log(response.data);
						var giphResponse = response.data.data;
						console.log(giphResponse);
						return giphResponse;
				});
		};

	// Example 2

	this.getGiphy = function( gifSearch ) {
		return $http.get( baseUrl + gifSearch)
			.then(function(response){
				return response.data;
			} )
	}



	} );
