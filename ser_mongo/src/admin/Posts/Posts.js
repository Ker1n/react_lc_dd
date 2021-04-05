import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LeftPanel } from '../LeftPanel/LeftPanel'
import TopPanel from '../TopPanel/TopPanel'
import PostItem from './PostItem'
import  getToWordsCollection  from './../../redux/text-parser-action';


class Posts extends Component {
//    componentDidMount () { 
//     this.props.getToWordsCollection()
//    }

   
    render() {
  
        return (
            <div>
                <TopPanel />
                <div className="admin-page">
                    <LeftPanel />
                    <div className="content">
                        <PostItem />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return { 
        words: state.getToWordsReducer
    }
}

const mapDispatchToProps = (dispatch) => { 
    return { 
        getToWordsCollection: () => dispatch(getToWordsCollection())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
 