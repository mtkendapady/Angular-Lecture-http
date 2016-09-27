angular.module( "giphySearch" )
	.controller( "homeCtrl", function( $scope, starwarsService, gifService ) {

		$scope.test = "test";

		$scope.isVisible = false;
		$scope.ShowHide = function() {
			//If DIV is visible it will be hidden and vice versa.
			$scope.IsVisible = $scope.IsVisible ? false : true;
		};

    starwarsService.getSW()
        .then( function( response ) {
          console.log( response );
          $scope.swdata = response;
        } )

		// Example 2
		$scope.getGiphData = function() {
			gifService.getData( $scope.searchEx1 )
				.then( function( returnedGif ) {
          console.log(returnedGif)
					$scope.giphData = returnedGif.fixed_height_downsampled_url;
					$scope.searchEx1 = "";
				} );
		};

		// Example 2 (With Notes)
    $scope.getGiphy = function() {
			// This service's function returns a promise
			gifService.getGiphy( $scope.searchEx2 )
				// then() called when son gets back
				.then( function( response ) {
					// promise fulfilled
					console.log( response )
					$scope.gifData = response.data.fixed_height_downsampled_url;
					$scope.searchEx2 = "";
				}, function( error ) {
					// promise rejected, could log the error);
					console.log( 'error', error );
				} );
		};

    // Example 2 (Without Notes)
		// $scope.getGiphy = function() {
		// 	gifService.getGiphy( $scope.searchEx2 )
		// 		.then( function( response ) {
		// 			console.log( response )
		// 			$scope.gifData = response.data.fixed_height_downsampled_url;
		// 			$scope.searchEx2 = "";
		// 		}, function( error ) {
		// 			console.log( 'error', error );
		// 		} );
		// };

		// Copies Gif URL to clipboard
		$scope.copyToClipboard = function( url ) {
			var copyFrom = document.createElement( "textarea" );
			copyFrom.textContent = $scope.gifData;
			var body = document.getElementsByTagName( 'body' )[ 0 ];
			body.appendChild( copyFrom );
			copyFrom.select();
			document.execCommand( 'copy' );
			body.removeChild( copyFrom );
			// this.flashMessage('over5');
		}

	} )
