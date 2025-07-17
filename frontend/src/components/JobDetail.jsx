import { formatDistanceToNow } from "date-fns";

function JobDetail({ job }) {
  if (!job)
    return (
      <p className="text-gray-400 text-center mt-32 italic">
        Select a job to view details
      </p>
    );

  const postedDaysAgo =
    job.postedDate &&
    formatDistanceToNow(new Date(job.postedDate), { addSuffix: true });

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-6 text-sm">
      {/* Header */}
      <div className="flex items-center gap-4">
        {job.companyImageUrl ? (
          <img
            src={job.companyImageUrl}
            alt={job.company}
            className="h-16 w-16 object-contain border rounded-md bg-white"
          />
        ) : (
          <div className="h-16 w-16 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-500 border">
            No Logo
          </div>
        )}

        <div>
          <h1 className="text-xl font-bold text-gray-800">{job.title}</h1>
          <p className="text-sm text-gray-600">{job.company}</p>
          <p className="text-xs text-gray-400">{job.location}</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-3 gap-x-6">
        <Detail label="Experience" value={job.experience || "Not specified"} />
        <Detail label="Type" value={job.employmentType || "N/A"} />
        <Detail label="Source" value={job.source || "N/A"} />
        <Detail label="Country" value={job.country || "N/A"} />
        {postedDaysAgo && <Detail label="Posted" value={postedDaysAgo} />}
      </div>

      {/* CTA Button */}
      <div className="pt-4">
        <a
          href={job.jobLink}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-full sm:w-auto px-6 py-2 text-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-medium"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 font-medium">{label}</p>
      <p className="text-gray-800">{value}</p>
    </div>
  );
}

export default JobDetail;