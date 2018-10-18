import React, { PureComponent, Fragment } from 'react';
import Lessons from '../lessons';
import Practice from '../practice';
import Button from '../button';
import Icon from '../icon';
import themes from '../../constants/themes';
import './words.css';

export default class Words extends PureComponent {
    state = {
        lessonIndex: null,
        isPracticePopupShown: false,
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
                    <Button onClick={this.handleShowPracticePopup}>
                        <Icon type='practice' />
                    </Button>
                </div>
                <Lessons
                    lessons={themes}
                    onClickPractice={this.handleClickPractice} />
                {this.renderPracticePopup()}
            </Fragment>
        );
    }

    renderPracticePopup() {
        const { lessonIndex, isPracticePopupShown, isPracticeInversed } = this.state;
        let lessons = themes;

        if (!isPracticePopupShown) {
            return null;
        }

        if (lessonIndex !== null) {
            lessons = [themes[lessonIndex]];
        }

        return (
            <Practice
                words={this.getWords(lessons)}
                onClose={this.handleClosePracticePopup}
                inverse={isPracticeInversed} />
        );
    }

    handleShowPracticePopup = () => {
        this.setState({
            isPracticePopupShown: true
        });
    };

    handleClosePracticePopup = () => {
        this.setState({
            isPracticePopupShown: false,
            lessonIndex: null
        });
    };

    handleTogglePractice = () => {
        this.setState({
            isPracticeInversed: !this.state.isPracticeInversed
        });
    };

    handleChangeLessonsType = lessonsType => {
        this.setState({ lessonsType });
    };

    handleClickPractice = index => {
        this.setState({
            isPracticePopupShown: true,
            lessonIndex: index
        });
    };

    getWords(lessons) {
        return lessons.reduce((result, { words }) => {
            return result.concat(words);
        }, []);
    }
}
