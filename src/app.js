import React, { PureComponent } from 'react';
import Lessons from './components/lessons';
import Practice from './components/practice';
import Button from './components/button';
import sgurtovaLessons from './constants/sgurtova';
import japanesepodLessons from './constants/japanesepod';
import time from './constants/time';
import './app.css';

const JAPANESE_POD_LESSONS_PAGE = 'JAPANESE_POD_LESSONS_PAGE';
const TIME_LESSONS_PAGE = 'TIME_LESSONS_PAGE';
const SGURTOVA_LESSONS_PAGE = 'SGURTOVA_LESSONS_PAGE';
const pages = [
    { type: JAPANESE_POD_LESSONS_PAGE, text: 'JapanesePod101' },
    { type: TIME_LESSONS_PAGE, text: 'Time' },
    { type: SGURTOVA_LESSONS_PAGE, text: 'Sgurtova' }
];

export default class App extends PureComponent {
    state = {
        lessonsType: JAPANESE_POD_LESSONS_PAGE,
        isPracticePopupShown: false
    };

    render() {
        const lessons = this.getLessons();

        return (
            <div className='app'>
                <div className='nav'>
                    {pages.map(page => (
                        <Button
                            key={page.type}
                            active={this.state.lessonsType === page.type}
                            onClick={() => this.handleChangeLessonsType(page.type)}>
                            {page.text}
                        </Button>
                    ))}
                    <Button onClick={this.handleTogglePracticePopup}>
                        Practice
                    </Button>
                </div>
                <Lessons lessons={lessons} />
                {this.renderPracticePopup(lessons)}
            </div>
        );
    }

    renderPracticePopup(lessons) {
        if (!this.state.isPracticePopupShown) {
            return null;
        }

        return (
            <Practice
                lessons={lessons}
                onClose={this.handleTogglePracticePopup} />
        );
    }

    handleTogglePracticePopup = () => {
        this.setState({
            isPracticePopupShown: !this.state.isPracticePopupShown
        });
    };

    handleChangeLessonsType = lessonsType => {
        this.setState({ lessonsType });
    };

    getLessons() {
        switch (this.state.lessonsType) {
            case JAPANESE_POD_LESSONS_PAGE: {
                return japanesepodLessons;
            }

            case SGURTOVA_LESSONS_PAGE: {
                return sgurtovaLessons;
            }

            case TIME_LESSONS_PAGE: {
                return time;
            }

            default: {
                return [];
            }
        }
    }
}
