import React, { PureComponent } from 'react'
import './word.css';

const GOOGGLE_TRANSLATE_ENDPOINT = 'https://translate.google.com/?hl=ru#ja/ru';

export default class Word extends PureComponent {
    render() {
        const { japanese, translation } = this.props;

        return (
            <div className='word'>
                <span className='word__japanese' onClick={this.handleClickJapanese}>
                    {japanese}
                </span>
                {' '}
                <span className='word__translation'>
                    {translation}
                </span>
            </div>
        );
    }

    handleClickJapanese = () => {
        window.open(`${GOOGGLE_TRANSLATE_ENDPOINT}/${this.props.japanese}`)
    };
}
