/* eslint-disable no-unused-vars */
import * as AiIcons from "react-icons/ai";

function SearchBox(props) {
  <script src="https://kit.fontawesome.com/073d3f4db9.js" crossOrigin="anonymous"></script>;
  return (
    <div className="search-box">
      <input type="text" id="input-box" placeholder="Search anything" autoComplete="off"></input>
      <button>
        <i className="icon">
          <AiIcons.AiOutlineSearch />
        </i>
      </button>
    </div>
  );
}
export default SearchBox;
