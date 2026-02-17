export default function SearchBar({ search, setSearch }) {
  return (
    <div className="card searchCard">
      <h3>Search Stock</h3>

      <input
        type="text"
        placeholder="Search by name or symbol..."
        value={search}
        onChange={(e) => {
  setSearch(e.target.value);
//   console.log(e.target.value);
}}
      />
    </div>
  );
}
