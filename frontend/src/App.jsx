import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./components/JobCard";
import JobDetail from "./components/JobDetail";
import SearchBar from "./components/SearchBar";

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // ⏳ Debounce effect to trigger search after 500ms pause
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setPage(1);
      setLocation(searchText);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchText]);


  const fetchJobs = async () => {
    try {
      const endpoint = location
        ? `http://localhost:5000/api/jobs/search?location=${location}&page=${page}&limit=10`
        : `http://localhost:5000/api/jobs?page=${page}&limit=10`;
      const res = await axios.get(endpoint);
      setJobs(res.data.jobs);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [location, page]);

  return (
    <div className="h-screen flex bg-gray-50 text-gray-800">
      {/* Left: Job List */}
      <div className="w-1/2 border-r overflow-y-auto px-6 py-6 bg-white shadow-md">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
        />

        {/* Job List */}
        {Array.isArray(jobs) && jobs.length > 0 ? (
          jobs.map((job) => (
            <JobCard
              key={job.jobId}
              job={job}
              onClick={setSelectedJob}
              isSelected={selectedJob?.jobId === job.jobId}
            />
          ))
        ) : (
          <p className="text-center text-gray-400 italic mt-10">No jobs found</p>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Right: Job Details */}
      <div className="w-1/2 overflow-y-auto px-8 py-6 bg-[#f7f9fc]">
        <JobDetail job={selectedJob} />
      </div>
    </div>
  );
}

export default App;