import React from "react";
import "./index.css";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

export default function DynamicOptions()
{

}

// class DynamicButtons extends React.Component
// {
//     constructor(props) {
//       super(props)
//       this.state = {
//          formValues: [{ option: ""}]
//        };
//       this.handleSubmit = this.handleSubmit.bind(this)
//     }
//
//     handleChange(i, e) {
//       let formValues = this.state.formValues;
//       formValues[i][e.target.name] = e.target.value;
//       this.setState({ formValues });
//     }
//
//     addFormFields() {
//       this.setState(({
//         formValues: [...this.state.formValues, { option: "" }]
//       }))
//     }
//
//     removeFormFields(i) {
//       let formValues = this.state.formValues;
//       formValues.splice(i, 1);
//       this.setState({ formValues });
//     }
//
//     handleSubmit(event) {
//       event.preventDefault();
//       alert(JSON.stringify(this.state.formValues));
//     }
//
//     render() {
//         return (
//           <form  onSubmit={this.handleSubmit}>
//               {this.state.formValues.map((element, index) => (
//                   <div className="form-inline" key={index}>
//                       <TextField id="outlined-basic" label="Add Option" variant="outlined" type="text" name="pollOp" value={element.name || ""} onChange={e => this.handleChange(index, e)} />
//                       {
//                           index ?
//                               <Button variant="contained" color='error' onClick={() => this.removeFormFields(index)}>Remove</Button>
//                               : null
//                       }
//                   </div>
//               ))}
//               <div className="button-section">
//                   <Button variant="contained" onClick={() => this.addFormFields()}>Add</Button>
//               </div>
//           </form>
//       );
//     }
//   }
// export default DynamicButtons