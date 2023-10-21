import Image from "next/image";
import Link from "next/link";

const Nav = ({ centerIcon = false }) => {
  return (
    <nav className={`${centerIcon? "flex-center" : "flex-between"} w-full mb-4 mt-4 pt-3`}>
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/awba-logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </Link>
      {/* <div className="flex">
        <button type="button" className="mt-5 w-full black_btn">
          Export CSV
        </button>
      </div> */}
    </nav>
  );
};

export default Nav;
