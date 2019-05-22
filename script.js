var pokemo= angular.module("pokemon",[])
pokemon.controller("pokedex",function($Scope,$rootScope,$http){
	$http({
		method:"GET",
		url:"https://pokeapi.co/api/v2/pokemon/25/"
	}).then(function callbacksuccess(y){
		console.log(y);
	})
})