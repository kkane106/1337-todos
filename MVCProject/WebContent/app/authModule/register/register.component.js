angular.module('authModule')
.component('register', {
	templateUrl : 'app/authModule/register/register.component.html',
	controllerAs : 'vm',
	controller : function(authService) {
		var vm = this;
		
		vm.registerUser = function(user) {
			if (user.password === user.confirm) {
				delete user.confirm;
				authService.register(user)
			} else {
				console.log("PASSWORDS DO NOT MATCH")
			}
		}
	}
})