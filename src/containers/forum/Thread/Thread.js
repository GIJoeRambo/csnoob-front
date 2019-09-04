import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ThreadHeader from "./ThreadHeader/ThreadHeader";
import ThreadContent from "./ThreadContent/ThreadContent";
import ThreadComment from "./ThreadComment/ThreadComment";
import BackButton from "../backButton/backButton";
import queryString from "query-string";
import { Redirect } from "react-router-dom";
import service from "../../../service/http";
import ThreadCommentTextPane from "./ThreadCommentTextPane/ThreadCommentTextPane";
import decoder from "../../../util/Decoder";
import { connect } from "react-redux";
import moment from "moment";

class Thread extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      content: "",
      isRedirect: false,
      comments: []
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.IsPosted !== this.props.IsPosted) {
      this.getThreadCommentsHandler(
        queryString.parse(this.props.location.search).id
      );
    }
  }

  getThreadCommentsHandler = ThreadId => {
    service.getThreadCommentByThreadId(
      ThreadId,
      res => {
        this.setState({
          comments: res.Data
        });
      },
      err => {
        console.log(err);
      }
    );
  };

  componentDidMount = () => {
    service.getThreadByThreadId(
      queryString.parse(this.props.location.search).id,
      res => {
        this.setState({
          title: res.Data.title,
          author: res.Data.author,
          content: res.Data.content
        });
      },
      err => {
        this.setState({
          isRedirect: true
        });
      }
    );
    this.getThreadCommentsHandler(
      queryString.parse(this.props.location.search).id
    );
  };

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/forum" />;
    }
    return (
      <div className="col-large push-top">
        <Helmet>
          <style>{"body { background-color: #F6F8FF; }"}</style>
        </Helmet>
        <BackButton click={() => this.props.history.goBack()} />
        <ThreadHeader
          title={this.state.title}
          author={this.state.author}
          replies={this.state.comments.length}
          PostDate={moment(
            decoder(queryString.parse(this.props.location.search).id)
          ).fromNow()}
        />
        <div className="post-list">
          <ThreadContent content={this.state.content} />
          <h2>Comments</h2>
          {this.state.comments.map((s, index) => {
            return (
              <ThreadComment
                floor={index + 1}
                name={s.name}
                key={index}
                content={s.comment}
                postDate={moment(decoder(s._id)).fromNow()}
              />
            );
          })}

          <div>
            <h2>Write the comment</h2>
            <ThreadCommentTextPane
              threadId={queryString.parse(this.props.location.search).id}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    IsPosted: state.ThreadCommentIsPosted
  };
};

export default connect(mapStateToProps)(Thread);
