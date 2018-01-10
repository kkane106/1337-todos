angular.module('appModule')
.factory('todoService', function($http) {
	var service = {};
		
	var todos = [
        {
          id : 1,
          task : 'Go round mums',
          description : '',
          completed : true
        },
        {
          id : 2,
          task : 'Get Liz back',
          description : '',
          completed : false
        },
        {
          id : 3,
          task : 'Sort life out',
          description : '',
          completed :  false
        }
      ];
	
	var generateId = function() {
		return todos[todos.length-1].id + 1;
	}
	
	service.index = function() {
		return $http({
			url: 'https://nameless-depths-81017.herokuapp.com/todos',
			method : 'GET'
		})
//		return todos;
	}
	
	service.create = function(todo) {
		var todo = angular.copy(todo);
		todo.id = generateId();
		todo.description = '';
		todo.completed = false;
		todos.push(todo);
	}
	
	service.update = function(edittedTodo) {
		todos.forEach(function(todo, idx, array) {
			if (todo.id === edittedTodo.id) {
				array.splice(idx, 1, edittedTodo);
			}
		});
	}
	
	service.destroy = function(id) {
		todos.forEach(function(todo, idx, array) {
			if (todo.id === id) {
				array.splice(idx, 1);
			}
		})
	}
	
	return service;
})

