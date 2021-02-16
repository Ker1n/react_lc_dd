import React from "react";

export default class className extends React.PureComponent {
  
  state = {
    value: this.props.comment,
  };




 
  componentDidUpdate (prevProps, prevState) { 
      if (this.props.comment !== prevProps.comment) { 
        this.setState({
            value: this.props.comment,
          });
      }
  }

  changeValue = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  onBlur = (e) => { 
      console.log(this.state.value)
      this.props.onBlur(this.state.value)
  }
  
  render() {
    return (
      <textarea
        className="comment-input"
        value={this.state.value}
        onChange={this.changeValue}
        onBlur={this.onBlur}
      />
    );
  }
}
