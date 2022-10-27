# imagemin-avif

> Avif [imagemin](https://github.com/imagemin/imagemin) plugin. Uses [sharp](https://github.com/lovell/sharp).

## Usage

```js
const imagemin = require('imagemin');
const imageminAvif = require('imagemin-avif');

(async () => {
  await imagemin(['images/*.{jpg,png}'], {
    destination: 'build/images',
    plugins: [
      imageminAvif({quality: 50})
    ]
  });
})();
```

### How to use with Gulp
```js
import gulp from "gulp";
import imagemin from "gulp-imagemin";
import avif from "imagemin-avif";
import gulpIf from "gulp-if";
import rename from "gulp-rename";

import config from "./gulpconfig";

// your code here

function buildImagesAvif(images, force) {
  const isForce = typeof force !== "undefined" ? force : false;
  return gulp
    .src(images, { base: config.path.src.img })
    .pipe(gulpIf(!isForce, changed(config.path.dst.img)))
    .pipe(imagemin([avif({ quality: 50 })]))
    .pipe(rename((path) => (path.extname += ".avif")))
    .pipe(gulp.dest(config.path.dst.img));
}

const imagesAvif = () => {
  return buildImagesAvif(`${config.path.src.img}**/*.*`);
};

export {
    imagesAvif,
    // your other tasks here
};

```


## API

### imageminAvif(options?)

#### options

Type: `object`

##### quality

Type: `number`<br>
Default: `90`

Set quality factor between `0` and `100`.

##### lossless

Type: `booleand`<br>
Default: `false`

Use lossless compression mode.

##### speed

Type: `number`<br>
Default: `5`

CPU effort vs file size, between `0` (slowest/smallest) and `8` (fastest/largest).

##### chromaSubsampling

Type: `number`<br>
Default: `4:2:0`

Set to `4:4:4` to prevent chroma subsampling (requires libvips v8.11.0) otherwise defaults to `4:2:0` chroma subsampling. 
