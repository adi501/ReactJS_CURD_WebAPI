import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  

class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
    DeleteBrand= () =>{  
     axios.delete('https://localhost:44395/api/Brand/DeleteBrand?id='+this.props.obj.id)  
    .then(json => {  
    if(json.data.status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    })  
    }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.name}  
          </td>  
          <td>  
          <Link to={"EditBrand/edit/"+this.props.obj.id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteBrand} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
export default Table; 