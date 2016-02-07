app.controller('UserController', ['$scope','$resource',function($scope,$resource) {
	var User = $resource('/api/users');
	$scope.userlist = []; 
	// Query in database to get list of all users
	var users = User.query(function(){		
		$scope.userlist = users;
		console.log('CLient'+users);
	});
	
	// Create User
	$scope.AddUser = function(){	
		var user = new User(); 
		user.name = $scope.Name;
		user.$save();
    	$scope.userlist.push({
    		name: $scope.Name
    	});
    	$scope.Name = '';
    }
	
	//delete all Users
	$scope.DeleteAllUsers = function(){	
		var user = new User();
		user.$delete();	
		$scope.userlist = []; 
	}	
	
}]);   