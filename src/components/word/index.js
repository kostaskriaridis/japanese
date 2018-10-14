import React, { PureComponent } from 'react'
import WordJapanese from '../word-japanese';
import Tag from '../tag';
import './word.css';

export default class Word extends PureComponent {
    render() {
        const { japanese, translation } = this.props;

        return (
            <div className='word'>
                <WordJapanese text={japanese} />
                {' — '}
                <span className='word__translation'>
                    {translation}
                </span>
                {this.renderTag()}
            </div>
        );
    }

    renderTag() {
        switch (this.props.type) {
            case 'verb': {
                return (
                    <Tag className='word__type'>verb</Tag>
                );
            }

            default: {
                return null;
            }
        }
    }
}
