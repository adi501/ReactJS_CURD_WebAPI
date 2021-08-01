
import React from 'react'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './INC/Admin/CSS/Admin.css'
import AddBrand from './AdminBrands/AddBrand';  
import ListBrands from './AdminBrands/ListBrands';  
import EditBrand from './AdminBrands/EditBrand';  


function App() {
  return (
    /*<Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/AddBrand'} className="nav-link">Add Brand</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
          <Route exact path='/AddBrand' component={AddBrand} />  
        </Switch>  
      </div>  
    </Router> */

    <Router>  
    <div className="wrapper">
    
    <nav id="sidebar">
        <ul className="list-unstyled components">
            <li className="active">
                <Link to={'/ListBrands'} className="nav-link">Brands</Link>  
            </li>
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
    <div id="content">
       
        <Switch>  
          <Route exact path='/AddBrand' component={AddBrand} />  
          <Route exact path='/ListBrands' component={ListBrands} />  
          <Route exact path='/EditBrand/edit/:id' component={EditBrand} />  
        </Switch> 
    </div>
</div>
</Router>
  );
}

export default App;
