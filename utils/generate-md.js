require('babel-register')({
    presets: [ 'env' ]
});

const fs = require('fs');

class MD {
    constructor() {
        this.themes = require('../src/constants/themes').default;
        this.counter = 0;

        this.renderReadme();
    }

    renderReadme() {
        const content = [
            `# Table of japanese words to learn: ${this.counter}`,
            this.renderThemes()
        ].join('\n');

        fs.writeFileSync('README.md', content, 'utf-8');
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
