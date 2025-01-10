import { Link } from 'react-router-dom';

const LeatestJobsCard = ({ job }) => {
  console.log(job);
  const {
    _id,
    title,
    company_logo,
    // requirments,
    description,
    location,
    applicationDeadline,
    // category,
    salaryRange,
    // requirements,
    // responsibilities,
    company,
    jobType,
  } = job;

  return (
    <div className="  bg-white  rounded-lg overflow-hidden border-2 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
      {/* Header Section */}
      <div className="flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-2 ">
        <img
          src={company_logo}
          alt={`${company} Logo`}
          className="w-12 h-12 rounded-full "
        />
        <div className="ml-4">
          <h2 className="text-white text-lg font-bold">{title}</h2>
          <p className="text-white font-thin">{company}</p>
        </div>
      </div>

      {/* Body Section */}
      <div className="p-3">
        {/* Job Description */}
        <p className="text-gray-900 text-sm font-thin mb-3">{description}</p>

        {/* Job Details */}
        <div className="">
          <div className="text-gray-800 text-sm">
            <span className="font-medium">📍 Location:</span> {location}
          </div>
          <div className="text-gray-800 text-sm">
            <span className="font-medium">🕒 Deadline:</span>{' '}
            {applicationDeadline}
          </div>
          <div className="text-gray-800 text-sm">
            <span className="font-medium">💼 Type:</span> {jobType}
          </div>
          <div className="text-gray-800 text-sm">
            <span className="font-medium">💰 Salary:</span>{' '}
            {salaryRange.currency.toUpperCase()} {salaryRange.min} -{' '}
            {salaryRange.max}
          </div>
        </div>
        <div className="flex justify-between">
          {/* Requirements */}
          <div className="mb-4">
            <h3 className="text-gray-800 font-medium mb-2">Requirements:</h3>
            <ul className="list-disc text-gray-950 text-sm flex gap-1">
              {job.requirements.map((req, index) => (
                <li
                  key={index}
                  className="list-none px-2 py-1 bg-[#f2f4f4] rounded-md w-max"
                >
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Apply Button */}
        <Link to={`/jobs/${_id}`}>
          <button className="w-full bg-gradient-to-r from-red-200 via-violet-600 to-amber-600  text-white font-semibold py-1 px-5   rounded-md hover:scale-110 transition-transform duration-300">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LeatestJobsCard;
