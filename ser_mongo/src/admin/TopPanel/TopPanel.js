import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import saveWords from "../../redux/save-words";

class TopPanel extends Component {


  render() {
    

    return (
      <div className="top-panel">
        <nav>
          <Link to="">WordExtractionAdmin</Link>
        </nav>
        <button onClick={this.props.saveWords}>Save</button>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) =>  {

  return { 
    saveWords: (url) => dispatch(saveWords('http://localhost:4004/words'))
  }
};

export default connect(null, mapDispatchToProps)(TopPanel);
