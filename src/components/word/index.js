import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import WordJapanese from '../word-japanese';
import './word.css';

export default class Word extends PureComponent {
    static propTypes = {
        hiragana: PropTypes.string.isRequired,
        translation: PropTypes.string.isRequired,
        kanji: PropTypes.string
    };

    render() {
        const { hiragana, translation, kanji } = this.props;

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
}
