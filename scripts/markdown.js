require('babel-register')({
    presets: [ 'env' ]
});

const fs = require('fs');
const themes = require('../src/constants/themes').default;
const sentences = require('../src/constants/sentences').default;
const songs = require('../src/constants/songs').default;
const { renderReadme } = require('./readme');
const { renderSongs } = require('./songs');

renderReadme(themes, sentences);
renderSongs(songs);
