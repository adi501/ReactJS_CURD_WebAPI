import React from 'react';  
import axios from 'axios';  
import '../AdminBrands/Brand.css'
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  

class AddBrand extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
Name:'',
formErrors: {}  
}  
}   

// Valication

handleFormValidation() {    
  const { Name } = this.state;    
  let formErrors = {};    
  let formIsValid = true;    

  //name     
  if (!Name) {    
      formIsValid = false;    
      formErrors["NameErr"] = "Name is required.";    
  }    
  this.setState({ formErrors: formErrors });    
  return formIsValid;    
}
// validation

AddBrand=()=>{  

  if (this.handleFormValidation()) {    
    //alert('You have been successfully registered.')    
    //debugger;
  axios.post('https://localhost:44395/api/Brand/AddorUpdateBrand/', {Name:this.state.Name})  
  .then(json => {  
      debugger;
  if(json.data.status==='Success'){  
    console.log(json.data.status);  
    alert("Data Save Successfully");  
  this.props.history.push('/ListBrands')  
  }  
  else{  
  alert('Data not Saved');  
  //debugger;  
  this.props.history.push('/ListBrands')  
  }  
  })
  

}    


}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
  const { NameErr } = this.state.formErrors;    
    
return ( 

   <div>  
   <center> <h4>Enter Brand Informations</h4>  </center>
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="name" sm={2}>Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter Name" />  
            {NameErr && <div style={{ color: "red", paddingBottom: 10 }}>{NameErr}</div>} 
          
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.AddBrand} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </div>  
);  
}  
}  
   
export default AddBrand;  