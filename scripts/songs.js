const fs = require('fs');

/**
 * Rendering songs in `.md` format
 * @param {Array} themes
 */
function renderSongs(songs) {
    const songsPath = './songs';

    if (fs.existsSync(songsPath)) {
        const files = fs.readdirSync(songsPath);

        files.forEach(fileName => {
            fs.unlinkSync(`${songsPath}/${fileName}`);
        });
    } else {
        fs.mkdirSync(songsPath);
    }

    songs.forEach(song => {
        fs.writeFileSync(`${songsPath}/${song.title}.md`, renderSong(song), 'utf-8');
    });
}

/**
 * Rendering song
 * @param {Object} song
 * @param {string} song.title
 * @param {Array} song.body
 * @param {string} song.youtube
 * @returns {string}
 */
function renderSong({ title, body, youtube }) {
    return [
        `#### [${title}](${youtube})`,
        renderSongText(body)
    ].join('  \n');
}

/**
 * Rendering song text
 * @param {Array} body
 * @returns {string}
 */
function renderSongText(body) {
    return body
        .map(paragraph => paragraph.join('  \n'))
        .join('  \n\n');
}

module.exports = {
    renderSongs
};
