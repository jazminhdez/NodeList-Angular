//para hacer uso de $resource debemos colocarlo al crear el modulo
var app = angular.module("app", ["ngResource"]);

//con dataResource inyectamos la factoría
app.controller("appController",function ($scope ,dataResource) {
    
     
  /*  
  service_resultado.obtenerDatos().success(function(data){
     $scope.datosResource =  dataResource.get();
      return $scope.datosResource;
  
  }).error(function(data){
        swal("Error!", 'Mensaje: '+ data.message, "error");
        
    });
    
  service_resultado.eliminarNodo().success(function(data){
    var item = document.getElementById(data.nombre);

        if(data.nodos.length==0)
        {
           data={};
        }
        else
        {
            item.parentNode.removeChild(item);  
        }                                         
  }).error(function(data){
			swal("Error!", 'Mensaje: '+ data.message, "error");
			
  });
  
  service_resultado.actualizarNodo().success(function(data){
        var botonEditar= document.getElementById("editar_"+data.nombre);
        var nombre= document.getElementById("nombre_"+data.nombre);
        var item = document.getElementById(data.nombre);
        var input= document.createElement("input");

        if(botonEditar.innerHTML=='Editar'){
            botonEditar.innerHTML="Guardar";
            nombre.innerHTML="";
            input.type="text";
            input.value=data.nombre;
            input.id="editarNombre";
            console.log(input);
            item.appendChild(input);
        }
        else{
             botonEditar.innerHTML="Editar";
            var editaNombre= document.getElementById("editarNombre");
            nombre.innerHTML=editaNombre.value;
            item.removeChild(editaNombre);

        }                                           
  }).error(function(data){
      swal("Error!", 'Mensaje: '+ data.message, "error");
			
  });           
  
  
  service_resultado.agregarNodo().success(function(data){
      var post = data.nodos.length + 1;
      var newName = data.nombre + '-' + post;
      data.nodos.push({nombre: newName,nodos: []});                                    
   }).error(function(data){
			swal("Error!", 'Mensaje: '+ data.message, "error");
			
   });*/
  
  
  $scope.datosResource =  dataResource.get();
  $scope.nombre={};   
  $scope.filtroNombre="";    
 
  
  $scope.agregar = function(data) {
        var post = data.nodos.length + 1;
        var newName = data.nombre + '-' + post;
        data.nodos.push({nombre: newName,nodos: []});
    };
    
    $scope.eliminar = function(data){  
        var item = document.getElementById(data.nombre);
        
        if(data.nodos.length==0)
        {
          data={};
        }
        else
        {
            item.parentNode.removeChild(item);  
        }
         
    }
    
    $scope.editar=function(data){
        
        var botonEditar= document.getElementById("editar_"+data.nombre);
        var nombre= document.getElementById("nombre_"+data.nombre);
        var item = document.getElementById(data.nombre);
        var input= document.createElement("input");
        
        if(botonEditar.innerHTML=='Editar'){
            botonEditar.innerHTML="Guardar";
            nombre.innerHTML="";
            input.type="text";
            input.value=data.nombre;
            input.id="editarNombre";
            console.log(input);
            item.appendChild(input);
        }
        else{
             botonEditar.innerHTML="Editar";
            var editaNombre= document.getElementById("editarNombre");
            nombre.innerHTML=editaNombre.value;
            item.removeChild(editaNombre);
            
        }
    }
    
    $scope.guardar= function(data){
        var formData = JSON.stringify(data);
        console.log(formData);
    }
});


app.directive('cpl-transportes',function(){
    return{
        restrict:'E',
        template: '<li ng-repeat="data in datosResource.mediosTransporte |filter:filtro.nombre  " ng-include=""index.html"" ></li>'
    };
});

//de esta forma tan sencilla consumimos con $resource en AngularJS
app.factory("dataResource", function ($resource) {
    
    return $resource("data.json/:id",{},{'query':  {method:'GET', isArray:true}});
    
});

