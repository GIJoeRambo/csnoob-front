const service = {
  getCourse: (res, err) => {
    fetch("http://35.244.113.148:3000/api/course")
      .then(res => res.json())
      .then(result => {
        res(result);
      })
      .catch(error => {
        err(error);
      });
  }
};
export default service;
