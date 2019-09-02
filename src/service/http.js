const hostUrl = "http://35.244.106.203:3000/api/";
const service = {
  getCourses: (res, err) => {
    fetch(hostUrl + "course")
      .then(res => res.json())
      .then(result => {
        res(result);
      })
      .catch(error => {
        err(error);
      });
  },

  getCourseById: (res, err, id) => {
    fetch(hostUrl + "course/getCourseByCourseId/" + id)
      .then(res => res.json())
      .then(result => {
        res(result);
      })
      .catch(error => {
        err(error);
      });
  },

  getCoursesByUniId: (res, err, id) => {
    fetch(hostUrl + "course/getCourseBySchoolNum/" + id)
      .then(res => res.json())
      .then(result => {
        res(result);
      })
      .catch(error => {
        err(error);
      });
  },

  getTeachers: (resCallback, errCallback) => {
    fetch(hostUrl + "teacher")
      .then(res => res.json())
      .then(res => {
        resCallback(res);
      })
      .catch(err => {
        errCallback(err);
      });
  },

  getTeacherRating: (resCallback, errCallback, teacherId, currentPage) => {
    fetch(hostUrl + "teacherRating/" + teacherId + "/" + currentPage)
      .then(res => res.json())
      .then(res => {
        resCallback(res);
      })
      .catch(err => {
        errCallback(err);
      });
  },

  getSpecificTeacher: (resCallback, errCallback, teacherName) => {
    fetch(hostUrl + "teacher/" + teacherName)
      .then(res => res.json())
      .then(res => {
        resCallback(res);
      })
      .catch(err => {
        errCallback(err);
      });
  },

  getCourseReview: (res, err, courseId) => {
    fetch(hostUrl + "courseReview/" + courseId)
      .then(response => response.json())
      .then(result => res(result))
      .catch(error => err(error));
  },

  getCourseRating: (res, err, courseId, page) => {
    fetch(hostUrl + "courseRating/" + courseId + "/" + page)
      .then(response => response.json())
      .then(result => res(result))
      .catch(error => err(error));
  },

  postCourseRating: (res, err, data) => {
    fetch(hostUrl + "courseRating", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(result => res(result))
      .catch(error => err(error));
  },

  getForum: (res, err) => {
    fetch(hostUrl + "forum")
      .then(response => response.json())
      .then(result => res(result))
      .catch(error => err(error));
  },

  getThreadsByForumId: (forumId, pageNum, res, err) => {
    fetch(hostUrl + "thread/getThreadsByForumId/" + forumId + '/' + pageNum)
      .then(response => response.json())
      .then(result => res(result))
      .catch(error => err(error));
  },
  getThreadByThreadId:(ThreadId,res,err)=>{
    fetch(hostUrl+"thread/"+ThreadId)
        .then(response => response.json())
        .then(result => res(result))
        .catch(error => err(error))
  },
  postNewThread: (data, res, err) => {
    fetch(hostUrl + "thread", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(result => res(result))
      .catch(error => err(error));
  },
  getForumByForumId: (forumId,res,err)=>{
    fetch(hostUrl+"forum/"+forumId)
        .then(response => response.json())
        .then(result => res(result))
        .catch(error => err(error))
  },
  getThreadNumAndPostNum: (res,err)=>{
    fetch(hostUrl+"general/getThreadNumAndPostNum")
        .then(response => response.json())
        .then(result => res(result))
        .catch(error => err(error))
  },
  PostThreadComment: (data,res,err)=>{
    fetch(hostUrl + "threadComment", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    })
        .then(response => response.json())
        .then(result => res(result))
        .catch(error => err(error));
  },
  getThreadCommentByThreadId: (threadId,res,err)=>{
    fetch(hostUrl+"threadComment/getThreadCommentByThreadId/"+threadId)
        .then(response => response.json())
        .then(result => res(result))
        .catch(error => err(error))
  }
};
export default service;
