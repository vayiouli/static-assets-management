// directories
const dir = {
  src: './src',
  dist: './dist'
};
// styles config
const styles = {
  src: `${dir.src}/styles/*.{css,scss,sass}`,
  dest: `${dir.dist}/styles`,
  prefix: '.min'
};
// scripts config
const scripts = {
	filename: 'app.min.js',
	src: `${dir.src}/scripts/*.js`,
	dest: `${dir.dist}/scripts`
};
//images config
const images = {
	 src: `${dir.src}/images/*.{gif,png,svg}`,
	 dest: `${dir.dist}/images`
};
// fingerprint config
const fingerprint = [
	`${dir.dist}/**/*.css`,
	`${dir.dist}/**/*.js`,
	`${dir.dist}/**/*.{gif,png,svg}`
];
// revision config
const revision = [
		`${dir.dist}/rev-manifest.json`,
		`${dir.dist}/**/*.css`,
		`${dir.src}/*.html`
]

export default { dir, styles, scripts, images, fingerprint, revision };
