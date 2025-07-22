import { useState } from "react";

function Search() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");

  const searchUser = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`https://api.github.com/search/users?q=${search}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        let doc = result.items[0];
        setUser(doc);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Searching page</h1>
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={searchUser} className=" btn btn-primary">
          Search
        </button>
      </div>
      <SingleUser user={user} />
    </div>
  );
}

function SingleUser(props) {
  const { user } = props;

  if (!user) {
    return null;
  }

  const { avatar_url, login } = user;

  return (
    <div>
      <img style={{ width: "100px" }} src={avatar_url} />
      <p>
        Name :<b>{login}</b>
      </p>
      <p>
        Github{" "}
        <a href={`https://github.com/${login}`} target="blank">
          Link
        </a>
      </p>
    </div>
  );
}

export default Search;
