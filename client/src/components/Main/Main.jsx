import Search from "../Search/Search";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";
import CreateUser from "../CreateUser/CreateUser";
import EditUser from "../EditUser/EditUser";
import Section from "../Section/Section";
import { useEffect, useState } from "react";

export default function Main() {

    const [addUser, setAddUser] = useState(false);
    const [editUser, setEditUser] = useState(false);
    

    const handleSetUser = (data) => {
          setAddUser(data);
    }
    

    const handleEditUser = (data) => {
        setEditUser(data)
    }

 
    
    
    return (
        <main className="main">
             
           <Section setUser = {handleSetUser} editUser = {handleEditUser}/>
         
           {addUser && <CreateUser setUser = {handleSetUser}/>}
           {editUser && <EditUser editUser = {handleEditUser}/>}
     
        </main>
    )
}