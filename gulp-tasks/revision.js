// revision task dependencies
import gulp from 'gulp';
import revcollector from 'gulp-rev-collector';
import config from '../config';

// revision task
const revision = () => {
	return gulp
		.src(config.revision)
		.pipe(revcollector())
		.pipe(gulp.dest(config.dir.dist))
};

export default revision;
