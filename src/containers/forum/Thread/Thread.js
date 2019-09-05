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
import Pagination from "../../../components/navigation/pagination/ForumPagination/pagination";

class Thread extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      content: "",
      isRedirect: false,
      total: 1,
      skip: 0,
      comments: []
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.IsPosted !== this.props.IsPosted) {
      this.getThreadCommentsHandler(
        queryString.parse(this.props.location.search).id,
        queryString.parse(this.props.location.search).page
      );
    }
    if (this.props.location.search !== nextProps.location.search) {
      this.getThreadCommentsHandler(
        queryString.parse(nextProps.location.search).id,
        queryString.parse(nextProps.location.search).page
      );
    }
  }

  getThreadCommentsHandler = (ThreadId, page) => {
    service.getThreadCommentByThreadId(
      ThreadId,
      page,
      res => {
        if (res.Data.details.length===0){
          if (page !== "1"){
            this.paginationHandler(res.Data.total)
          }
          return;
        }
        this.setState({
          comments: res.Data.details,
          total: res.Data.total,
          skip: res.Data.skip
        });
      },
      err => {
        console.log(err);
      }
    );
  };

  componentDidMount = () => {
    const page = queryString.parse(this.props.location.search).page;
    if (isNaN(page)){
      this.paginationHandler(1)
      return;
    }
    service.getThreadByThreadId(
      queryString.parse(this.props.location.search).id,
      res => {
        this.setState({
          title: res.Data.title,
          author: res.Data.author,
          content: res.Data.content
        },()=>{
          this.getThreadCommentsHandler(
              queryString.parse(this.props.location.search).id,
              queryString.parse(this.props.location.search).page
          );
        });
      },
      err => {
        this.setState({
          isRedirect: true
        });
      }
    );
  };

  paginationHandler = i => {
    let { history, match } = this.props;
    let path = {
      pathname: `/forum/${match.params.forumName}/${match.params.ThreadName}`,
      search: `id=${queryString.parse(this.props.location.search).id}&page=${i}`
    };
    history.push(path);
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
          PostDate={
            queryString.parse(this.props.location.search).id?
            moment(decoder(queryString.parse(this.props.location.search).id)).fromNow()
              :""
          }
        />
        <div className="post-list">
          <ThreadContent
              content={this.state.content}
              Author={this.state.author}
          />
          <h2>Comments</h2>
          {this.state.comments.map((s, index) => {
            return (
              <ThreadComment
                floor={this.state.skip + 1 + index}
                name={s.name}
                key={index}
                content={s.comment}
                postDate={moment(decoder(s._id)).fromNow()}
              />
            );
          })}
          <Pagination
            currentPage={queryString.parse(this.props.location.search).page}
            totalPage={this.state.total}
            prevDisabled={
              Number(queryString.parse(this.props.location.search).page) === 1
            }
            nextDisabled={
              this.state.total ===
              Number(queryString.parse(this.props.location.search).page)
            }
            prev={() => {
              this.paginationHandler(
                Number(queryString.parse(this.props.location.search).page) - 1
              );
            }}
            next={() => {
              this.paginationHandler(
                Number(queryString.parse(this.props.location.search).page) + 1
              );
            }}
            first={() => {
              this.paginationHandler(1);
            }}
            last={() => {
              this.paginationHandler(this.state.total);
            }}
          />

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
  return {
    IsPosted: state.ThreadCommentIsPosted
  };
};

export default connect(mapStateToProps)(Thread);
