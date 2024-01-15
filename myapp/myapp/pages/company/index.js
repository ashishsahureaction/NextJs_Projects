import { useRouter } from "next/router";
const Comapny = ()=> {
    const router=useRouter();
    return (
      
        <div><h1>Comapny </h1>
        <button onClick={e=>router.push(`/company/${router.query.username}/settings`)}>Open setting page</button>
        <button onClick={e=>router.push("/")}>Go to Home Page</button>
        <button onClick={e=>router.push("/company/{router.query.username}/settings")}>setting page</button>
        <button onClick={e=>router.replace("/")}>Replace Home Page</button>
        <button onClick={e=>router.reload()}>Relaod the page</button>
        </div>
      )}
      export default Comapny ;