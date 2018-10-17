require('babel-register')({
    presets: [ 'env' ]
});

const fs = require('fs');
const themes = require('../src/constants/themes').default;
const md = themes
    .map(theme => {
        return [
            `#### ${theme.title}`,
            `| Japanese | Translation |`,
            '| ------ | ------ |',
            ...theme.words.map(word => {
                return `| \`${word.japanese}\` | ${word.translation} |`;
            })
        ].join('\n');
    })
    .join('\n')

fs.writeFile('WORDS.md', md, 'utf-8', err => {
    if (err) {
        throw err;
    }
}); 
