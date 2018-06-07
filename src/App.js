import React, { Component } from 'react';

// components
import TagAutocomplete from './components/TagAutocomplete';

class App extends Component {

  constructor (props) {
    super(props)
 
    this.state = {
      tags: [],
      suggestions: [
        { id: 1, name: "label1", color: '#ffa58d' },
        { id: 2, name: "label2", color: '#2dbb54' },
        { id: 3, name: "label3", color: '#5492ff' },
        { id: 4, name: "suggestion2", color: '#ff8e63' },
        { id: 5, name: "tag1", color: '#137477' },
        { id: 6, name: "anothertag", color: '#ffd900' },
        { id: 7, name: "tag2", color: '#9ce38b' },
        { id: 8, name: "suggestion", color: '#68c3d7' },
      ]
    }
  }
 
  handleDelete = (i) => {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
  }
 
  handleAddition = (tag) => {
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags })
  }
 

  render() {
    return (
      <div style={{ width: 500, padding: 10 }}>
        <TagAutocomplete
          tags={ this.state.tags }
          suggestions={ this.state.suggestions }
          handleDelete={ this.handleDelete }
          handleAddition={ this.handleAddition }
        />
      </div>
    );
  }
}

export default App;