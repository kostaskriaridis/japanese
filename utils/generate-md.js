require('babel-register')({
    presets: [ 'env' ]
});

const fs = require('fs');

class MD {
    constructor() {
        this.themes = require('../src/constants/themes').default;
        this.counter = 0;

        fs.writeFileSync('README.md', this.renderMd(), 'utf-8');
    }

    renderMd() {
        const themes = this.renderThemes();

        return [
            `# Table of japanese words to learn: ${this.counter}`,
            themes
        ].join('\n');
    }

    renderThemes() {
        return this.themes
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
