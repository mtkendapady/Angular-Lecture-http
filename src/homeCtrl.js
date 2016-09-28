angular.module( "httpFun" )
  .controller( "homeCtrl" , function( $scope, starwarsService, gifService ) {
    //$scope.test = "test";
    starwarsService.getSWData()
      .then( function( response ) {
        console.log( response );
        $scope.swdata = response;
      } )


    $scope.getGiphData = function() {
      gifService.getGIFData( $scope.searchgif )
        .then( function( returnGif ) {
          console.log( returnGif );
          $scope.giphdata = returnGif.data.fixed_height_downsampled_url;
        } )
    }

  } ) ;
