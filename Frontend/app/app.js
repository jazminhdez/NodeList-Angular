//para hacer uso de $resource debemos colocarlo al crear el modulo
var app = angular.module("app", ["ngResource"]);

//con dataResource inyectamos la factoría
app.controller("appController", function ($scope ,dataResource) {
    
     
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
        item.parentNode.removeChild(item);   
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




//de esta forma tan sencilla consumimos con $resource en AngularJS
app.factory("dataResource", function ($resource) {
    
    return $resource("data.json/:id",{},{'query':  {method:'GET', isArray:true}});
    
});

