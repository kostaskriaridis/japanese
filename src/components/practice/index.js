import React, { PureComponent } from 'react';
import Popup from '../popup';
import Button from '../button';
import WordJapanese from '../word-japanese';
import './practice.css';

export default class Practice extends PureComponent {
    constructor(props) {
        super(props);

        this.words = this.getShuffledWords();

        this.state = {
            index: 0,
            isTranslationDisplayed: false
        };
    }

    render() {
        const word = this.words[this.state.index];

        return (
            <Popup onClose={this.props.onClose}>
                <div
                    className='practice-word'>
                    <WordJapanese
                        size='xxxl'
                        text={word.japanese}
                        onClick={this.handleNextWord} />
                </div>
                <div className='practice-controls'>
                    <Button onClick={this.handleToggleTranslation}>
                        Translate
                    </Button>
                </div>
                <div className='practice-translation'>
                    {this.renderTranslation(word)}
                </div>
            </Popup>
        );
    }

    renderTranslation(word) {
        if (!this.state.isTranslationDisplayed) {
            return null;
        }

        return (
            <div>{word.translation}</div>
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

    handleToggleTranslation = () => {
        this.setState({
            isTranslationDisplayed: !this.state.isTranslationDisplayed
        });
    };

    getShuffledWords() {
        const words = this.getAllWords();

        for (let i = words.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));

            [words[i], words[j]] = [words[j], words[i]];
        }

        return words;
    }

    getAllWords() {
        return this.props.lessons.reduce((result, { words }) => {
            return result.concat(words);
        }, []);
    }
}
