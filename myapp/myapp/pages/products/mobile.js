import Link from "next/link"
export default function Mobile() {
    return (
      
        <div><h1>Mobile</h1>
        <ul>
  <li><Link href={"/"}>G</Link></li>
  <li><Link href={"/about"}>M</Link></li>
  <li><Link href="/about">N</Link></li>
  <li> <Link href={"/mobile"}>O</Link></li>
  <li> <Link href={"/products/mobile"}>P</Link></li>
  <li> <Link href="/products/mobile">Q</Link></li>
</ul> 
        </div>
      )}