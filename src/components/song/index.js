import React, { PureComponent } from 'react';
import './song.css';
import Paragraph from './paragraph';
import Line from './line';

export default class Song extends PureComponent {
    static Paragraph = Paragraph;
    static Line = Line;

    render() {
        return (
            <div className='song'>
                {this.props.children}
            </div>
        );
    }
}
