//clean distribution folder
import gulp from "gulp";
import config from "../config";

const imgs = () => {
	return gulp
		.src(config.images.src)
		.pipe(gulp.dest(config.images.dest))
};

export default imgs;
