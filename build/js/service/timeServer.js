app.service('timeServer',[function(){
	return{
		// 将当前时间换成时间格式字符串
		getDate:function(time){
			var newDate = new Date();
			newDate.setTime(time);
			return newDate.toLocaleString();
		},
	}
}]);