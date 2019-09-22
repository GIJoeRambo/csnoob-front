import React, { Component } from "react";

const FormHoc = fields => {
  return WrappedForm => {
    return class extends Component {
      state = { ...fields };

      InputChangeHandler = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

      editorOnChange = (event, editor) => {
        const data = editor.getData();
        this.setState({ content: data });
      };

      SubmitHandler = (event, onSubmit) => {
        event.preventDefault();
        onSubmit();
      };

      reset = () => {
        Object.keys(this.state).forEach(async key => {
          await this.setState({ [key]: "" });
        });
      };

      render() {
        return (
          <WrappedForm
            {...this.props}
            onChange={this.InputChangeHandler.bind(this)}
            editorOnChange={this.editorOnChange.bind(this)}
            onSubmit={this.SubmitHandler.bind(this)}
            reset={this.reset.bind(this)}
            fields={{ ...this.state }}
          />
        );
      }
    };
  };
};

export default FormHoc;

// const Data = ({onSubmit,onChange,fields}) =>{
//     const handleSubmit = event =>{
//         onSubmit(event,()=>{
//             console.log(fields.age)
//         })
//     }
//     return (
//         <div>
//             <input
//                 value={fields.age}
//                 name="age"
//                 onChange={onChange}
//             />
//             <input
//                 value={fields.name}
//                 name="name"
//                 onChange={onChange}
//             />
//             <button onClick={handleSubmit}>confirm</button>
//         </div>
//     )
// }
//
// export default Form({name:"oliver",age:"10"})(Data)
