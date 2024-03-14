function SuggestionUsers({ users, handleClick }) {
  return (
    <ul>
      {users && users.length
        ? users.map((user, index) => (
            <li onClick={handleClick} key={index}>
              {user}
            </li>
          ))
        : null}
    </ul>
  );
}

export default SuggestionUsers;
