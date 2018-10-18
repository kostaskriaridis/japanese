import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popup from '../popup';
import WordJapanese from '../word-japanese';
import './practice.css';

const SPACE_KEY_CODE = 32;
const ENTER_KEY_CODE = 13;
const LEFT_KEY_CODE = 37;
const RIGHT_KEY_CODE = 39;

export default class Practice extends PureComponent {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
        words: PropTypes.arrayOf(PropTypes.shape({
            japanese: PropTypes.string.isRequired,
            translation: PropTypes.string.isRequired
        })),
        inverse: PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.words = this.getShuffledWords();

        this.state = {
            index: 0,
            isAnswerDisplayed: false
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        const { inverse, onClose } = this.props;
        const { japanese, translation } = this.words[this.state.index];

        return (
            <Popup onClose={onClose}>
                <div className='practice-word'>
                    <WordJapanese
                        size='xxxl'
                        text={inverse ? translation : japanese}
                        onClick={this.handleNextWord} />
                </div>
                {this.renderAnswer(inverse ? japanese : translation)}
                <div className='practice-percentage'>
                    {this.getPassedWordsPercentage()}%
                </div>
            </Popup>
        );
    }

    renderAnswer(answer) {
        const answerClass = classNames('practice-answer', {
            'practice-answer_hidden': !this.state.isAnswerDisplayed
        });

        return (
            <div className={answerClass}>
                {answer}
            </div>
        );
    }

    handleNextWord = () => {
        const { index } = this.state;
        const nextState = {};

        if (index === this.words.length - 1) {
            nextState.index = 0;
        } else {
            nextState.index = index + 1;
        }

        this.setState(nextState);
    };

    handlePrevWord = () => {
        const { index } = this.state;
        const nextState = {};

        if (index === 0) {
            nextState.index = this.words.length - 1;
        } else {
            nextState.index = index - 1;
        }

        this.setState(nextState);
    };

    handleToggleAnswer = () => {
        this.setState({
            isAnswerDisplayed: !this.state.isAnswerDisplayed
        });
    };

    handleKeyDown = event => {
        switch (event.keyCode) {
            case SPACE_KEY_CODE: {
                this.handleToggleAnswer();
                break;
            }

            case LEFT_KEY_CODE: {
                this.handlePrevWord();
                break;
            }

            case RIGHT_KEY_CODE:
            case ENTER_KEY_CODE: {
                this.handleNextWord();
                break;
            }

            default: {
                // no options
            }
        }
    };

    getPassedWordsPercentage() {
        return Math.round(this.state.index / this.words.length * 100 * 100) / 100;
    }

    getShuffledWords() {
        const { words } = this.props;

        for (let i = words.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));

            [words[i], words[j]] = [words[j], words[i]];
        }

        return words;
    }
}
