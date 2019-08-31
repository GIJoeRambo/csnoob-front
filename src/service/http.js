const hostUrl = "http://35.244.113.148:3000/api/";
const service = {
  getCourse: (res, err) => {
    fetch(hostUrl + "course")
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
    fetch(hostUrl + 'teacherRating/' + teacherId + '/' + currentPage)
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
    fetch(hostUrl + "thread/" + forumId + '/' + pageNum)
      .then(response => response.json())
      .then(result => res(result))
      .catch(error => err(error))
  },

  postNewThread: (data, res, err) => {
    fetch(hostUrl + "thread", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
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
  }


};
export default service;
