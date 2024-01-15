import { useRouter } from "next/router";
const Page = ()=> {
    const router=useRouter();
    console.log(router);

    return (
      
        <div><h1>This is user setting page to whome you want to go randomly</h1>
        <h2>username page setting for {router.query.username}</h2>
       
        </div>
      )}
      export default Page ;