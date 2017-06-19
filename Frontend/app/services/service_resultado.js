app.factory('service_resultado', ['$http', function($http){
    var obj={};
    
    obj.obtenerDatos= function (obj)
    {
        return $http.post(/api/eliminarNodo,obj);
    }
    
    
	return obj;
}]);