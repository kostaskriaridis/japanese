import React, { PureComponent } from 'react';
import Lessons from './components/lessons';
import Practice from './components/practice';
import Button from './components/button';
import Icon from './components/icon';
import themes from './constants/themes';
import './app.css';

export default class App extends PureComponent {
    state = {
        lessonIndex: null,
        isPracticePopupShown: false,
        isPracticeInversed: false
    };

    render() {
        const { isPracticeInversed } = this.state;

        return (
            <div className='app'>
                <div className='nav'>
                    <Button
                        active={isPracticeInversed}
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
            </div>
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
