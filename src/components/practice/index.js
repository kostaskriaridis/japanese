import React, { PureComponent } from 'react';
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

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = '';
    }

    render() {
        const { index } = this.state;
        const word = this.words[this.state.index];

        return (
            <div className='practice'>
                <button
                    className='practice-close'
                    onClick={this.props.onClose} />
                <div className='practice-inner'>
                    <div className='practice-word'>
                        <WordJapanese
                            size='xxxl'
                            text={word.japanese}
                            onClick={this.handleToggleTranslation} />
                    </div>
                    <div className='practice-translation'>
                        {this.renderTranslation(word)}
                    </div>
                    <div className='practice-controls'>
                        <Button
                            className='practice-control'
                            disabled={index === 0}
                            onClick={this.handlePrevWord}>
                            Previous
                        </Button>
                        <Button
                            className='practice-control'
                            disabled={index === this.words.length - 1}
                            onClick={this.handleNextWord}>
                            Next
                        </Button>
                    </div>
                </div>
            </div>
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
        this.setState({
            index: this.state.index + 1,
            isTranslationDisplayed: false
        });
    };

    handlePrevWord = () => {
        this.setState({
            index: this.state.index - 1,
            isTranslationDisplayed: false
        });
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
