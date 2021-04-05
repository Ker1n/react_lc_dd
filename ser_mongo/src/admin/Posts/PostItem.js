import React, { Component } from 'react'

class PostItem extends Component {
    render() {
        return (
            <div className='word-card'>
                <h4>some</h4>
                <textarea rows="10"></textarea>
                    <div>
                        <button>Save</button><button>Delete</button>
                    </div>
            </div>
        )
    }
}

export default PostItem
