import React, {Component} from 'react'

const FormHoc = (fileds) =>{
    return WrappedForm =>{
        return class extends Component{
            state = {...fileds};

            InputChangeHandler = (event) => {
                this.setState({
                    [event.target.name]: event.target.value
                })
            }

            SubmitHandler = (event, onSubmit) =>{
                event.preventDefault();
                onSubmit();
            }




            render(){
                return (
                    <WrappedForm
                        {...this.props}
                        onChange={this.InputChangeHandler.bind(this)}
                        onSubmit={this.SubmitHandler.bind(this)}
                        fields={{ ...this.state }}
                    />
                )
            }

        }
    }
};

export default FormHoc


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
