// revision task dependencies
import gulp from 'gulp';
import revision from 'gulp-rev';
import delorigin from 'gulp-rev-delete-original';
import config from '../config';

// revision task
const fingerprint = () => {
	return gulp
		.src(config.fingerprint)
		.pipe(revision())
		.pipe(gulp.dest(config.dir.dist))
		.pipe(delorigin())
		.pipe(revision.manifest())
		.pipe(gulp.dest(config.dir.dist))
};

export default fingerprint;
