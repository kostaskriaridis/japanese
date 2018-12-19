require('babel-register')({
    presets: [ 'env' ]
});

const fs = require('fs');

class MD {
    constructor() {
        this.counter = 0;

        this.renderReadme();
        this.renderSongs();
    }

    renderSongs() {
        const songs = require('../src/constants/songs').default;
        const songsPath = './songs';

        if (!fs.existsSync(songsPath)) {
            fs.mkdirSync(songsPath);
        }

        songs.forEach(song => {
            const fileName = song.title.toLowerCase().split(' ').join('-');

            fs.writeFileSync(`${songsPath}/${fileName}.md`, this.renderSong(song), 'utf-8');
        });
    }

    renderSong(song) {
        const { title, body, youtube } = song;

        return [
            `#### [${title}](${youtube})`,
            this.renderSongText(body)
        ].join('\\');
    }

    renderSongText(body) {
        return body
            .map(paragraph =>
                paragraph.join('\\')
            )
            .join('\\\\');
    }

    renderReadme() {
        const themes = this.renderThemes();
        const content = [
            `# Table of japanese words to learn: ${this.counter}`,
            themes
        ].join('\n');

        fs.writeFileSync('README.md', content, 'utf-8');
    }

    renderThemes() {
        const themes = require('../src/constants/themes').default;

        return themes
            .map(this.renderTheme, this)
            .join('\n');
    }

    renderTheme(theme) {
        return [
            `#### ${theme.title}`,
            '| Japanese | Translation |',
            '| ------ | ------ |',
            ...this.renderWords(theme.words)
        ].join('\n');
    }

    renderWords(words) {
        this.counter += words.length;

        return words.map(this.renderWord, this);
    }

    renderWord(word) {
        return `| \`${word.japanese}\` | ${word.translation} |`;
    }
}

new MD();
