import React, { PureComponent, Fragment } from 'react';
import Lesson from '../lesson';
import Practice from '../practice';
import Button from '../button';
import themes from '../../constants/themes';
import './words.css';

export default class Words extends PureComponent {
    state = {
        lessonIndex: null,
        isPracticeInversed: false
    };

    render() {
        return (
            <Fragment>
                <div className='controls'>
                    <Button
                        active={this.state.isPracticeInversed}
                        onClick={this.handleTogglePractice}>
                        Practice Inversed
                    </Button>
                </div>
                <div className='lessons'>
                    {themes.map((lesson, index) =>(
                        <Lesson
                            key={index}
                            index={index}
                            title={lesson.title}
                            words={lesson.words}
                            onClickPractice={this.handleClickPractice.bind(index)} />
                    ))}
                </div>
                {this.renderPracticePopup()}
            </Fragment>
        );
    }

    renderPracticePopup() {
        const { lessonIndex, isPracticeInversed } = this.state;

        if (lessonIndex === null) {
            return null;
        }

        const lessons = themes[lessonIndex].words;

        return (
            <Practice
                words={lessons}
                onClose={this.handleClosePracticePopup}
                inverse={isPracticeInversed} />
        );
    }

    handleClosePracticePopup = () => {
        this.setState({
            lessonIndex: null
        });
    };

    handleTogglePractice = () => {
        this.setState({
            isPracticeInversed: !this.state.isPracticeInversed
        });
    };

    handleClickPractice = index => {
        this.setState({
            lessonIndex: index
        });
    };
}
