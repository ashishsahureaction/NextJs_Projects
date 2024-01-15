export default function fetch({data}){
    console.log(data)
return(
    <div>Fetch<h1></h1>

<h1>{data}</h1>

    </div>
)

}
export async function getStaticProps(){
    const res=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data=await res.json();
    return{
      props:{   
        data }
    }
  }