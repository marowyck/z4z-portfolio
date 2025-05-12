'use client'

import '../technologies/Technologies.css'
import { DiJava, DiGo, DiReact, DiNodejs, DiMysql } from 'react-icons/di';
import { TbBrandCSharp } from 'react-icons/tb';

const icons = [
    <TbBrandCSharp size={40} color='#FFF' />,
    <DiJava size={40} color='#FFF' />,
    <DiGo size={40} color='#FFF' />,
    <DiReact size={40} color='#FFF' />,
    <DiNodejs size={40} color='#FFF' />,
    <DiMysql size={40} color='#FFF' />,
];

export default function Technologies() {
    return (
        <div className="marqueeContainer" id='technologies'>
            <div className="marqueeTrack">
                {[...Array(10)].map((_, loopIndex) => (
                    <div key={`loop-${loopIndex}`} className="iconGroup">
                        {icons.map((Icon, iconIndex) => (
                            <div key={`${loopIndex}-${iconIndex}`} className="icon">
                                {Icon}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}