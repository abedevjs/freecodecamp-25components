import { useEffect, useState } from "react";
import GithubUser from "./GithubUser";

// https://api.github.com/users/${userName}

function GithubFinder() {
  const [userName, setUserName] = useState("abedevjs");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();

      if (data) {
        setUserData(data);
        setLoading(false);
        setUserName("");
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  function handleSearch() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  //   console.log(userData);

  if (loading) return <p>⏳ Loading...</p>;

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
        <button onClick={handleSearch}>Search Github User</button>
      </div>
      {userData ? <GithubUser userData={userData} /> : null}
    </div>
  );
}

export default GithubFinder;
