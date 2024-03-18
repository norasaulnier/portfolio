import Link from "next/link";
import Image from "next/image";
import keyboard from 'public/keyboard.png';

const Navbar = () => {
  return (
    <>
      <div className="w-full py-2 bg-primary-nav sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Image src={keyboard} width={150} height={75} alt='Image of a keyboard'/>
            <ul className="hidden md:flex gap-x-6 text-text-dark text-2xl">
              <li>
                <Link href="/">
                  <h2>About</h2>
                </Link>
              </li>
              <li>
                <Link href="/resume">
                  <p>Résumé</p>
                </Link>
              </li>
              <li>
                <Link href="/examples">
                  <p>Examples</p>
                </Link>
              </li>
              <li>
                <Link href="/art">
                  <p>Art</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;