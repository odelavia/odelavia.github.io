import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.handleOnSearch = this.handleOnSearch.bind(this);
  }

  handleOnSearch () {
    event.preventDefault()
    console.log('searching for projects!')
  }

  render() {
    return (
      <div className="flexsearch">
        <div className="flexsearch--wrapper">
          <div className="flexsearch--form" 
            /* action="#" */
            /* method="post" */
          >
            <div className="flexsearch--input-wrapper">
              <input className="flexsearch--input" type="search" placeholder="search" />
            </div>
            <input className="flexsearch--submit" type="submit" value="&#10140;" onClick={() => this.handleOnSearch(event)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;