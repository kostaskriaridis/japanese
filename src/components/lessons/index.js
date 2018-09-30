import React, { Fragment, PureComponent } from 'react';
import Lesson from '../lesson';
import lessons from '../../constants/lessons';
import './lessons.css';

export default class Lessons extends PureComponent {
    state = {
        value: ''
    };

    render() {
        const { value } = this.state;

        return (
            <Fragment>
                <input
                    value={value}
                    type='text'
                    onChange={this.handleChangeInput} />
                <div className='lessons'>
                    {lessons.map((lesson, index) =>(
                        <Lesson
                            key={index}
                            value={value}
                            title={lesson.title}
                            words={lesson.words} />
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
