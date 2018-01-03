// styles task dependencies
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import minifycss from 'gulp-clean-css';
import rename from 'gulp-rename';
import config from '../config';

// styles task
const styles = () => {
	return gulp
		.src(config.styles.src)
		.pipe(sourcemaps.init())
 	 	.pipe(sass.sync().on('error', sass.logError))
 	 	.pipe(minifycss())
 	 	.pipe(sourcemaps.write())
 	 	.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(config.styles.dest))
}

export default styles;
