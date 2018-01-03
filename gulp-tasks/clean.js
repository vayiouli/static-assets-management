//clean distribution folder
import gulp from "gulp";
import clean from "gulp-clean";
import config from "../config";

export const cleanDist = () => {
	return gulp
		.src(config.dir.dist)
		.pipe(clean())
};

export default cleanDist;
