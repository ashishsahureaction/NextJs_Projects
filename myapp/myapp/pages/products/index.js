import Link from "next/link"
export default function Product() {
    return (
      
        <div><h1>Product</h1>
        <h2>CSS by style JSX</h2>
        <h3 style={{color:"green", backgroundColor:"black"}}>CSS by inline style</h3>
        <style jsx>{`h2{color:red}`}</style>

        <ul>
  <li><Link href={"/"}>R</Link></li>
  <li><Link href={"/about"}>S</Link></li>
  <li><Link href="/about">T</Link></li>
  <li> <Link href={"/mobile"}>U</Link></li>
  <li> <Link href={"/products/mobile"}>V</Link></li>
  <li> <Link href="/products/mobile">W</Link></li>
</ul> 
        </div>
      )}