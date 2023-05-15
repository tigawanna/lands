import { StyledLink, useLocation } from "rakkasjs";

interface breadcrumbsProps {}

const BreadCrumbs = ({}: breadcrumbsProps) => {
  const location = useLocation();
  const locations = location.current.pathname.split("/");

  const getNewPathname = (parts: string[], index: number) => {
    // const new_arr = parts.slice(0, index)
    let new_path = "";
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        new_path += parts[i];
      } else {
        new_path += parts[i] + "/";
      }
    }
    return new_path;
  };

  // console.log("oations ==== ", loc)
  return (
    <nav className="w-fit h-full flex items-center justify-center">
      {locations.map((item, index) => {
        // console.log("index", index, "pahth prams > ", getNewPathname(locations, index), "item", item)

        if (locations.length - 1 === index || index === 0) {
          return (
            <StyledLink
              key={index}
              href={location.current.origin + getNewPathname(locations, index)}
              activeStyle={{ color: "purple" }}
              className="w-fit"
            >
              {item}
            </StyledLink>
          );
        }

        return (
          <StyledLink
            key={index}
            href={location.current.origin + getNewPathname(locations, index)}
            activeStyle={{ color: "purple" }}
            className="w-fit"
          >
            {item}
            {">"}
          </StyledLink>
        );
      })}
    </nav>
  );
};

export default BreadCrumbs;
