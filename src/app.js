import React, { PureComponent } from 'react';
import Lessons from './components/lessons';
import Practice from './components/practice';
import Button from './components/button';
import Icon from './components/icon';
import themes from './constants/themes';
import time from './constants/time';
import './app.css';

const TIME_LESSONS_PAGE = 'TIME_LESSONS_PAGE';
const THEMES_LESSONS_PAGE = 'THEMES_LESSONS_PAGE';
const pages = [
    { type: THEMES_LESSONS_PAGE, text: 'Themes' },
    { type: TIME_LESSONS_PAGE, text: 'Time' }
];

export default class App extends PureComponent {
    state = {
        lessonsType: THEMES_LESSONS_PAGE,
        lessonIndex: null,
        isPracticePopupShown: false,
        isPracticeInversed: false
    };

    render() {
        const lessons = this.getLessons();
        const { lessonsType, isPracticeInversed } = this.state;

        return (
            <div className='app'>
                <div className='nav'>
                    {pages.map(page => (
                        <Button
                            key={page.type}
                            active={lessonsType === page.type}
                            onClick={() => this.handleChangeLessonsType(page.type)}>
                            {page.text}
                        </Button>
                    ))}
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
                    lessons={lessons}
                    onClickPractice={this.handleClickPractice} />
                {this.renderPracticePopup(lessons)}
            </div>
        );
    }

    renderPracticePopup(lessons) {
        const { lessonIndex, isPracticePopupShown, isPracticeInversed } = this.state;

        if (!isPracticePopupShown) {
            return null;
        }

        if (lessonIndex !== null) {
            lessons = [lessons[lessonIndex]];
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

    getLessons() {
        switch (this.state.lessonsType) {
            case TIME_LESSONS_PAGE: {
                return time;
            }

            case THEMES_LESSONS_PAGE: {
                return themes;
            }

            default: {
                return [];
            }
        }
    }

    getWords(lessons) {
        return lessons.reduce((result, { words }) => {
            return result.concat(words);
        }, []);
    }
}
