//npm install -g gulp && npm install gulp
var gulp = require('gulp');
//压缩js依赖 npm install gulp-uglify
var uglify = require('gulp-uglify');
//重命名包
var rename = require('gulp-rename');
//合并JS文件
var concat = require('gulp-concat');
//压缩css
var minifycss = require('gulp-minify-css');
//压缩html
//var minifyhtml = require('gulp-minify-html');
//压缩图片
//var minifyimage = require('gulp-imagemin');
//添加监听器
var watch = require('gulp-watch');


//创建任务
gulp.task('minify', function() {
		gulp.src('./build/js/*/*.js')
			//执行方法
			.pipe(uglify())
			//合并到XX名的.js
			.pipe(concat('main.js'))
			//重命名加上.min
			.pipe(rename({
				suffix: '.min',
			}))
			//导出去
			.pipe(gulp.dest('./js'))
	})
	//压缩css
gulp.task('minifycss', function() {
	gulp.src('./build/css/*.css')
		.pipe(minifycss())
		.pipe(concat('main.css'))
		.pipe(rename({
			suffix: '.min',
		}))
		.pipe(gulp.dest('./css'))
})

/*gulp.task('minifyhtml', function() {
	gulp.src('./html/*.html')
		.pipe(minifyhtml())
		.pipe(rename({
			suffix: '.min',
		}))
		.pipe(gulp.dest('./build/html'))
})

gulp.task('minifyimage', function() {
	gulp.src('./img/*.+(jpg|png)')
		.pipe(minifyimage(
			optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
			progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
			interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
			multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
		))
		.pipe(gulp.dest('./build/img'))
})*/


gulp.task('watch',function(){
	gulp.watch('./build/css/*.css',['minifycss']);
	gulp.watch('./build/js/*/*.js',['minify']);
})

//默认执行
/*gulp.task('default', ['minify', 'minifycss', 'minifyhtml', 'minifyimage']);*/
gulp.task('default', ['watch']);