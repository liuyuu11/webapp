app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.test = 'snoob';
	//轮播图控制器
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000, //可选选项，自动滑动
		pagination: '.swiper-pagination',
		autoplayDisableOnInteraction: false,
		loop: true,
	})
}]);