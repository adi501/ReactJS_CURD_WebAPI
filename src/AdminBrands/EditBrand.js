import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  
import AddBrand from './AddBrand'; 
  

 
export default class ListBrands extends Component {  
    GotoAddComponent=()=>{  
        this.props.history.push('/AddBrand')  
      } 
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      //debugger;  
      axios.get('https://localhost:44395/api/Brand')  
        .then(response => {  
          this.setState({ business: response.data });  
         // debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
          <h4 align="center">Brands List</h4> 
          <div><button type="button" onClick={this.GotoAddComponent} className="btn btn-primary">Add Brand</button>    </div> 
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Name</th>  
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  