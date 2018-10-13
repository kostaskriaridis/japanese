import React, { PureComponent } from 'react';
import Popup from '../popup';
import WordJapanese from '../word-japanese';
import './practice.css';

export default class Practice extends PureComponent {
    constructor(props) {
        super(props);

        this.words = this.getShuffledWords();

        this.state = {
            index: 0
        };
    }

    render() {
        const word = this.words[this.state.index];

        return (
            <Popup onClose={this.props.onClose}>
                <div className='practice-word'>
                    <WordJapanese
                        size='xxxl'
                        text={word.japanese}
                        onClick={this.handleNextWord} />
                </div>
                <div className='practice-translation'>
                    {word.translation}
                </div>
                <div className='practice-percentage'>
                    {this.getPassedWordsPercentage()}%
                </div>
            </Popup>
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

    getPassedWordsPercentage() {
        return Math.round(this.state.index / this.words.length * 100 * 100) / 100;
    }

    getShuffledWords() {
        const words = this.props.lessons.reduce((result, { words }) => {
            return result.concat(words);
        }, []);

        for (let i = words.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));

            [words[i], words[j]] = [words[j], words[i]];
        }

        return words;
    }
}
