import React, { Component } from "react";
import Disk from "./Disk.js";
import "./Preview.scss";

class Preview extends Component {
  render() {
    const item = this.props.app;

    return (
      <div className="ps5-preview ps5-animate-from-bottom" key={item.label}>
        <div>
          {item.logo && <img src={item.logo} alt={item.label} />}

          {item.title && <h2>{item.title}</h2>}

          {item.text && <p>{item.text}</p>}

          {item.youtube && (
            <div className="ps5-btn-group">
              <a
                href="#play"
                className="ps5-btn ps5-btn-lg ps5-btn-primary"
                onClick={() =>
                  this.props.onClick({
                    type: "youtube",
                    element: item.youtube,
                  })
                }
              >
                Play
              </a>

              {/* <a
                href="#more"
                className="ps5-btn ps5-btn-mono ps5-btn-lg ps5-btn-primary"
                onClick={() => this.props.onClick("more")}
              >
                <i className="material-icons">more_horiz</i>
              </a> */}
            </div>
          )}
        </div>

        {item.purchase && <Disk href={item.purchase} item={item} hover="mid" />}
      </div>
    );
  }
}

export default Preview;
