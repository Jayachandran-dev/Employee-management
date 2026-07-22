function SearchEmployee({search, setSearch, onFetchEmployees, onCreate}) {
    return (
        <div>
        <button onClick={onCreate}>Add</button>
        <input
        placeholder="Search Employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={onFetchEmployees}>
          Refresh
       </button>
        </div>
    )
}

export default SearchEmployee;