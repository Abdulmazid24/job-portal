import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddJob = () => {
  const navigate = useNavigate();
  const handleAddJob = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { salaryMin, salaryMax, currency, ...newJob } = initialData;
    newJob.salaryRang = { salaryMin, salaryMax, currency };
    newJob.requirements = newJob.requirements.split('\n');
    newJob.responsibilities = newJob.responsibilities.split('\n');
    console.log(newJob);
    fetch('http://localhost:3000/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Drag me!',
            icon: 'success',
            draggable: true,
          });
          navigate('/myApplications');
        }
      });
  };
  return (
    <div className=" p-3 md:p-6 my-20 rounded-lg border-2">
      <h2 className="text-3xl font-bold text-center">Post a Job</h2>
      <form onSubmit={handleAddJob} className="bg-white p-6  space-y-4">
        <div>
          <label className="block font-medium">Job Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter job title"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Job Type</label>
          <select name="jobType" className="w-full border rounded px-3 py-2">
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Category</label>
          <select name="category" className="w-full border rounded px-3 py-2">
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Salary Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="salaryMin"
              placeholder="Min"
              className="w-1/3 border rounded px-3 py-2"
              required
            />
            <input
              type="number"
              name="salaryMax"
              placeholder="Max"
              className="w-1/3 border rounded px-3 py-2"
              required
            />
            <select name="currency" className="w-1/3 border rounded px-3 py-2">
              <option value="bdt">BDT</option>
              <option value="usd">USD</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-medium">Application Deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Company</label>
          <input
            type="text"
            name="company"
            placeholder="Enter company name"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Requirements</label>
          <textarea
            name="requirements"
            placeholder="Write each requirements in a new line"
            className="w-full border rounded px-3 py-2"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Responsibilities</label>
          <textarea
            name="responsibilities"
            placeholder="Write each responsibility in a new line"
            className="w-full border rounded px-3 py-2"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Write job description"
            className="w-full border rounded px-3 py-2"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block font-medium">HR-email</label>
          <input
            type="email"
            name="hr_email"
            placeholder="Enter HR Email"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">HR Name</label>
          <input
            type="text"
            name="hr_name"
            placeholder="Enter HR name"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Company Logo URL</label>
          <input
            type="url"
            name="logoUrl"
            placeholder="Enter company logo URL"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Status</label>
          <select name="status" className="w-full border rounded px-3 py-2">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 font-semibold text-white py-2 rounded hover:bg-purple-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddJob;
