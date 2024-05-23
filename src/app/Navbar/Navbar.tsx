import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export default function Navbar() {
  return(
    <div className="bg-base-100">
      <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            <Image src={logo} height={120} width={120} alt="Lumière Luxe & Co. logo" />
            Lumière Luxe & Co.
          </Link>
        </div>
      </div>
    </div>
  )
}