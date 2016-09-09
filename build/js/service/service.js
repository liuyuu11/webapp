app.service('httpServer', ['$http', '$q', function($http, $q) {
	return {
		getNewsType: function() {
			var deferred = $q.defer(); //声明延迟执行，监控后面的执行
			var result;
			$http.get('json/newlist.json').success(function(data) {
				deferred.resolve(data);
			}).error(function(data) {
				deferred.reject(data);
			});
			return deferred.promise;
		},
		getNews: function(newsType,page) {
			var deferred = $q.defer();
			var result;
			$http.jsonp('http://1.snoob.applinzi.com/getNews.php', {
				params: {
					newsType: newsType,
					count: page,
					callback: 'JSON_CALLBACK'
				}
			}).success(function(data) {
				deferred.resolve(data);
			}).error(function(data) {
				deferred.reject(data);
			});
			return deferred.promise;
		}
	}
}])