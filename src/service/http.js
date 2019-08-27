const hostUrl = 'http://35.244.113.148:3000/api/'
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
    fetch(hostUrl + 'teacher')
      .then(res => res.json())
      .then(res => {
        resCallback(res);
      })
      .then(err => {
        errCallback(err);
      })
  }
};
export default service;
