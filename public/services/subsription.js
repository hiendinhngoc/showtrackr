angular.module('MyApp')
	.factory('Subscription', ['$http', function($http){
		return{
			subsribe: function(show, user){
				return $http.post('/api/subsribe', { showId: show._id});
			},
			unsubsribe: function(show, user){
				return $http.post('/api/unsubsribe', { showId: show._id});
			}
		};
	}]);