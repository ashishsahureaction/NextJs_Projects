import { useState, useEffect, use } from "react";


const Users=()=>{
    const [users,setUser]=useState([]);
    console.log(users);
    useEffect(()=>{async function fetchUser() {
        const data=await fetch("https://dummyjson.com/users");
    setUser(await data.json());}
    fetchUser()},[]);
        return(
        <div>
<h1>Users</h1>
{users&& users.users &&users.users.map((user)=><li ley={user.id}>{user.firstName}</li>)}
        </div>
    )
} 
export default Users;
