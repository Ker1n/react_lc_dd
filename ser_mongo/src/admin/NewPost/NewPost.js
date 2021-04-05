import React, { Component } from "react";
import { connect } from "react-redux";
import TopPanel from "../TopPanel/TopPanel";
import { LeftPanel } from "../LeftPanel/LeftPanel";
import { addText } from "../../redux/add-text-action";
import exactWordsCollection from "../../redux/text-parser-action";
import WordsList from "./Words-List";



class NewPost extends Component {
 
  render() {
    return (
      <div>
        <TopPanel />
        <div className="admin-page">
          <LeftPanel />
          <div className="content">
            <textarea name="addText" id="" cols="30" rows="10" onChange= {(e) => this.props.addText(e.target.value)} value={this.props.text}></textarea>
          </div>
          <button onClick ={this.props.exactWordsCollection}>Click</button>
        </div>
        <WordsList wordList = {this.props.words} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.addTextReducer,
  words: state.textParserReducer
});

const mapDispatchToProps = (dispatch) => {
  
  return {
    addText: (e) => dispatch(addText(e)),
    exactWordsCollection: () => dispatch (exactWordsCollection())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
