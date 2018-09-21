import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchFilter } from '../../actions/searchbar';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.handleOnSearch = this.handleOnSearch.bind(this);
  }

  handleOnSearch(event) {
    event.preventDefault()
  }

  onSearchFilter() {
    const input = this.refs.flexSearch;
    this.props.dispatch(searchFilter(input.value));
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
              <input className="flexsearch--input" type="search" placeholder="search" ref="flexSearch" onChange={() => this.onSearchFilter()} />
            </div>
            <input className="flexsearch--submit" type="submit" value="&#10140;" onClick={() => this.handleOnSearch(event)}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('this is redux state', state.searchbar);
  return {
    filter: state.searchbar.filter,
  }
}

export default connect(mapStateToProps)(SearchBar);