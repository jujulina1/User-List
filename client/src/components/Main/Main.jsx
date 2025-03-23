import Search from "../Search/Search";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";
import Section from "../Section/Section";
import { useEffect, useState } from "react";

export default function Main() {

   

    // useEffect(() => {
    //     fetch(`http://localhost:3030/jsonstore/users`)
    //     .then(res => res.json())
    //     .then(data => setUsers(Object.values(data)))
    // }, [])

    
    
    return (
        <main className="main">
             
           <Section />
           
     
        </main>
    )
}