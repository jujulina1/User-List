import NoUsers from "../NoUsers/NoUsers";
import Error from "../Error/Error";
import Search from "../Search/Search";
import NoContent from "../NoContent/NoContent";
import Pagination from "../Pagination/Pagination";
import TableRow from "../TableRow/TableRow";
import Table from "../Table/Table";

export default function Section() {

    
    

    return (
        <section className="card users-container">
        {/* <!-- Search bar component --> */}
        <Search />
  
        {/* <!-- Table component --> */}
        <div className="table-wrapper">


          {/* <!-- Overlap components  --> */}
  
          {/* <div className="loading-shade"> */}
          {/* <!-- Loading spinner  --> */}
           {/* <div className="spinner"></div>  */}
  
          {/* No users added yet   */}
          {/* <NoUsers/> */}
  
          {/* <!-- No content overlap component  --> */}
          {/* <NoContent /> */}


          {/* <!-- On error overlap component  --> */}
          {/* <Error /> */}
          {/* </div>  */}
  
         <Table />
        </div>
  
        {/* <!-- New user button  --> */}
        <button className="btn-add btn">Add new user</button>
  
        {/* <!-- Pagination component  --> */}
      <Pagination />
      </section>
  
    )
}