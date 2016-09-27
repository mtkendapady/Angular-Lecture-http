angular.module( "giphySearch" )
	.controller( "homeCtrl", function( $scope, gifService ) {

		$scope.test = "test";

		$scope.isVisible = false;
		$scope.ShowHide = function() {
			//If DIV is visible it will be hidden and vice versa.
			$scope.IsVisible = $scope.IsVisible ? false : true;
		};

		// Example 1
		$scope.getGiphData = function() {
			gifService.getData( $scope.searchEx1 )
				.then( function( returnedGif ) {
					$scope.giphData = returnedGif.data.data.fixed_height_downsampled_url;
					$scope.searchEx1 = "";
				} );
		};

		// Example 2
		$scope.getGiphy = function() {
			gifService.getGiphy( $scope.searchEx2 )
				.then( function( response ) {
					console.log( response )
					$scope.gifData = response.data.fixed_height_downsampled_url;
					$scope.searchEx2 = "";
				} )
		}

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
