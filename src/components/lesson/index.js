import React, { PureComponent } from 'react';
import Word from '../word';
import Button from '../button';
import Icon from '../icon';
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
                <Button
                    className='lesson__practice-button'
                    onClick={this.handleClickPracticeButton}>
                    <Icon type='practice' />
                </Button>
                <h1 className='lesson__title'>
                    {Array.isArray(title) ? title.join(' / ') : title}
                </h1>
                <div className='lesson__words'>
                    {this.getWords().map((word, index) => (
                        <Word
                            key={index}
                            {...word} />
                    ))}
                </div>
            </div>
        );
    }

    handleClickPracticeButton = () => {
        this.props.onClickPractice(this.props.index);
    };

    getWords() {
        const { words, value } = this.props;

        if (!value) {
            return this.props.words;
        }

        return words.filter(({ translation }) => {
            return translation
                .toLowerCase()
                .startsWith(value.toLowerCase());
        });
    }
}
