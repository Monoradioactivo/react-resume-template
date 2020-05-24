import React, {Component} from 'react';

class Resume extends Component {
    render() {

        if (this.props.data) {
            var education = this.props.data.education.map(function (education) {
                return <div key={education.school}><h3>{education.school}</h3>
                    <p className="info">{education.degree} <span>&bull;</span><em
                        className="date">{education.graduated}</em></p></div>
            });
            var work = this.props.data.work.map(function (work) {
                return <div key={work.company}><h3>{work.company}</h3>
                    <p className="info">{work.title}<span>&bull;</span> <em
                        className="date">{work.years}</em><span>&bull;</span><a href={work.website} className="date"
                                                                                target="_blank">{work.website}</a></p>
                    <p>{work.description}
                        <br/>
                        <b>Technologies: </b>
                        {work.technologies}
                    </p>
                </div>
            });

            /*var jobs = this.props.data.jobs.map(job => {
                var jobTitle = job.name;
                var techs = [];
                var images = [];
                job.technologies.forEach(technology => {
                    techs.push(technology.name);
                    images.push(technology.image);
                });
                return <p key={jobTitle}>
                    <b>{jobTitle}</b>
                    <br/>
                    Tech: {techs} Image: {images}
                </p>
            });*/
            var jobs = this.props.data.jobs.map(job => {
                var jobName = job.name;

                console.log('--------Company');
                console.log(job.name);
                console.log('--------Technologies');
                var technologyName = (job.technologies.map(technology => {
                    return technology.name
                }));
                var technologyImage = (job.technologies.map(technology => {
                    return technology.image
                }));
                console.log(job.technologies.forEach())
                console.log('----------------------');
            });
        }

        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>My Stack By Job</span></h1>
                    </div>
                    <div className="nine columns main-col">

                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
