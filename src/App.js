import React, { Component } from 'react'

import _ from 'lodash';
import './App.css';

import SearchBar from './SearchBar.js';
import DataTable from './Table.js'
import ReactPlayer from 'react-player'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      searchTerm: '',
    };
    this.searchTermChange = this.searchTermChange.bind(this);
  }

  componentDidMount() {
    fetch("https://www.scorebat.com/video-api/v1")
      .then(res => res.json())
      .then(
        (result) => {
          _.forEach(result, (value, key) => {
            value.competitionName = value.competition.name
            value.side1Name = value.side1.name
            value.side2Name = value.side2.name
          });

          this.setState({
            rows: result
          });
        }
      )
  }

  searchTermChange = (value) => {
    this.setState({
      searchTerm: value,
    });
  }

  render() {
    const { rows, searchTerm } = this.state;
    let filteredRows = [];

    if(searchTerm) {
      filteredRows = _.filter(rows, (item) => {
        return item.competitionName.toLowerCase().includes(searchTerm.toLowerCase())
          || item.side1Name.toLowerCase().includes(searchTerm.toLowerCase())
          || item.side2Name.toLowerCase().includes(searchTerm.toLowerCase())
          || item.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
    } else {
      filteredRows = rows;
    }

    return (
      <div className="App">
        <ReactPlayer url='https://youtu.be/fUpsta0bHEE' playing  style={{ margin: '0 auto', marginBottom: '20px'}} />
        <SearchBar searchTermChange={this.searchTermChange} />
        <DataTable rows={filteredRows} />
      </div>
    );
  }
}

export default App;
