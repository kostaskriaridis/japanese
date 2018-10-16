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

        const lastWordIndex = words.length - 1;

        return (
            <div className='lesson'>
                <Button
                    className='lesson__practice-button'
                    size='s'
                    onClick={this.handleClickPracticeButton}>
                    <Icon type='practice' />
                </Button>
                <h1 className='lesson__title'>
                    {title}
                </h1>
                <div className='lesson__words'>
                    {words.map((word, index) => (
                        <Word
                            key={index}
                            isLast={index === lastWordIndex}
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

        return words.filter(({ japanese, translation }) => {
            const lowerCasedValue = value.toLowerCase();

            return (
                japanese.toLowerCase().startsWith(lowerCasedValue) ||
                translation.toLowerCase().startsWith(lowerCasedValue)
            );
        });
    }
}
