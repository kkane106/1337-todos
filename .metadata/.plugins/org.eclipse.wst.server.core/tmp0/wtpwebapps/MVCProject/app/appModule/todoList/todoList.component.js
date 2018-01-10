angular.module('appModule')
.component('todoList', {
	templateUrl : 'app/appModule/todoList/todoList.component.html',
	controller : function($routeParams, todoService, $filter, $location, $cookies) {
		var vm = this;
		
		
		vm.message = null;
		
		vm.selected = null;
		
		vm.editTodo = null;

	    vm.todos = [];
	    
//	    console.log("ROUTEPARAMS", $routeParams)
	    if (!vm.selected && parseInt($routeParams.todoId)) {
	    		todoService.show($routeParams.todoId)
	    			.then(function(response) {
	    				console.log(response);
	    				
	    				vm.selected = response.data;
	    			})
	    			.catch(function(response) {
	    				console.log(response)
	    				$location.path('/todo-not-found')
	    			})
	    }

	    
	    
	    var reloadTodos = function() {
	    		vm.message = "LOADING...."
	    		todoService.index()
	    			.then(function(res) {
	    				console.log(res.data);
	    				vm.todos = res.data;
	    				vm.message = null;
	    			})
	    			.catch(console.error);
	    }
	    
	    reloadTodos();

	    vm.addTodo = function(todo) {
	    		todoService.create(todo)
	    			.then(function(res) {
	    				reloadTodos();
	    			})
	    }
	    
	    vm.crossOut = function(bool) {
//	    	(todo.completed) ? 'strike' : '';
	    		if (bool) {
	    			return 'strike';
	    		}
	    		return '';
	    }
	    
	    
	    vm.warnUser = function() {
	    		var numTodos = vm.countTodos();
	    		if (numTodos > 10) {
	    			return "danger";
	    		}
	    		if (numTodos > 5) {
	    			return "warn";
	    		}
	    		return "success";
	    }
	    
	    vm.updateTodo = function(edittedTodo) {
	    		todoService.update(edittedTodo)
	    			.then(function(res) {
	    				reloadTodos();
	    				vm.selected = vm.editTodo; 
	    				vm.editTodo = null;	    		
	    			})
	    }
	    
	    vm.deleteTodo = function(id) {
	    		todoService.destroy(id)
	    			.then(function(res) {
	    				reloadTodos();
	    			})
	    }
	    
	    
	    vm.setEditTodo = function() {
	    		vm.editTodo = angular.copy(vm.selected);
	    }
	    
	    vm.displayTable = function() {
			vm.selected = null;
		}
		
	    vm.displayTodo = function(todo) {
	    		vm.selected = todo;
	    }
		
		vm.countTodos = function() {
			return $filter('incomplete')(vm.todos).length;
		}
		
	},
	controllerAs : 'vm'
});