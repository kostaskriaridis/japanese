import React, { PureComponent } from 'react';
import Word from '../word';
import './lesson.css';

export default class Lesson extends PureComponent {
    render() {
        const { title } = this.props;
        const words = this.getWords();

        if (!words.length) {
            return null;
        }

        return (
            <div className='lesson'>
                <h1 className='lesson__title'>
                    {Array.isArray(title) ? title.join(' / ') : title}
                </h1>
                <div className='lesson__words'>
                    {this.getWords().map((word, index) => (
                        <Word
                            key={index}
                            japanese={word.japanese}
                            translation={word.translation} />
                    ))}
                </div>
            </div>
        );
    }

    getWords() {
        const { words, value } = this.props;

        if (!value) {
            return this.props.words;
        }

        return words.filter(({ transcription }) => {
            if (!transcription) {
                return false;
            }

            if (Array.isArray(transcription)) {
                return transcription.some(item => item.startsWith(value))
            }

            return transcription.startsWith(value);
        });
    }
}
