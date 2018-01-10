angular.module('appModule', ['ngRoute', 'authModule'])
.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			template : '<home></home>'
		})
		.when('/about', {
			template : '<about></about>'
		})
		.when('/contact', {
			template : '<contact></contact>'
		})
		.when('/todo', {
			template : '<todo-list></todo-list>'
		})
		.when('/todo/:todoId', {
			template : '<todo-list></todo-list>'
		})
		.when('/todo-not-found', {
			template : '<not-found></not-found>'
		})
		.when('/register', {
			template : '<register></register>'
		})
		.when('/login', {
			template : '<login></login>'
		})
		.otherwise({
			template : '<not-found></not-found>'
		})
})
