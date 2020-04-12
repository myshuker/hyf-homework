import React, { Component } from "react";

class AddItem extends Component {
  state = {
    description: "",
    deadline: "",
  };

  handleChange = (e) => {
    //  console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.description === "" || this.state.deadline === "") {
      console.log("false");
    } else {
      this.props.addItem(this.state);
      this.setState({
        description: "",
        deadline: "",
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            Todo description :{" "}
            <input
              type="text"
              placeholder="Enter description"
              id="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </p>
          <p>
            deadline : 
            <input
              type="date"
              id="deadline"
              onChange={this.handleChange}
              value={this.state.deadline}
            />
          </p>
          <input className="submit" type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}
export default AddItem;
