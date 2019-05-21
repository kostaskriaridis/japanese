import React, { memo } from 'react';
import Word from '../word';
import Button from '../button';
import Icon from '../icon';
import './lesson.css';

function Lesson({ words, title, index, onClickPractice }) {
    function handleClickPracticeButton() {
        onClickPractice(index);
    }

    return (
        <div className='lesson'>
            <Button
                className='lesson__practice-button'
                size='s'
                onClick={handleClickPracticeButton}>
                <Icon type='practice' />
            </Button>
            <h1 className='lesson__title'>
                {title} ({words.length})
            </h1>
            <div className='lesson__words'>
                {words.map((word, index) => (
                    <Word
                        key={index}
                        {...word} />
                ))}
            </div>
        </div>
    );
}

export default memo(Lesson);
