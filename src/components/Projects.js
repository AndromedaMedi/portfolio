import React from 'react';
import {FaGithubSquare} from 'react-icons/fa';
import project1 from '../project_images/project_1/1_home_page.png';
import project2 from '../project_images/project_2/discover_page.png';
import video2 from '../unread-recording.mp4';


const Projects = () => {


    return (
        <div className='projects-page'>
            <h2 className='page-title'>My Projects</h2>
            <hr className='line'></hr>
            <div className='projects-list'>
                <ul>
                    <li className='projects-list-item'>
                        <div className='project'>
                            <div className='project-details'>
                                <h2>Travel Bucket List</h2>
                                <hr></hr>
                                <h3 className='type'>Solo Project</h3>
                                <h3 className='project-type'>Python  |  Flask  |  PSQL  |  CSS</h3>
                                <h5>Completed in 7 days</h5>

                                <a href="https://github.com/AndromedaMedi/week_5_solo_project.git">
                                    <span className='icon'><FaGithubSquare size={50}/></span>
                                </a>
                                <paragraph className='paragraph'>
                                    <section>
                                    Travel Bucket List is a travel tracking CRUD app that allows the user 
                                    to manage the countries and cities they have visited and wish to visit, 
                                    using RESTful routes, a PostgreSQL database and Python(Flask). This was 
                                    my first solo project, created on week 5 of the Software development 
                                    course at CodeClan. 
                                    </section>
                                </paragraph>
                            </div>
                            <div className='project-video'>
                                <img className='project-pic' src={project1} alt='project-pic'/>
                            </div>
                        </div>
                    </li>

                    <li className='projects-list-item'>
                        <div className='project'>
                            <div className='project-video'>
                                <video className='project-pic' src={video2}controls="controls" autoplay="true" alt='video-demo'/>
                            </div>
                            <div className='project-details'>
                                <h2>Unread - Book Tracking App</h2>
                                <hr></hr>
                                <h3 className='type'>Group Project</h3>
                                <h3 className='project-type'>React  |  JavaScript  |  MongoDB | API | CSS</h3>
                                <h5>Completed in 7 days</h5>

                                <a className='link' href="https://github.com/AndromedaMedi/Unread.git">
                                    <span className='icon'><FaGithubSquare size={50}/></span>
                                </a>
                                <paragraph className='paragraph'>
                                    <section>
                                    Unread is a book tracking app that allows multiple users to track the books 
                                    they read or wish to read, using the OpenLibrary API. The web app was built 
                                    utilizing React on the front end which connects to the API that communicates 
                                    with NoSQL database MongoDB at the backend. As a group-project, Unread was a 
                                    great opportunity to collaborate and practice Scrum methodologies.
                                    </section>
                                </paragraph>
                            </div>
                        </div>
                    </li>
                    <li className='projects-list-item'>
                        <div className='project'>
                            <div className='project-details'>
                                <h2>Unknown</h2>
                                <hr></hr>
                                <h3 className='type'>Unknown Project</h3>
                                <h3 className='project-type'>React  |  JavaScript  |  MongoDB | API | CSS</h3>
                                <h5>Completed in 14 days</h5>

                                <a className='link' href="https://github.com/AndromedaMedi/Unread.git">
                                    <span className='icon'><FaGithubSquare size={50}/></span>
                                </a>
                                <paragraph className='paragraph'>
                                    <section>
                                    </section>
                                </paragraph>
                            </div>
                            <div className='project-video'>
                                <p>video</p>
                            </div>
                        </div>    
                    </li>
                </ul>
            </div>
        </div>
    );

};

export default Projects;