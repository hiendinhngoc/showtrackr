angular.module('MyApp')
	.controller('DetailCtrl', ['$scope', '$rootScope', '$routeParams', 'Show', 'Subscription',
		function($scope, $rootScope, $routeParams, Show, Subscription) {
			Show.get({
				_id: $routeParams.id
			}, function(show) {
				$scope.show = show;

				$scope.isSubscribed = function() {
					return $scope.show.subsribers.indexOf($rootScope.currentUser._id) !== -1;
				};

				$scope.subsribe = function() {
					Subscription.subsribe(show).success(function() {
						var index = $scope.show.subsribers.indexOf($rootScope.currentUser._id);
						$scope.show.subsribers.splice(index, 1);
					});
				};

				$scope.nextEpisode = show.episodes.filter(function(episode) {
					return new Date(episode.firstAired) > new Date();
				})[0];
			});
		}
	]);