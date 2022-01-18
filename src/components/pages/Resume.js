import React from 'react';
import resume from '../../resume/Ken-Crawford.pdf'

export default function Resume() {
  return (
    <div className='mt-5'>
      <h1 className="text-end px-5 mb-5 bg-primary text-white py-3">Resume</h1>
      <a href={resume} download>Click to download resume</a>
    </div>
  );
}
