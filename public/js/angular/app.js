angular.module('TechBlaze',['ngResource'])
    .controller('UserController', ['$scope','$resource',function($scope,$resource) {
    	var User = $resource('/api/users');
    	$scope.userlist = [];   
    	var users = User.query(function(){
    		console.log('@@@@@@@@@@@@@@@@---'+users.length);
    		$scope.userlist = users;
    	});
    	//console.log('@@@@@@@@@@@@@@@@---'+users);
    	$scope.AddUser = function(){	
    		var user = new User(); 
    		user.name = $scope.Name;
    		user.$save();
	    	$scope.userlist.push({
	    		name: $scope.Name
	    	});
	    	$scope.Name = '';
	    }
   	
    }]);     