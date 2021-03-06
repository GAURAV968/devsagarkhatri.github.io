import React, { Component } from "react";
import "./Education.css";

class Timeline extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.data.map((data1) => (
          <div className="row" key={data1.key}>
            <div className="col-sm-2">
              <div className="list">
                <img src={data1.logo} alt={data1.key} className="edlogo" />
              </div>
            </div>
            <div className="col-sm-10">
              <div className="list">
                <h3>{data1.degree}</h3>

                <h5>
                  <i>{data1.university}</i>
                </h5>
                <h5>{data1.tenure}</h5>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Timeline;
