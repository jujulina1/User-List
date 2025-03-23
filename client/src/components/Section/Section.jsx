import NoUsers from "../NoUsers/NoUsers";
import Error from "../Error/Error";
import Search from "../Search/Search";
import NoContent from "../NoContent/NoContent";
import Pagination from "../Pagination/Pagination";
import TableRow from "../TableRow/TableRow";
import Table from "../Table/Table";
import { useState } from "react";

export default function Section({
    setUser,
    editUser,
    users,
    infoClick
}) {
    console.log(users);
    
    const [spinner, setSpinner] = useState(false);

    return (

       <section className="card users-container">
        {/* <!-- Search bar component --> */}
        <Search />
  
        {/* <!-- Table component --> */}
        <div className="table-wrapper">


          {/* <!-- Overlap components  --> */}
  
          {/* <div className="loading-shade"> */}
          {/* <!-- Loading spinner  --> */}
          {spinner && <div className="spinner"></div>}
         
  
          {/* No users added yet   */}
          {/* <NoUsers/> */}
  
          {/* <!-- No content overlap component  --> */}
          {/* <NoContent /> */}


          {/* <!-- On error overlap component  --> */}
          {/* <Error /> */}
          {/* </div>  */}
  
         <Table editUser = {editUser} users = {users} infoClick = {infoClick}/>
        </div>
  
        {/* <!-- New user button  --> */}
        <button className="btn-add btn" onClick={() => setUser(true)}>Add new user</button>
  
        {/* <!-- Pagination component  --> */}
      <Pagination />
      </section>

      
  
    )
}