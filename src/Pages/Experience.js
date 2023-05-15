import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { School,Work } from '@material-ui/icons';

export const Experience = () => {
  return (
    <div className='experience'>
       <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Mar 2015 - Mar 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Tecnico Superior en desarrollo de software
          </h3>
          <p> Instituto Populorum Proggressiom N° 7</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jun 2020 - Sep 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack .NET
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Comunidad IT
          </h4>
          <p>Curso de programacion</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Ago 2020 - Jun 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack JAVA
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            EGG Comunidad
          </h4>
          <p>Curso de programacion</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Ene 2021 - Abr 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End 
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Alura LATAM
          </h4>
          <p>Curso de programacion</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2021 - Jul 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Back End 
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Alura LATAM 
          </h4>
          <p>Curso de programacion</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2022 - Sep 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Boston Medical Group
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            España
          </h4>
          <p>Devs Juniors</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2022 - Jun 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack React
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            EDEP Jujuy
          </h4>
          <p>Curso de programacion</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Abr 2023 - Jul 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack React
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Incluyeme
          </h4>
          <p>Curso de programacion</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
