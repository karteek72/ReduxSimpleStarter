import React, { Component } from 'react';

// Functional Based Component do Not have State. Only Class based Component

// Class Based Component
class SearchBar  extends React.Component{

  constructor(props) {
      super(props);

      this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }


  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

/*

// Functional based Component

const SearchBar = () => {
  return <input />
};
*/
export default SearchBar;
