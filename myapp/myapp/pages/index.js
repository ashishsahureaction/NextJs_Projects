 import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import Button from "./button"
import'@/styles/Home.module.css'

export default function Home() {
  return (  
    <div>
      <Head><title>Home</title></Head>
<h1>Home Page 1</h1>
<Button/>
<nav> 
  <Image src="/Images/img1.jpg" width="500" height="300" alt="text"></Image>
  <Image src="/Images/ai.png" width={400} height={400} alt="text"></Image>

  <h2>CSS by style JSX</h2>
  <h3 style={{color:"green", backgroundColor:"black"}}>CSS by inline style</h3>
  <style jsx>{`h2{color:red}{backgroundColor:"black"}`}</style>
  <h4>This is global CSS</h4>
  <h5 className="{.pain}">This is module base CSS</h5>
<ul>
  <li><Link href={"/"}>Home</Link></li>
  <li><Link href={"/about"}>About</Link></li>
  <li><Link href="/about">Abo</Link></li>
  <li> <Link href={"/mobile"}>Mobile</Link></li>
  <li> <Link href={"/products/mobile"}>Mobile</Link></li>
  <li> <Link href="/products/mobile">Mob</Link></li>
</ul> 

<ol>
  <li><Link href="/" className="one">One</Link></li>
  <li><Link href="/about">Got to About page</Link></li>
  
</ol> 
<br></br><br></br>
</nav>

    </div>
    )}
    