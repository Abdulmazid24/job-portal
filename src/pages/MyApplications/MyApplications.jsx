import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {
  const { user } = useAuth();
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/job-application?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setApplicants(data);
      });
  }, [user.email]);
  return (
    <div className="overflow-x-auto mt-20">
      <table className="table-auto border-collapse w-full text-sm text-left text-gray-500">
        <thead className="bg-gray-200 text-gray-700 uppercase">
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Phone</th>
            <th className="px-4 py-2 border">LinkedIn</th>
            <th className="px-4 py-2 border">GitHub</th>
            <th className="px-4 py-2 border">CV</th>
            <th className="px-4 py-2 border">Cover Letter</th>
            <th className="px-4 py-2 border">Job Title</th>
            <th className="px-4 py-2 border">Company</th>
            <th className="px-4 py-2 border">Company Logo</th>
          </tr>
        </thead>
        <tbody>
          {applicants.length > 0 ? (
            applicants.map((applicant, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{applicant.name}</td>
                <td className="px-4 py-2 border">
                  {applicant.applicant_email}
                </td>
                <td className="px-4 py-2 border">{applicant.phone}</td>
                <td className="px-4 py-2 border">
                  <a
                    href={applicant.linkdin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    LinkedIn
                  </a>
                </td>
                <td className="px-4 py-2 border">
                  <a
                    href={applicant.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    GitHub
                  </a>
                </td>
                <td className="px-4 py-2 border">
                  <a
                    href={applicant.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    CV
                  </a>
                </td>
                <td className="px-4 py-2 border">{applicant.coverLetter}</td>
                <td className="px-4 py-2 border">{applicant.title}</td>
                <td className="px-4 py-2 border">{applicant.company}</td>
                <td className="px-4 py-2 border">
                  <img
                    src={applicant.company_logo}
                    alt={applicant.company}
                    className="h-10 w-10 object-cover rounded"
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="px-4 py-2 border text-center">
                No applicants found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyApplications;
