import React, { PureComponent } from 'react';
import './song-text.css';
import Paragraph from './paragraph';
import Line from './line';

export default class SongText extends PureComponent {
    static Paragraph = Paragraph;
    static Line = Line;

    render() {
        return (
            <div className='song-text'>
                {this.props.children}
            </div>
        );
    }
}
