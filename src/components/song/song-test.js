import React from 'react';
import Song from './index';

export default function SongTest() {
    return (
        <Song>
            {[
                [
                    '明日のことはわかんない。',
                    'これってギセイとは違う。何かが違う。',
                    '罰ゲームじゃん、なんて思わない。'
                ],
                [
                    'で、なんでなのかわかんない。',
                    'ちょっと釈然としないけど、きみの存在、',
                    'いま大事だ、なんてもんじゃない。'
                ],
                [
                    '砂漠で迷ってるよな毎日は辛い。',
                    '涙は弱いんじゃ、ないの、愛のSWEET DROPS。'
                ],
                [
                    '女の子って弱いね。',
                    'だけどときどき強いね。',
                    'きみが居てくれて、HAPPY HAPPY HAPPY!',
                    'そんな日々もHAPPY。'
                ],
                [
                    'で、なんでなのかわかんない。',
                    '大人だってぎゅっと抱かれたい、触れられたい。',
                    'いくつになったって変わんない。'
                ],
                [
                    '終わらないことなんてこの世の何処にも無い。',
                    '泣くのは辛いんじゃ、ないの、愛のSWEET DROPS。'
                ],
                [
                    '男の子って強いね。',
                    'だけどときどき弱いね。',
                    'きみが居てくれて HAPPY。'
                ],
                [
                    'ずっと夢みていたいネ。',
                    'もっとやさしくしたいね。',
                    'きみと居られたら、HAPPY。'
                ],
                [
                    '女の子って強いね。',
                    'だけどときどき弱いね。',
                    'ぼくらの希いは、HAPPY HAPPY HAPPY!'
                ],
                [
                    'そんな日々もHAPPY。',
                    'それでいつもHAPPY。'
                ],
                [
                    'JUST WANNA MAKE YOU HAPPY☆。',
                    'JUST WANNA MAKE YOU HAPPY☆。'
                ]
            ].map((paragraph, index) => (
                <Song.Paragraph key={index}>
                    {paragraph.map((line, index) => (
                        <Song.Line key={index}>
                            {line}
                        </Song.Line>
                    ))}
                </Song.Paragraph>
            ))}
        </Song>
    );
}
