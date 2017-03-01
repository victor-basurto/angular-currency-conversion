const gulp = require( 'gulp' ),
	uglify = require( 'gulp-uglify' ),
	concat = require( 'gulp-concat' ),
	compass = require( 'gulp-compass' ),
	plumber = require( 'gulp-plumber' ),
	autoPrefixer = require( 'gulp-autoprefixer' ),
	jshint = require( 'gulp-jshint' ),
	rename = require( 'gulp-rename' );

// path to files
const paths = {
	main: 'app/',
	lintSource: [ 
		'app/**/*.js',
		'app/components/**/*.js',
		'app/config/**/*.js',
		'app/shared/**/*.js',
		'app/views/**/*.js',
		'!node_modules/**', 
		'!app/assets/libs/**',
		'!app/assets/_gulp/**'
	],
	compSource: [ 
		'app/**/*.js',
		'app/components/**/*.js',
		'app/config/**/*.js',
		'app/shared/**/*.js',
		'app/views/**/*.js',
		'!node_modules/**', 
		'!app/assets/libs/**',
		'!app/assets/_gulp/**'
	],
	assetsStyles: 'app/assets/_gulp/css/',
	assetsScss: 'app/assets/',
	jsBuildDest: 'app/assets/_gulp/js/build/'
}


/**
 * [build-js]
 * task: compress js files, minify js, concat js
 */
gulp.task( 'build-script', () => {
	return gulp.src( paths.compSource )
		.pipe( concat( 'app.js' ) )
		.pipe( gulp.dest( paths.jsBuildDest ) )
		.pipe( rename( 'app.min.js' ) )
		.pipe( uglify({
			mangle: false
		}))
		.pipe( gulp.dest( paths.jsBuildDest ) );
});

/**
 * [lint]
 * task: check for errors, misspelled, and not declared javascript common errors
 */
gulp.task( 'lint', () => {
	return gulp.src( paths.lintSource )
		.pipe( jshint() )
		.pipe( jshint.reporter( 'default' ) );
});

/**
 * [build-css]
 * task: compress css files, minify css, enable scss
 */
gulp.task( 'build-css', () => {
	return gulp.src( paths.assetsStyles + 'sass/**/*.scss' )
		.pipe( plumber() )
		.pipe( compass({
			config_file: './config.rb',
			css: paths.assetsStyles + 'build',
			sass: paths.assetsScss + 'scss',
			require: [ 'susy' ]
		}))
		.pipe( autoPrefixer({
			browsers: [
				'> 1%',
				'last 2 versions',
				'firefox >= 4',
				'safari 7',
				'safari 8',
				'IE 8',
				'IE 10',
				'IE 11'
			],
			cascade: false
		}))
		.pipe( gulp.dest( paths.assetsStyles + 'build' ) );
});

/**
 * [watch]
 * task: watch for all changes
 */
gulp.task( 'watch', () => {
	gulp.watch(  paths.assetsScss + '**/*.scss', [ 'build-css' ] );
	gulp.watch( paths.compSource, [ 'build-script' ] );
	gulp.watch( paths.lintSource, [ 'lint' ] );
});

/**
 * [default]
 * task: default - run tasks
 */
gulp.task( 'default', [ 
	'build-css', 
	'build-script', 
	'lint', 
	'watch'
]);