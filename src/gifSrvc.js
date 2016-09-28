angular.module( "httpFun" )
  .service( "gifService" , function( $http ) {

    var baseUrl = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=";

    this.getGIFData = function( giphSearch ) {
      return $http( {
        method: "GET" ,
        url: baseUrl + giphSearch
      } ).then( function successCallback( response ) {
        console.log( response );
        return response.data;
      }, function errorCallback( response ) {
        console.log( response );
      } )
    }
  } ) ;
