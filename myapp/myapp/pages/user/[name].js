import { useRouter } from "next/router";
const Dynamic = ()=> {
    const router=useRouter();
    const {query}=useRouter();
    console.log(router);
    return (
          <div><h1>This the dynamic route page for [query.username]</h1>
   <h2>if want to print that user name then we have to use useRouter hook</h2>
   <p>Router is an object that gives us querry paramneter where we can find the 
    user name in the file name as key value pair
    and we can destururred that query.
   </p>
   <h1>This the dynamic route page for {query.name}</h1>
   <h1>Hi, {query.name}</h1>
        </div>
      )}
      export default Dynamic;