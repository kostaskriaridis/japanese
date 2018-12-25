const fs = require('fs');

/**
 * Rendering `README.md`
 * @param {Array} themes
 */
export function renderReadme(themes) {
    const content = [
        `# Table of japanese words to learn: ${getWordsCount(themes)}`,
        renderThemes(themes)
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
 * @param {string} theme.title
 * @param {Array} theme.words
 * @returns {string} theme markdown string
 */
function renderTheme({ title, words }) {
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
    return words.map(({ japanese, translation }) => {
        return `| \`${japanese}\` | ${translation} |`;
    });
}

/**
 * Get words total count
 * @param {Array} themes
 * @returns {number}
 */
function getWordsCount(themes) {
    return themes.reduce((sum, theme) => {
        sum += theme.words.length;
        return sum;
    }, 0);
}
