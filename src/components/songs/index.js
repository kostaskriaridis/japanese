import React, { PureComponent, Fragment } from 'react';
import SongText from '../song-text';
import Link from '../link';
import songs from '../../constants/songs';
import './songs.css';

export default class Songs extends PureComponent {
    render() {
        return (
            <Fragment>
                {songs.map((song, songIndex) => (
                    <div key={songIndex} className='song'>
                        <h1 className='song-title'>{song.title}</h1>
                        <div className='song-link'>
                            <Link href={song.youtube} target='_blank'>
                                youtube link
                            </Link>
                        </div>
                        <SongText>
                            {song.body.map((paragraph, paragraphIndex) => (
                                <SongText.Paragraph key={paragraphIndex}>
                                    {paragraph.map((line, lineIndex) => (
                                        <SongText.Line key={lineIndex}>
                                            {line}
                                        </SongText.Line>
                                    ))}
                                </SongText.Paragraph>
                            ))}
                        </SongText>
                    </div>
                ))}
            </Fragment>
        );
    }
}
