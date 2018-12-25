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
            const fileName = song.title.toLowerCase().replace(/[^a-z0-9]/gi, '-');

            fs.writeFileSync(`${songsPath}/${fileName}.md`, this.renderSong(song), 'utf-8');
        });
    }

    renderSong(song) {
        const { title, body, youtube } = song;

        return [
            `#### [${title}](${youtube})`,
            this.renderSongText(body)
        ].join('  \n');
    }

    renderSongText(body) {
        return body
            .map(paragraph =>
                paragraph.join('  \n')
            )
            .join('  \n\n');
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
        const { title, words } = theme;

        this.counter += words.length;

        return [
            `#### ${title} (${words.length})`,
            '| Japanese | Translation |',
            '| ------ | ------ |',
            ...this.renderWords(words)
        ].join('\n');
    }

    renderWords(words) {
        return words.map(word => {
            return `| \`${word.japanese}\` | ${word.translation} |`;
        });
    }
}

new MD();
