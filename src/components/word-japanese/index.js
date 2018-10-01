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
            <a
                href={`${GOOGGLE_TRANSLATE_ENDPOINT}/${text}`}
                target='_blank'
                rel='noreferrer noopener'
                className={wordClass}>
                {text}
            </a>
        );
    }
}
