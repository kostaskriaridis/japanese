import React, { PureComponent } from 'react';
import Word from '../word';
import Button from '../button';
import Icon from '../icon';
import './lesson.css';

export default class Lesson extends PureComponent {
    render() {
        const { words, title } = this.props;
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
}
