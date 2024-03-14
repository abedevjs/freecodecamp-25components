import { useEffect, useState } from "react";
import SuggestionUsers from "./SuggestionUsers";

//https://dummyjson.com/users
function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else setShowDropdown(false);
  }

  console.log(filteredUsers);

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((user) => user.firstName));
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function handleClick(event) {
    setSearchParam(event.target.innerText);
    setShowDropdown(false);
    setFilteredUsers([]);
  }

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h2>⏳ Checking...</h2>
      ) : (
        <input
          onChange={handleChange}
          value={searchParam}
          type="text"
          name="search-users"
        />
      )}

      {showDropdown && (
        <SuggestionUsers handleClick={handleClick} users={filteredUsers} />
      )}
    </div>
  );
}

export default SearchAutoComplete;
