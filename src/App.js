import React, { Component } from "react";
import { Title, Description } from "./helpers/constants";
import { Square, Multipe, Divide } from "./helpers/utils";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import web2 from "./assets/web2.png";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    const sq = Square(5, 2);
    const mp = Multipe(4);
    const di = Divide(0, 4);

    alert(
      "Square:" +
        sq +
        "  Multipe:" +
        mp +
        "  Divide:" +
        di +
        "  A name was submitted: " +
        this.state.value
    );
    event.preventDefault();
  }

  render() {
    const title = "This is the Test Title for Webpack and React App";
    const description = "This is the Test Title for Webpack and React App";
    return (
      <>
        <img src={web2} width="500px" height="281px" alt="" />
        <Title title={title} />
        <Description description={description} />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />{" "}
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div className="col-lg-6">
          <button className="btn-primary" id="submit" name="submit">
            Submit
          </button>
        </div>
      </>
    );
  }
}

export default App;
