angular.module('appModule')
.component('todoList', {
	templateUrl : 'app/appModule/todoList/todoList.component.html',
	controller : function(todoService) {
		var vm = this;
		
		vm.selected = null;
		
		vm.editTodo = null;

	    vm.todos = [];
	    
//	    vm.todos = todoService.index();
	    var reloadTodos = function() {
	    		todoService.index()
	    			.then(function(res) {
	    				vm.todos = res.data;
	    			})
	    			.catch(console.error);
	    }
	    
	    reloadTodos();
	    
	    vm.deleteTodo = function(id) {
	    		todoService.destroy(id);
	    		reloadTodos();
	    }
	    
	    vm.updateTodo = function(edittedTodo) {
	    		todoService.update(edittedTodo);
	    		reloadTodos();
	    		vm.selected = vm.editTodo; 
	    		vm.editTodo = null;
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
			return vm.todos.length;
		}
		
		vm.addTodo = function(todo) {
			todoService.create(todo);
			reloadTodos();
		}
		
	},
	controllerAs : 'vm'
});