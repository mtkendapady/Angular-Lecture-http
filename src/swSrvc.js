angular.module( "httpFun" )
  .service( "starwarsService" , function( $http ) {

    this.getSWData = function() {
      return $http( {
        method: "GET" ,
        url: "http://swapi.co/api/films/1/"
      } ).then( function successCallback( response ) {
        console.log( response );
        return response.data;
      }, function errorCallback( response ) {
        console.log( response );
      } )
    }
  } ) ;
