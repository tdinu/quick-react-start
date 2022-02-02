import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchString: '',
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((res) => this.setState({ data: res }));
  }

  render() {
    const { searchString, data } = this.state;
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchString.toLowerCase()),
    );
    // same as
    // const searchString = this.state.searchString;
    // const data = this.state.data;
    // console.log('destructured data:', data);
    return (
      <div className="App">
        <SearchBox
          placeholder="Search item..."
          handleChange={(e) => {
            this.setState({ searchString: e.target.value });
          }}
        />
        <CardList data={filteredData} />
      </div>
    );
  }
}

export default App;
