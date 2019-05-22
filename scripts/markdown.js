const fs = require('fs');
const themes = require('../src/constants/themes');
const sentences = require('../src/constants/sentences');
const songs = require('../src/constants/songs');
const { renderReadme } = require('./readme');
const { renderSongs } = require('./songs');

renderReadme(themes, sentences);
renderSongs(songs);
