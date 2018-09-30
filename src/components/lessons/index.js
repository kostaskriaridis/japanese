import React, { Fragment, PureComponent } from 'react';
import Lesson from '../lesson';
import lessons from '../../constants/lessons';
import './lessons.css';

export default class Lessons extends PureComponent {
    state = {
        value: ''
    };

    render() {
        const { value } = this.state;

        return (
            <Fragment>
                <input
                    value={value}
                    type='text'
                    onChange={this.handleChangeInput} />
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
                        Местоимения с こ указывают на то, что принадлежит говорящему или находится рядом с ним. Местоимения с そ указывают на то, что принадлежит собеседнику пли находится рядом с ним.
                    </div>
                    <div>
                        Местоимения с あ указывают на то, что удалено от собеседников, но видно им.
                    </div>
                    <div>
                        Предмет, одинаково удалённый, собеседники называют あれ.
                    </div>
                    <div>
                        Предмет, находящийся между собеседниками, или крупный предмет, возле которого находятся собеседники, обозначается これ.
                    </div>
                    <div>
                        При обозначении места, где находятся говорящие (улица, пощать, здание и т.п.), употребляют ここ. Удалённое от говорящий место называют あそこ.
                    </div>
                </div>
            </Fragment>
        );
    }

    handleChangeInput = event => {
        this.setState({
            value: event.target.value
        });
    };
}
