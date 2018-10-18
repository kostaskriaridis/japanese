import React, { PureComponent, Fragment } from 'react';
import Song from '../song';
import songs from '../../constants/songs';

export default class Songs extends PureComponent {
    render() {
        return (
            <Fragment>
                {songs.map((song, songIndex) => (
                    <Fragment key={songIndex}>
                        <h1>{song.title}</h1>
                        <a target='_blank' href={song.youtube}>youtube</a>
                        <Song>
                            {song.body.map((paragraph, paragraphIndex) => (
                                <Song.Paragraph key={paragraphIndex}>
                                    {paragraph.map((line, lineIndex) => (
                                        <Song.Line key={lineIndex}>
                                            {line}
                                        </Song.Line>
                                    ))}
                                </Song.Paragraph>
                            ))}
                        </Song>
                    </Fragment>
                ))}
            </Fragment>
        );
    }
}
