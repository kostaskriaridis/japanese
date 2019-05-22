const fs = require('fs');
const KANJI_REGEXP = /[\u4e00-\u9faf]/;


/**
 * Rendering `README.md`
 * @param {Array} themes
 * @param {Array} sentences
 */
function renderReadme(themes, sentences) {
    const wordsCount = getWordsCount(themes);
    const content = [
        `# Table of japanese words to learn: ${wordsCount}`,
        renderThemes(themes),
        renderSentences(sentences)
    ].join('\n');

    console.log('######')
    console.log(`Words count is ${wordsCount}`);
    console.log(`Kanji coverage is ${getKanjiPercentage(themes, wordsCount)} %`);
    console.log('######')

    fs.writeFileSync('README.md', content, 'utf-8');
}

/**
 * Rendering sentences
 * @param {Array} sentences
 */
function renderSentences(sentences) {
    return sentences
        .map(sentence => {
            return [
                '___',
                `###### ${sentence.japanese}`,
                `${sentence.translation}`
            ].join('\n');
        })
        .join('\n');
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
        '| Japanese | Translation | Kanji |',
        '| ------ | ------ | ------ |',
        ...renderWords(words)
    ].join('\n');
}

/**
 * Rendering words
 * @param {Array} words
 * @returns {string} words markdown string
 */
function renderWords(words) {
    return words.map(({ hiragana, translation, kanji }) => {
        return `| \`${hiragana}\` | ${translation} | ${renderKanji(kanji)} |`;
    });
}

/**
 * Rendering kanji
 * @param {string} kanji
 * @returns {string} words markdown string
 */
function renderKanji(kanji) {
    if (!kanji) {
        return '—';
    }

    return kanji.split('').map(char => {
        // Если элемент в строке является кандзи, оборачиваем его в ссылку
        if (char.match(KANJI_REGEXP)) {
            const kanjiEncoded = encodeURIComponent(`${char} #kanji`);

            return `[${char}](https://jisho.org/search/${kanjiEncoded})`;
        }

        return char;
    }).join('');
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

/**
 * Get kanji coverage percent
 * @param {Array} themes
 * @param {number} wordsCount
 * @returns {string}
 */
function getKanjiPercentage(themes, wordsCount) {
    const kanjiCount = themes.reduce((kanjiSum, theme) => {
        theme.words.forEach(word => {
            if (word.kanji) {
                kanjiSum += 1;
            }
        });

        return kanjiSum;
    }, 0);

    return (kanjiCount * 100 / wordsCount).toFixed(2);
}

module.exports = {
    renderReadme
};
