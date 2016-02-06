var app = angular.module('TechBlaze',[]);  
var users = [];    
app.controller('UserController', ['$scope',function($scope) { 
    this.userlist = users;     
    this.AddUser = function(){
    	console.log('In Add user method'+$scope.Name);
    	users.push({
    		name: $scope.Name
    	});
    	$scope.Name = '';
    }
}]);     
app.controller('PanelController',['$scope',function($scope){
    $scope.tab = 1; 
    this.selectedTab = function(selTab){ 
        $scope.tab = selTab;        
    }
    this.isSelected = function(tabNo){         
        return tabNo === $scope.tab;        
    }    
}]);