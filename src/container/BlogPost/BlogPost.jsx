import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post'
import axios from 'axios'

class BlogPost extends Component {
    state = {
        post: []
    }

    getdata = () => {
        axios.get('http://localhost:3004/posts')
            .then((res) => {
                this.setState({
                    post: res.data
                })
            })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            this.getdata()
        })
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })
        this.getdata()
    }
    render() {
        return (
            <Fragment>
                <p>Blog Post</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} />
                    })
                }

            </Fragment>
        )
    }
}

export default BlogPost