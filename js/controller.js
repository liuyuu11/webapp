app.controller('indexCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.test = 'snoob';
	//轮播图控制器
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000, //可选选项，自动滑动
		pagination: '.swiper-pagination',
		autoplayDisableOnInteraction: false,
		loop: true,
	})

}]);

app.controller('newsCtrl', ['$rootScope', '$http', function($rootScope, $http) {
	/*参数：top(头条，默认),shehui(社会),guonei(国内),guoji(国际),yule(娱乐),tiyu(体育)junshi(军事),keji(科技),caijing(财经),shishang(时尚)*/
	$rootScope.arr = ['top', 'guoji', 'guonei', 'shehui', 'yule', 'tiyu', 'junshi', 'keji', 'caijing', 'shishang'];
	$rootScope.page = 0;
	$rootScope.loadNews = function(page) {
			$http.jsonp('news.php', {
				params: {
					q: $rootScope.arr[page],
					callback: 'JSON_CALLBACK'
				}
			}).success(function(data) {
				console.log(data);
				$rootScope.news = data.result.data;
			})
		}
		//下拉刷新完成动画
	$rootScope.doRefresh = function() {
		if($rootScope.page == 9) {
			$rootScope.page = 0;
		}
		$rootScope.page++;
		$http.jsonp('news.php', {
				params: {
					q: $rootScope.arr[$rootScope.page],
					callback: 'JSON_CALLBACK'
				}
			}).success(function(data) {
				$rootScope.news = data.result.data.concat($rootScope.news);
				console.log($rootScope.news.length);
			})
			.finally(function() {
				$rootScope.$broadcast('scroll.refreshComplete');
			});
	};
}]);

app.controller('topCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 0;
	$rootScope.loadNews($rootScope.page);
}]);

app.controller('guojiCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 1;
	$rootScope.loadNews($rootScope.page);
}]);

app.controller('guoneiCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 2;
	$rootScope.loadNews($rootScope.page);
}]);

app.controller('shehuiCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 3;
	$rootScope.loadNews($rootScope.page);
}]);

app.controller('yuleCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 4;
	$rootScope.loadNews($rootScope.page);
}]);

app.controller('tiyuCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 5;
	$rootScope.loadNews($rootScope.page);
}]);

app.controller('junshiCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 6;
	$rootScope.loadNews($rootScope.page);
}]);

app.controller('kejiCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 7;
	$rootScope.loadNews($rootScope.page);
}]);

app.controller('caijingCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 8;
	$rootScope.loadNews($rootScope.page);
}]);

app.controller('shishangCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$rootScope.page = 9;
	$rootScope.loadNews($rootScope.page);
}]);

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
			$scope.b0=data.result[14].b0;
			$scope.b90=data.result[14].b90;
			$scope.b93=data.result[14].b93;
			$scope.b97=data.result[14].b97;
			$scope.city=data.result[14].city;
		});
}]);