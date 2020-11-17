import React from "react";

function Search() {
    return (
        <div className="container">

            <div className="form-group">
                <label for="searchInput">Search for Employee</label>
                <input type="search" class="form-control" id="searchInput"></input>

                    <button type="submit" className="btn btn-primary">Submit</button>
            </div>

        </div>

  )
}

export default Search