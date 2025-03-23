import Search from "../Search/Search";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";
import CreateUser from "../CreateUser/CreateUser";
import EditUser from "../EditUser/EditUser";
import Info from "../Info/Info";
import Section from "../Section/Section";
import { useEffect, useState } from "react";
import { createUser, getAll } from "../../services/UserService";

export default function Main() {

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState("");
    const [addUser, setAddUser] = useState(false);
    const [editUser, setEditUser] = useState(false);
    const [info, setInfo] = useState(true);

    useEffect(() => {
        getAll()
        .then(data => setUsers(data));
        
     }, [])
    

    const handleSetUser = (data) => {
          setAddUser(data);
    }
    

    const handleEditUser = (data) => {
        setEditUser(data)
    }

    const handleInfo = (data, id) => {
           setInfo(data);
           console.log(id);
           console.log(data);
           setUserId(id)
           
           
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        let data = {
            firstName: form.get('firstName'),
            lastName: form.get('lastName'),
            email: form.get('email'),
            imageUrl: form.get('imageUrl'),
            phoneNumber: form.get('phoneNumber'),
            createdAt: new Date(),
            updatedAt: new Date(),
            address: {
                country: form.get('country'),
                city: form.get('city'),
                street: form.get('street'),
                streetNumber: form.get('streetNumber'),
            }
        }

        console.log(data);
        //Send request
        const res = await createUser(data);
       
        setUsers(state => [...state, res])
        setAddUser(false);

    }
    
    console.log(users)
    return (
        <main className="main">
             
           <Section setUser = {handleSetUser} editUser = {handleEditUser} users = {users} infoClick = {handleInfo}/>
         
           {addUser && <CreateUser setUser = {handleSetUser} onSubmit={onSubmitHandler}/>}
           {editUser && <EditUser editUser = {handleEditUser}/>}
           {info && <Info infoClick = {handleInfo} userId={userId}/>}
     
        </main>
    )
}