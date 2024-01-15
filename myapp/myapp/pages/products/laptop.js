import Link from "next/link"
export default function laptop() {
    return (
      
        <div><h1>Laptop</h1>
        <ul>
  <li><Link href={"/"}>G</Link></li>
  <li><Link href={"/about"}>H</Link></li>
  <li><Link href="/about">I</Link></li>
  <li> <Link href={"/mobile"}>J</Link></li>
  <li> <Link href={"/products/mobile"}>K</Link></li>
  <li> <Link href="/products/mobile">L</Link></li>
</ul> 
        </div>
      )}