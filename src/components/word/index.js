import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import WordJapanese from '../word-japanese';
import './word.css';

export default class Word extends PureComponent {
    static propTypes = {
        japanese: PropTypes.string.isRequired,
        translation: PropTypes.string.isRequired
    };

    render() {
        const { japanese, translation } = this.props;

        return (
            <div className='word'>
                <WordJapanese text={japanese} />
                <span className='word__translation'>
                    {' — '}
                    {translation}
                </span>
            </div>
        );
    }
}
