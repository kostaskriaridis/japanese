import React, { PureComponent } from 'react';
import SongText from '../song-text';
import Link from '../link';
import songs from '../../constants/songs';
import './songs.css';

export default class Songs extends PureComponent {
    render() {
        return (
            <div className='songs'>
                {songs.map((song, songIndex) => (
                    <div key={songIndex} className='song'>
                        <h1 className='song-title'>
                            <Link href={song.youtube} target='_blank'>
                                {song.title}
                            </Link>
                        </h1>
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
            </div>
        );
    }
}
