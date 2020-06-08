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

                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>My Stack By Job</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <div>
                                    <h3>Cinépolis</h3>
                                    <img src="images/technologies/java.png" width="64" height="64" alt="Java"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/spring.svg" width="64" height="64" alt="Spring"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/spring-boot.png" alt="Spring Boot" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/git.png" alt="Git" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/junit5.png" alt="jUnit 5" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/mongodb.png" alt="MongoDB" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/redis.png" alt="Redis" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/kafka.png" alt="Apache Kafka" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/react.svg" alt="ReactJs" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/docker.png" alt="Docker" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/elastic_beanstalk.png" alt="ELB" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/s3.jpg" alt="S3" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/jira.png" alt="Jira" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/bitbucket.jpg" alt="Bitbucket" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                </div>
                                <div>
                                    <h3>Grupo Tres Marías</h3>
                                    <img src="images/technologies/java.png" width="64" height="64" alt="Java"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/spring-boot.png" alt="Spring Boot" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/mysql.svg" alt="Git" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/git.png" alt="jUnit 5" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/jquery.png" alt="jUnit 5" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/jira.png" alt="jUnit 5" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/elastic_beanstalk.png" alt="ELB" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/codecommit.png" alt="ELB" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                </div>
                                <div>
                                    <h3>CredixGS</h3>
                                    <img src="images/technologies/php.png" width="64" height="64" alt="Java"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/jquery.png" alt="Spring Boot" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                    <img src="images/technologies/git.png" alt="Git" width="64" height="64"/>
                                    <span>&nbsp;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Resume;
