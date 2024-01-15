
export default function Home({data}) {
  console.log(data);
  return (
    <>
      <div>
        <h1>Hellooo</h1>
        <h2>{data.title}</h2>
        <h2>{data.id}</h2>
        <p>{data.body}</p>
      </div>
    </>
  )
}
export async function getStaticProps(){
  const res=await fetch("https://jsonplaceholder.typicode.com/posts/1")
  const data=await res.json()
  return{
    props:{ 
      data }
  }
}
