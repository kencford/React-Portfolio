import React from 'react';
import resume from '../../resume/Ken-Crawford.pdf'

export default function Resume() {
  return (
    <>
        <h1 className="text-end px-5 mb-5 bg-primary text-white py-3">Resume</h1>
      <div className='container d-grid mt-5'>
        <a className='text-end' href={resume} download>Click to download resume</a>
      <h4 class="skill-header"> </h4>
      <h4 class="skill-header">Front End Skills</h4>
      <ul class="list-group">
        <li class="list-group-item">HTML</li>
        <li class="list-group-item">Bootstrap</li>
        <li class="list-group-item">Local Storage</li>
        <li class="list-group-item">React</li>
      </ul>
      <br/>
      <h4 class="skill-header">Back End Skills</h4>
      <ul class="list-group">
        <li class="list-group-item">MySQL</li>
        <li class="list-group-item">Sequelize</li>
        <li class="list-group-item">MongoDB</li>
        <li class="list-group-item">Mongoose</li>
        <li class="list-group-item">GraphQL</li>
      </ul>
      <h1 class="spacer"> </h1>
    </div>
      </>
      );
}
