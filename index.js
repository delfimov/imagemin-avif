'use strict';
const sharp = require('sharp');
const PluginError = require('plugin-error');

const defaultOptions = {
  quality: 90,
  lossless: false,
  speed: 5,
  chromaSubsampling: '4:2:0'
}

module.exports = options => async buffer => {
  return await sharp(buffer)
    .avif(Object.assign(defaultOptions, options))
    .toBuffer()
    .catch((err) => {
      callback(new PluginError('imagemin-avif', err));
    });
};
