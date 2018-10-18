import React, { PureComponent } from 'react';
import Button from '../button';
import './nav.css';

const nav = [
    { title: 'Words', link: '/' },
    { title: 'Songs', link: '/songs' }
];

export default class Nav extends PureComponent {
    render() {
        return (
            <div className='nav'>
                {nav.map(({ title, link }) => (
                    <Button
                        key={title}
                        active={this.props.location.pathname === link}
                        onClick={() => this.props.history.push(link)}>
                        {title}
                    </Button>
                ))}
            </div>
        );
    }
}
