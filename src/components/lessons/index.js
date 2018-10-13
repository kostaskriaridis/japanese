import React, { Fragment, PureComponent } from 'react';
import Lesson from '../lesson';
// import WordJapanese from '../word-japanese';
import './lessons.css';

export default class Lessons extends PureComponent {
    state = {
        value: ''
    };

    render() {
        const { value } = this.state;
        const { lessons, onClickPractice } = this.props;

        return (
            <Fragment>
                <input
                    className='input'
                    placeholder='Введите слово'
                    type='text'
                    value={value}
                    onChange={this.handleChangeInput} />
                <div className='lessons'>
                    {lessons.map((lesson, index) =>(
                        <Lesson
                            key={index}
                            index={index}
                            value={value}
                            title={lesson.title}
                            words={lesson.words}
                            onClickPractice={onClickPractice} />
                    ))}
                </div>
            </Fragment>
        );
    }

    handleChangeInput = event => {
        this.setState({
            value: event.target.value
        });
    };
}
