/* eslint-disable no-unused-vars */

function SearchBox(props) {
  <script src="https://kit.fontawesome.com/073d3f4db9.js" crossOrigin="anonymous"></script>;
  return (
    <div className="search-box">
      <div className="row">
        <input type="text" id="input-box" placeholder="Search anything" autoComplete="off"></input>
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
}
export default SearchBox;
