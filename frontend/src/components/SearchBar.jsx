function SearchBar({ searchText, setSearchText }) {
   return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Search by location..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}

export default SearchBar;