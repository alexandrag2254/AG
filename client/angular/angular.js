
var application = angular.module('application',[]);

application.config(function($routeProvider){

	$routeProvider
	.when('/',{ templateUrl: 'partials/login.html' })
	.when('/admin',{ templateUrl: 'partials/admin_portal.html'})
	.when('/student', { templateUrl: 'partials/user_portal.html'})
	.otherwise( { redirectTo: "/" });

});


//login controller
application.controller('loginController', function($scope, $location, loginFactory){

	// $("#admin_login").hide();

 //  	$scope.admin = function(){
	// 	$("#admin_login").show();
	// }

	$scope.studentLogin = function(){
		console.log('studentLogin');

		if($scope.student == undefined || $scope.student.name == "" || $scope.student.name == " " || $scope.student.password == "" || $scope.student.password == " "){
			$scope.errors_studentlogin = "Name/Password must be filled";
			return;
		}
		
		// else{
		// 	$scope.errors_studentlogin = '';
		// 	// console.log($scope.student);
		// 	loginFactory.check_login( $scope.student, function(data){
		// 		if(data == "Incorrect Information"){
		// 			$scope.errors_studentlogin = data;
		// 		}
		// 		else{
		// 			$scope.errors_studentlogin = '';
					// console.log(data);
					// console.log(data._id)
					// $rootScope.id = data._id;
					// $rootScope.name = data.name;
					// $scope.errors_register = '';
					$location.path('/student');
		// 		}
		// 	});
			
		// }


	}

	$scope.adminLogin = function(){
		console.log('admin_login');

		if($scope.admin == undefined || $scope.admin.name == "" || $scope.admin.name == " " || $scope.admin.password == "" || $scope.admin.password == " "){
			$scope.errors_adminlogin = "Name/Password must be filled";
			return;
		}
		
		// else{
			// $scope.errors_adminlogin = '';
			// console.log($scope.student);
			// loginFactory.check_login( $scope.admin, function(data){
			// 	if(data == "Incorrect Information"){
			// 		$scope.errors_adminlogin = data;
			// 	}
			// 	else{
			// 		$scope.errors_adminlogin = '';
			// 		// console.log(data);
			// 		// console.log(data._id)
			// 		// $rootScope.id = data._id;
			// 		// $rootScope.name = data.name;
			// 		$scope.errors_register = '';
					$location.path('/admin');
			// 	}
			// });
			
		// }

	}

});

//admin controller
application.controller('adminController', function($scope, $location, adminFactory){



});

//student controller
application.controller('studentController', function($scope, $location, studentFactory){



});





//----------------------------------------------------------------------------------------------------

//factory
application.factory('loginFactory', function($http){
	var factory = {};
	// var appointments = [];
	// factory.addAppointment = function(appointment, callback){
	// 	// console.log('facotry_in', appointment)
	// 	$http.post('/add_appointment', appointment).success(function(output){
	// 		//then send a message that appointment was added should take back to calendar view and display on list of scheduled appointments
	// 		callback(output);
	// 	})
	// };

	// factory.getContractor = function(id, callback) {
	// 	$http.get('/get_contractor/'+ id).success(function(output){
	// 		callback(output);
	// 	})
	// };

	return factory;
});

application.factory('adminFactory', function($http){
	var factory = {};


	return factory;
});

application.factory('studentFactory', function($http){
	var factory = {};


	return factory;
});
