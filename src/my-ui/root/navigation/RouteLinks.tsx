import Link from "next/link";


interface RoutesProps {}

export const RouteLinks = ({}: RoutesProps) => {
  return (
    <nav className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-2 ">
      <Link
        href="/about"
        className="hover:text-purple-700 hover:underline "
        // activeClass="text-purple-700 underline"
      >
        About{" "}
      </Link>
      <Link
        href="/listings"
        className="hover:text-purple-700 hover:underline"
        // activeClass="text-purple-700 underline"
      >
        Listings{" "}
      </Link>
      {/* <StyledLink href="/contact" 
    className="hover:text-purple-700 hover:underline" 
    activeClass="text-purple-700 underline" >
        Contact Us </StyledLink> */}
    </nav>
  );
};
