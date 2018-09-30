import React, { PureComponent } from 'react';
import Lesson from '../lesson';
import WordJapanese from '../word-japanese';
import lessons from '../../constants/lessons';
import { GOOGGLE_TRANSLATE_ENDPOINT } from '../../constants';
import './lessons.css';

export default class Lessons extends PureComponent {
    state = {
        value: ''
    };

    render() {
        const { value } = this.state;

        return (
            <div className='root'>
                <input
                    className='input'
                    placeholder='Введите слово'
                    type='text'
                    value={value}
                    onChange={this.handleChangeInput} />
                <button
                    className='button'
                    disabled={!value}
                    onClick={this.handleClickButton}>
                    Найти в Google
                </button>
                <div className='lessons'>
                    {lessons.map((lesson, index) =>(
                        <Lesson
                            key={index}
                            value={value}
                            title={lesson.title}
                            words={lesson.words} />
                    ))}
                </div>
                <div>
                    <div>
                        Местоимения с <WordJapanese text='こ' /> указывают на то, что принадлежит говорящему или находится рядом с ним. Местоимения с <WordJapanese text='そ' /> указывают на то, что принадлежит собеседнику пли находится рядом с ним.
                    </div>
                    <div>
                        Местоимения с <WordJapanese text='あ' /> указывают на то, что удалено от собеседников, но видно им.
                    </div>
                    <div>
                        Предмет, одинаково удалённый, собеседники называют <WordJapanese text='あれ' />.
                    </div>
                    <div>
                        Предмет, находящийся между собеседниками, или крупный предмет, возле которого находятся собеседники, обозначается <WordJapanese text='これ' />.
                    </div>
                    <div>
                        При обозначении места, где находятся говорящие (улица, пощать, здание и т.п.), употребляют <WordJapanese text='ここ' />. Удалённое от говорящий место называют <WordJapanese text='あそこ' />.
                    </div>
                </div>
            </div>
        );
    }

    handleClickButton = () => {
        window.open(`${GOOGGLE_TRANSLATE_ENDPOINT}/${this.state.value}`);
    };

    handleChangeInput = event => {
        this.setState({
            value: event.target.value
        });
    };
}
