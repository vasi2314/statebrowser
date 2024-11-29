import { Link, NavLink, useNavigate } from "react-router-dom";

const Navigation = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="button">
        <button onClick={() => Navigate("/user")}>
          User
          <br />
        </button>
        <button onClick={() => Navigate("/commends")}>
          Comments
          <br />
        </button>
      </div>
    </>
  );
};
export default Navigation;
