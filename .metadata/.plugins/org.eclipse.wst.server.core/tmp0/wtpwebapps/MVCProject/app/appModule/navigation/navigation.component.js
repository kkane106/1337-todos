angular.module('appModule')
.component('navigation', {
	templateUrl : 'app/appModule/navigation/navigation.component.html',
	controllerAs : 'vm',
	controller : function(authService) {
		var vm = this;
		
		vm.checkLogin = function() {
			if(authService.getToken().id) {
				return true;
			}
			return false;
		}
	}
})