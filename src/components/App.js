import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post'

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/posts')
      .then(response => {
        console.log(response.data)
        this.setState({posts: response.data})
      })
      .catch(error => {
        console.log('Get on mount:', error)
      })
  }

  updatePost(id, text) {
    axios.put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, text)
      .then(response => {
        this.setState({posts: response.data})
      })
      .catch(error => {
        console.log('Posts update:', error)
      })
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />
          {this.state.posts.map((v, i) => {
            return (<Post 
              key={i}
              id={v.id} 
              text={v.text} 
              date={v.date}
              updatePostFn={this.updatePost} />)
          })}
        </section>
      </div>
    );
  }
}

export default App;
