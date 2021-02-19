const {promisify} = require('util');
const fs = require('fs');
const path = require('path');
const test = require('ava');
const imageminAvif = require('.');

const readFile = promisify(fs.readFile);

test('Buffer', async t => {
  const buf = await readFile(path.join(__dirname, 'fixture.jpg'));
  const data = await imageminAvif({quality: 30})(buf);
  t.true(data.length < buf.length);
});
