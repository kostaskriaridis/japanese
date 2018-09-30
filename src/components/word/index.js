import React, { PureComponent, Fragment } from 'react'
import WordJapanese from '../word-japanese';
import './word.css';

export default class Word extends PureComponent {
    render() {
        const { translation } = this.props;

        return (
            <div className='word'>
                {this.renderJapaneseWord()}
                {' — '}
                <span className='word__translation'>
                    {translation}
                </span>
            </div>
        );
    }

    renderJapaneseWord() {
        const { japanese } = this.props;

        if (Array.isArray(japanese)) {
            return (
                <Fragment>
                    {japanese.map((word, index) => (
                        <WordJapanese
                            key={index}
                            text={word} />
                    ))}
                </Fragment>
            );
        }

        return (
            <WordJapanese text={japanese} />
        );
    }
}
