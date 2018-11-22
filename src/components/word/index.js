import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WordJapanese from '../word-japanese';
import './word.css';

export default class Word extends PureComponent {
    static propTypes = {
        japanese: PropTypes.string.isRequired,
        translation: PropTypes.string.isRequired,
        isLast: PropTypes.bool.isRequired
    };

    render() {
        const { japanese, translation, isLast } = this.props;
        const wordClass = classNames('word', {
            word_last: isLast
        });

        return (
            <div className={wordClass}>
                <WordJapanese text={japanese} />
                <span className='word__translation'>
                    {' — '}
                    {translation}
                </span>
            </div>
        );
    }
}
