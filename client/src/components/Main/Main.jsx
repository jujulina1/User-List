import Search from "../Search/Search";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";
import CreateUser from "../CreateUser/CreateUser";
import Section from "../Section/Section";
import { useEffect, useState } from "react";

export default function Main() {

    const [addUser, setAddUser] = useState(false);
    

    const handleSetUser = (data) => {
          setAddUser(data);
    }


 
    
    
    return (
        <main className="main">
             
           <Section setUser = {handleSetUser}/>
         
           {addUser && <CreateUser setUser = {handleSetUser}/>}
     
        </main>
    )
}