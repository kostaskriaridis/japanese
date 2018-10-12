import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GOOGGLE_TRANSLATE_ENDPOINT } from '../../constants';
import './word-japanese.css';

export default class WordJapanese extends PureComponent {
    static propTypes = {
        text: PropTypes.string.isRequired,
        className: PropTypes.string,
        size: PropTypes.oneOf(['m', 'xxxl'])
    };

    static defaultProps = {
        size: 'm'
    };

    render() {
        const { text, size, className } = this.props;
        const wordClass = classNames('word-japanese', `word-japanese_${size}`, {
            [className]: className
        });

        return (
            <button
                className={wordClass}
                onClick={this.handleClick}>
                {text}
            </button>
        );
    }

    handleClick = () => {
        const { text, onClick } = this.props;

        if (typeof onClick === 'function') {
            onClick();
        } else {
            window.location.assign(`${GOOGGLE_TRANSLATE_ENDPOINT}/${text}`);
        }
    };
}
