import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }

  handleUpdate(value) {
    this.setState({text: value})
  }

  handleSearch() {
    this.props.searchPostsFn(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed"
            onChange={e => this.handleUpdate(e.target.value)} />

          <SearchIcon id="Search__icon"
            onClick={() => this.handleSearch()} />
        </div>
        
      </section>
    )
  }
}