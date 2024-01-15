import { useRouter } from "next/router";
const User = ()=> {

     // const router=useRouter();
    //  const {query}=useRouter();
     // console.log(router);
    const router=useRouter();
    const newuser=router.query.user;

    return (
      
        <div><h1>This is Userfile for {newuser}</h1>
       
        </div>
      )}
      export default User;