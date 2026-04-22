import MenuLinks from "./MenuLinks";

export type MenuTypes = {
  id: number;
  name: string;
  path: string;
};

const SiteNavbar = () => {
  const menuLinks: MenuTypes[] = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-5 left-0 flex flex-col justify-between items-center w-full p-7 px-10 z-50">
      <div className="flex justify-center items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/10 p-3 w-1/4 rounded-2xl">
        <MenuLinks links={menuLinks} />
      </div>
    </nav>
  );
};

export default SiteNavbar;
