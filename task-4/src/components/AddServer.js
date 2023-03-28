import React from "react";
import Swal from "sweetalert2";
class AddServer extends React.Component {
  state = {
    name: "",
    language: "",
    framework: "",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.language === "" ||
      this.state.framework === ""
    ) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "All the fields are mandatory!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    this.props.addServerHandler(this.state);
    this.setState({ name: "", language: "", framework: "" });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${this.state.name}'s data has been saved successfully`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add a Server</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Language</label>
            <input
              type="text"
              name="language"
              placeholder="Enter Language"
              value={this.state.language}
              onChange={(e) => this.setState({ language: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Framework</label>
            <input
              type="text"
              name="framework"
              placeholder="Enter Framework"
              value={this.state.framework}
              onChange={(e) => this.setState({ framework: e.target.value })}
            />
          </div>
          <button className="ui button green">Add Server</button>
        </form>
      </div>
    );
  }
}

export default AddServer;
