import React, { Component } from "react";
import { connect } from "react-redux";

class WordsList extends Component {
  render() {
      const {wordList} = this.props;
    return ( 
        <>
            {wordList.map((item, index) => <p key={index}>{item.text} </p>)}
        </>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WordsList);
