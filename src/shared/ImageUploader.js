export default class UploadAdapter {
  loader;
  constructor(loader) {
    this.loader = loader;
  }

  upload = () => {
    return this.loader.file.then(
      file =>
        new Promise((resolve, reject) => {
          const myReader = new FileReader();
          myReader.onloadend = () => {
            resolve({ default: myReader.result });
          };
          myReader.readAsDataURL(file);
        })
    );
  };
}
