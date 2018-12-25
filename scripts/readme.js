const fs = require('fs');
let counter = 0;

/**
 * Rendering README.md
 * @param {Array} themes
 */
export function renderReadme(themes) {
    themes = renderThemes(themes);
    const content = [
        `# Table of japanese words to learn: ${counter}`,
        themes
    ].join('\n');

    fs.writeFileSync('README.md', content, 'utf-8');
}

/**
 * Rendering themes
 * @param {Array} themes
 * @returns {string} themes markdown string
 */
function renderThemes(themes) {
    return themes
        .map(renderTheme)
        .join('\n');
}

/**
 * Rendering theme
 * @param {Object} theme
 * @returns {string} theme markdown string
 */
function renderTheme(theme) {
    const { title, words } = theme;

    counter += words.length;

    return [
        `#### ${title} (${words.length})`,
        '| Japanese | Translation |',
        '| ------ | ------ |',
        ...renderWords(words)
    ].join('\n');
}

/**
 * Rendering words
 * @param {Array} words
 * @returns {string} words markdown string
 */
function renderWords(words) {
    return words.map(word => {
        return `| \`${word.japanese}\` | ${word.translation} |`;
    });
}
