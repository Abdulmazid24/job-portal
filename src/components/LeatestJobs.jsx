import React, { useEffect, useState } from 'react';
import LeatestJobsCard from './LeatestJobsCard';

const LeatestJobs = () => {
  const [jobs, setJobs] = useState([]);
  console.log(jobs);
  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
      });
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {jobs.map(job => (
          <LeatestJobsCard key={job._id} job={job}></LeatestJobsCard>
        ))}
      </div>
    </div>
  );
};

export default LeatestJobs;
