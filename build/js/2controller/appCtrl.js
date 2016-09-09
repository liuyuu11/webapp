



app.controller('littleAppCtrl', ['$scope', '$ionicSideMenuDelegate', function($scope, $ionicSideMenuDelegate) {
	$scope.title = "小应用";
	$scope.state = ">";
	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
		if($scope.state == ">") {
			$scope.state = "<";
		} else {
			$scope.state = ">";
		}
	};
}]);

app.controller('oilCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$http.get('--oilprice.php')
		.success(function(data) {
			console.log(data.result);
			$scope.b0 = data.result[14].b0;
			$scope.b90 = data.result[14].b90;
			$scope.b93 = data.result[14].b93;
			$scope.b97 = data.result[14].b97;
			$scope.city = data.result[14].city;
		});
}]);

app.controller('weatherCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$http.jsonp('http://1.nodeweb.applinzi.com/getWeatherData', {
			params: {
				city: '深圳',
				callback: 'JSON_CALLBACK'
			}
		})
		.success(function(data) {
			console.log(data);
			$scope.data=data;
			$scope.today=data.result.today;
			$scope.future=data.result.future;
			$scope.sk=data.result.sk;
			console.log($scope.today);
		});
}]);