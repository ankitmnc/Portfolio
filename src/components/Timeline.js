import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';

export default function Home() {
    const typeSchool = 'school';
    const typeWork = 'work';
    const timelineData = [
        {
            id: 0,
            date: 'Aug 2023 - Sept 2023',
            title: 'Intern at ArchiTech Solutions',
            subtitle: 'Software Developer',
            type: typeWork,
        },
        {
            id: 1,
            date: 'Dec 2020 - Present',
            title: 'Indian Institute of Technology Dhanbad',
            subtitle: 'Mathematics and Computing',
            type: typeSchool,
        },
        {
            id: 2,
            date: 'Apr 2017 – June 2019  ',
            title: 'British English School, Gaya',
            subtitle: 'Intermediate',
            type: typeSchool,
        },
        {
            id: 3,
            date: 'Apr 2015 - Mar 2017',
            title: 'PVSS DAV Public School, Jhumri Telaiya',
            subtitle: 'Matriculation',
            type: typeSchool,
        },
    ];

    return (
        <VerticalTimeline
            className="vertical-timeline-container"
            animate={false}
            lineColor="#000"
        >
            {timelineData.map(item => (
                    <VerticalTimelineElement
                        id={item.id}
                        key={item.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#aaa', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid #aaa' }}
                        date={item.date}
                        iconStyle={{ background: '#aaa', border: '#000' }}
                        icon={item.type === typeWork ? <WorkIcon /> : <SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                    </VerticalTimelineElement>
                ))}
            <VerticalTimelineElement
                id="vertical-timeline-icon-star"
                iconStyle={{ background: '#aaa', border: '#000' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
    );
}
