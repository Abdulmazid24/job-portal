import { div } from 'framer-motion/client';
import Lottie from 'lottie-react';
import intervewLottie from '../../assets/lottie/job_intervew_1.json';
import gradiantLottie from '../../assets/lottie/job_intervew_2.json';
import { Link, useLoaderData } from 'react-router-dom';

export default function JobDetails() {
  const jobDetailsData = useLoaderData();
  console.log(jobDetailsData);
  const {
    _id,
    title,
    company_logo,
    description,
    location,
    applicationDeadline,
    hr_name,
    hr_email,
    salaryRange,
    requirements,
    responsibilities,
    company,
    jobType,
  } = jobDetailsData;
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <img
            src={company_logo}
            alt={company}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-gray-600">
              {company} - {location}
            </p>
          </div>
        </div>

        <p className="text-gray-800 mb-6">{description}</p>

        <div className="md:flex justify-between items-center ">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-gray-600">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <div>
            <Lottie className="md:w-48" animationData={gradiantLottie}></Lottie>
          </div>
        </div>
        <div className="md:flex justify-between items-center">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-600">
              {responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
          <div>
            <Lottie className="md:w-48" animationData={intervewLottie}></Lottie>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          <strong>Salary Range:</strong> {salaryRange.min} - {salaryRange.max}{' '}
          {salaryRange.currency.toUpperCase()}
        </p>

        <p className="text-gray-700 mb-4">
          <strong>Application Deadline:</strong> {applicationDeadline}
        </p>

        <p className="text-gray-700 mb-6">
          <strong>Contact HR:</strong> {hr_name} ({hr_email})
        </p>

        <Link to={`/jobApply/${_id}`}>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-300">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
}
