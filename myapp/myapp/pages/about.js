import Link from "next/link"
import Head from "next/head"
export default function About() {
    return (
     <div><hi>About page</hi>
     <Head><title>About</title></Head>
     <ul>
  <li><Link href={"/"}>A</Link></li>
  <li><Link href={"/about"}>B</Link></li>
  <li><Link href="/about">C</Link></li>
  <li> <Link href={"/mobile"}>D</Link></li>
  <li> <Link href={"/products/mobile"}>E</Link></li>
  <li> <Link href="/products/mobile">F</Link></li>
</ul> 
     </div>)} 