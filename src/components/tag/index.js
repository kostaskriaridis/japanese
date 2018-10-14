import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './tag.css';

export default class Tag extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string.isRequired
    };

    render() {
        const { className, children } = this.props;
        const tagClass = classNames('tag', {
            [className]: className
        });

        return (
            <div className={tagClass}>
                {children}
            </div>
        );
    }
}
