import React from "react";
import personLogo from "../../../../assets/images/forum_thread/Lego.png";
import "./ThreadContent.css";
class ThreadContent extends React.Component {
  render() {
    return (
      <div className="post">
        <div className="user-info">
          <div style={{ color: "#57AD8D" }} className="user-name">
            {this.props.Author}
          </div>

          <div>
            <img className="avatar-large" src={personLogo} alt="lego" />
          </div>

          <div>Author</div>
        </div>
        <div
          className="post-content"
          style={{ whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        />
      </div>
    );
  }
}

export default ThreadContent;
