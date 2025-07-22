import { useNavigate, useLocation } from "react-router";

function NavComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const getclass = (toCheck) => {
    let path = location.pathname;
    if (toCheck === path) {
      return "btn-primary ";
    }

    return "btn-secondary";
  };

  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard/search");
        }}
        className={`btn ${getclass("/dashboard/search")}  m-1`}
      >
        Search
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
        className={`btn ${getclass("/dashboard")}  m-1`}
      >
        ALL
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
        className={`btn btn-secondary m-1`}
      >
        Logout
      </button>
    </div>
  );
}

export default NavComponent;
