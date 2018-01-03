//import dependencies
import gulp from 'gulp';
import clean from './gulp-tasks/clean';
import styles from './gulp-tasks/styles';
import scripts from './gulp-tasks/scripts';
import images from './gulp-tasks/images';
import fingerprint from './gulp-tasks/fingerprint';
import revision from './gulp-tasks/revision';
import sequence from 'gulp-sequence';

// clean distribution folder
gulp.task('clean', clean);

// compile scss & minify css
gulp.task('styles', styles);

// merge & minify scripts
gulp.task('scripts', scripts);

// copy images for revision
gulp.task('images', images);

// fingerprint assets
gulp.task('fingerprint', fingerprint);

//revision files
gulp.task('revision', revision);

//build bundle
gulp.task('default', sequence('clean', ['styles', 'scripts', 'images'], 'fingerprint', 'revision'));
