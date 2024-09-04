import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getResumeInference } from '../../api/resume/resume';
import './Resume.css'; 

const Resume: React.FC = () => {
  // const { data: inference, isLoading, isError } = useQuery({queryKey: ['resumeInference'], queryFn: getResumeInference});

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error fetching resume inference</div>;
  // }

  return (
    <div className="resume">
      {/* <div>{inference && <>{JSON.stringify(inference)}</>}</div> */}
      <iframe
        src="https://resume.creddle.io/embed/6x3f8thxdss"
        width="850"
        height="1100"
        className="home-iframe"
        title="Resume of Timothy Villaraza"
        seamless
      ></iframe>
    </div>
  );
};

export default Resume;