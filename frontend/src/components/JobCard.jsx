function JobCard({ job, onClick, isSelected }) {
  const postedDaysAgo = job.postedDate
    ? Math.floor((new Date() - new Date(job.postedDate)) / (1000 * 60 * 60 * 24))
    : null;

  return (
    <div
      onClick={() => onClick(job)}
      className={`flex gap-4 p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${
        isSelected
          ? "bg-blue-50 border-blue-500 shadow-md"
          : "bg-white hover:shadow-sm"
      }`}
    >
      {/* Company Logo */}
      {job.companyImageUrl ? (
        <img
          src={job.companyImageUrl}
          alt={job.company}
          className="h-14 w-14 object-contain rounded-md border bg-white"
        />
      ) : (
        <div className="h-14 w-14 bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-500 border">
          No Logo
        </div>
      )}

      {/* Job Info */}
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h2 className="text-base md:text-lg font-semibold text-gray-800">{job.title}</h2>
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
            {job.employmentType || "Full Time"}
          </span>
        </div>

        <p className="text-sm text-gray-600 leading-tight">{job.company}</p>
        <p className="text-sm text-gray-500 mb-1">{job.location}</p>

        <div className="text-xs text-gray-400 flex gap-2">
          <span>{job.experience || "Experience not listed"}</span>
          {postedDaysAgo !== null && (
            <span>
              •{" "}
              {postedDaysAgo === 0
                ? "Posted today"
                : `Posted ${postedDaysAgo} day${postedDaysAgo > 1 ? "s" : ""} ago`}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobCard;