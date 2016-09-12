app.controller('newCtrl', ['$http', '$scope', 'httpServer','timeServer',function($http, $scope, httpServer,timeServer) {
	//新闻页面数初始化
	$scope.page = 0;
	//初始新闻类型
	$scope.newId = "popular";
	//文章加载存放
	$scope.articles = [];
	//获取新闻导航栏
	var promise = httpServer.getNewsType(); //同步调用，获取承诺接口
	promise.then(function(data) {
		$scope.newsType = data;
	})

	console.log($scope.newId);
	$scope.click = function() {
		$scope.newId = this.newType.id;
		$scope.page = 0;
		$scope.articles = [];
		console.log($scope.newId);
		$scope.doRefresh()
	}

	//下拉刷新
	$scope.doRefresh = function() {
			$scope.page++;
			console.log("刷新" + $scope.page);
			var promise = httpServer.getNews($scope.newId, $scope.page);
			promise.then(function(data) {
				$scope.articles = data.data.article.concat($scope.articles);
				for(var i=0;i<$scope.articles.length;i++){
					$scope.articles[i].time=timeServer.getDate(	$scope.articles[i].time+"000")
				}
			}).finally(function() {
				$scope.$broadcast('scroll.refreshComplete');
			});
		}
		//上拉加载
	$scope.loadMore = function() {
			$scope.page++;
			console.log("刷新" + $scope.page);
			var promise = httpServer.getNews($scope.newId, $scope.page);
			promise.then(function(data) {
				$scope.articles = $scope.articles.concat(data.data.article);
				for(var i=0;i<$scope.articles.length;i++){
					$scope.articles[i].time=timeServer.getDate(	$scope.articles[i].time+"000")
				}
			}).finally(function() {
				$scope.$broadcast('scroll.infiniteScrollComplete');
			});
		}
		//判断加载更多是否到数据头了
	$scope.moreDataCanBeLoaded = function() {
		if($scope.page == 10) {
			return false;
		} else {
			return true;
		}
	}

	/* $http.jsonp('http://1.snoob.applinzi.com/newlist.php',{
		params:{
			callback: 'JSON_CALLBACK'
		}
	}).success(function(data) {
		$scope.newsType = data;
	})*/
}]);