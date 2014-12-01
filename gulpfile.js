var gulp = require('gulp');

var connect = require('gulp-connect'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify')
	minifyCss = require('gulp-minify-css')
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	insert = require('gulp-insert'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	templateCache = require('gulp-angular-templatecache'),
	addSrc = require('gulp-add-src');

gulp.task('clean', function() {
	return gulp.src([
			'./public/*',
		])
		.pipe(clean({ force: true }));
});
gulp.task('copyIndexFile', [ 'clean' ], function() {
	return gulp.src('./frontend/index.html')
		.pipe(gulp.dest('./public'));
});
gulp.task('generateCssBundle', [ 'clean' ], function() {
	return gulp.src('./frontend/app.style.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('./public'))
		.pipe(minifyCss())
		.pipe(rename('app.min.css'))
		.pipe(gulp.dest('./public'))
})
gulp.task('generateJsBundle', [ 'clean' ], function() {
	return gulp.src([
			'./frontend/shared/**/*.html',
			'./frontend/components/**/*.html'
		])
		.pipe(templateCache({
			standalone: true
		}))
		.pipe(addSrc([
			'frontend/app.modules.js',
			'frontend/app.routes.js',
			'frontend/shared/**/*.js',
			'frontend/components/**/*.js'
		]))
		.pipe(concat('app.js'))
		.pipe(insert.wrap(
			'(function() { "use strict"; ',
			'}());'
		))
		.pipe(gulp.dest('./public'))
		.pipe(uglify({
			// inSourceMap: 
			// outSourceMap: 'app.js.map'
		}))
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('./public'));
});

// default task
gulp.task('default', [ 'clean', 'copyIndexFile', 'generateCssBundle', 'generateJsBundle' ]);