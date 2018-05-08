var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browsersync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require("gulp-notify"),
		rsync         = require('gulp-rsync');

gulp.task('browser-sync', function() {
	browsersync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// open: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	})
});

gulp.task('sass_index', function() {
	return gulp.src('app/lp-assets/sass_index/**/*.sass')
	.pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '_index.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/lp-assets/css'))
	.pipe(browsersync.reload( {stream: true} ))
});



gulp.task('sass_thankYou', function() {
    return gulp.src('app/lp-assets/sass_thankYou/**/*.sass')
        .pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
        .pipe(rename({ suffix: '_thankYou.min', prefix : '' }))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
        .pipe(gulp.dest('app/lp-assets/css'))
        .pipe(browsersync.reload( {stream: true} ))
});

gulp.task('sass_refer', function() {
    return gulp.src('app/lp-assets/sass_refer/**/*.sass')
        .pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
        .pipe(rename({ suffix: '_refer.min', prefix : '' }))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
        .pipe(gulp.dest('app/lp-assets/css'))
        .pipe(browsersync.reload( {stream: true} ))
});

gulp.task('sass_fb', function() {
    return gulp.src('app/lp-assets/sass_fb/**/*.sass')
        .pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
        .pipe(rename({ suffix: '_fb.min', prefix : '' }))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
        .pipe(gulp.dest('app/lp-assets/css'))
        .pipe(browsersync.reload( {stream: true} ))
});

gulp.task('js_fb', function() {
    return gulp.src([
        'app/lp-assets/libs/jquery/dist/jquery.min.js',
        'app/lp-assets/libs/tether-1.3.3/dist/js/tether.min.js',
        'app/lp-assets/js/common_fb.js', // Always at the end
    ])
        .pipe(concat('scripts_fb.min.js'))
        // .pipe(uglify()) // Mifify js (opt.)
        .pipe(gulp.dest('app/lp-assets/js'))
        .pipe(browsersync.reload({ stream: true }))
});



gulp.task('js_thankYou', function() {
    return gulp.src([
        'app/lp-assets/libs/jquery/dist/jquery.min.js',
        'app/lp-assets/libs/tether-1.3.3/dist/js/tether.min.js',
        'app/lp-assets/js/common_thankYou.js', // Always at the end
    ])
        .pipe(concat('scripts_thankYou.min.js'))
        // .pipe(uglify()) // Mifify js (opt.)
        .pipe(gulp.dest('app/lp-assets/js'))
        .pipe(browsersync.reload({ stream: true }))
});


gulp.task('js_refer', function() {
    return gulp.src([
        'app/lp-assets/libs/jquery/dist/jquery.min.js',
        'app/lp-assets/libs/tether-1.3.3/dist/js/tether.min.js',
        'app/lp-assets/js/common_refer.js', // Always at the end
    ])
        .pipe(concat('scripts_refer.min.js'))
        // .pipe(uglify()) // Mifify js (opt.)
        .pipe(gulp.dest('app/lp-assets/js'))
        .pipe(browsersync.reload({ stream: true }))
});




gulp.task('js', function() {
	return gulp.src([
		'app/lp-assets/libs/jquery/dist/jquery.min.js',
		'app/lp-assets/libs/tether-1.3.3/dist/js/tether.min.js',
		'app/lp-assets/libs/bootstrap/js/bootstrap.min.js',
		'app/lp-assets/libs/FlipClock-master/compiled/flipclock.min.js',
		'app/lp-assets/libs/particlesJs/particles.js',
		'app/lp-assets/libs/rangeslider.js-2.3.0/rangeslider.min.js',
		'app/lp-assets/libs/slick-1.8.0/slick/slick.js',
		'app/lp-assets/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/lp-assets/js'))
	.pipe(browsersync.reload({ stream: true }))
});

gulp.task('rsync', function() {
	return gulp.src('app/**')
	.pipe(rsync({
		root: 'app/lp-assets',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Includes files to deploy
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});


gulp.task('watch', ['sass_index','sass_thankYou','sass_refer', 'sass_fb', 'js' ,'js_fb', 'js_thankYou','js_refer', 'browser-sync'], function() {
	gulp.watch('app/lp-assets/sass_index/**/*.sass', ['sass_index']);
	gulp.watch('app/lp-assets/sass_thankYou/**/*.sass', ['sass_thankYou']);
	gulp.watch('app/lp-assets/sass_refer/**/*.sass', ['sass_refer']);
	gulp.watch('app/lp-assets/sass_fb/**/*.sass', ['sass_fb']);
	gulp.watch(['libs/**/*.js', 'app/lp-assets/js/common.js'], ['js']);
	gulp.watch(['libs/**/*.js', 'app/lp-assets/js/common_fb.js'], ['js_fb']);
	gulp.watch(['libs/**/*.js', 'app/lp-assets/js/common_thankYou.js'], ['js_thankYou']);
	gulp.watch(['libs/**/*.js', 'app/lp-assets/js/common_refer.js'], ['js_refer']);
	gulp.watch('app/*.html', browsersync.reload)
});

gulp.task('default', ['watch']);
