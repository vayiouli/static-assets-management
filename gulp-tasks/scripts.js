// scripts task dependencies
import gulp from 'gulp';
import jshint from 'gulp-jshint';
import concat from 'gulp-concat';
import minifyjs from 'gulp-uglify';
import util from 'gulp-util';
import config from '../config';

// scripts task
const scripts = () => {
	return gulp
		.src(config.scripts.src)
		.pipe(jshint()) // static code analysis
  		.pipe(jshint.reporter('default', { verbose: true })) // log errors
		.pipe(jshint.reporter('fail')) // fail task in case of error
		.pipe(concat(config.scripts.filename))
		.pipe(minifyjs())
		.on('error', function (err) {
			util.log(util.colors.red('[Error]'), err.toString());
		})
		.pipe(gulp.dest(config.scripts.dest))
};

export default scripts;
