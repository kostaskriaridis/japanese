import React, { PureComponent, Fragment } from 'react'
import './word.css';

const GOOGGLE_TRANSLATE_ENDPOINT = 'https://translate.google.com/?hl=ru#ja/ru';

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
                    {japanese.map(word => (
                        <span className='word__japanese' onClick={this.handleClickJapanese}>
                            {word}
                        </span>
                    ))}
                </Fragment>
            );
        }

        return (
            <span className='word__japanese' onClick={this.handleClickJapanese}>
                {japanese}
            </span>
        );
    }

    handleClickJapanese = () => {
        window.open(`${GOOGGLE_TRANSLATE_ENDPOINT}/${this.props.japanese}`)
    };
}
