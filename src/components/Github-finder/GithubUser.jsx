function GithubUser({ userData }) {
  const {
    name,
    login,
    created_at,
    location,
    avatar_url,
    bio,
    public_repos,
    blog,
  } = userData;

  const date = new Date(created_at);

  return (
    <div>
      <p>
        {name || login} | {bio || "Unknown"}
      </p>
      <p>Location: {location || "Undetected"}</p>
      <p>
        Member since:{" "}
        {new Date(created_at).toLocaleString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <img
        src={avatar_url}
        alt={name}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <p>{public_repos} repos</p>
      <p>
        <a
          href={`https://github.com/${login}`}
          target="__blank"
          //   rel="noreferrer"
        >
          Github Page
        </a>{" "}
        ||{" "}
        <a href={blog || "https://github.com"} target="__blank">
          Blog
        </a>
      </p>
    </div>
  );
}

export default GithubUser;
