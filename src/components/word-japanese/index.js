import React, { PureComponent } from 'react'
import classNames from 'classnames';
import { GOOGGLE_TRANSLATE_ENDPOINT } from '../../constants';
import './word-japanese.css';

export default class WordJapanese extends PureComponent {
    render() {
        const { text, className } = this.props;
        const wordClass = classNames('word-japanese', {
            [className]: className
        });

        return (
            <span className={wordClass} onClick={this.handleClickJapanese}>
                {text}
            </span>
        );
    }

    handleClickJapanese = () => {
        window.open(`${GOOGGLE_TRANSLATE_ENDPOINT}/${this.props.text}`)
    };
}
