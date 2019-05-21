import React, { memo } from 'react'
import PropTypes from 'prop-types';
import WordJapanese from '../word-japanese';
import './word.css';

Word.propTypes = {
    hiragana: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    kanji: PropTypes.string
};

function Word({ hiragana, translation, kanji }) {
    return (
        <div className='word'>
            <WordJapanese text={kanji || hiragana} />
            <span className='word__translation'>
                {' — '}
                {translation} `{hiragana}`
            </span>
        </div>
    );
}

export default memo(Word);
