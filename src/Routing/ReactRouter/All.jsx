import { useEffect, useState } from "react";

function All() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://api.github.com/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setData(result);
      })
      .catch((error) => console.error(error));
  }, []);

  const getTxt = () => {
    if (data.length == 0) {
      return "...Loading";
    }

    return "Github users";
  };

  return (
    <div>
      <h1>{getTxt()}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((user) => {
          const { avatar_url, login, url } = user;
          return (
            <div key={user.id}>
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
        })}
      </div>
    </div>
  );
}

export default All;
