const SiteNavbar = () => {
  const menuLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 flex flex-col justify-between items-center w-full p-7 px-10 ">
      <div className="flex justify-between items-center gap-4">
        {menuLinks.map((items) => {
          return <button key={items.id}>{items.name}</button>;
        })}
      </div>
    </nav>
  );
};

export default SiteNavbar;
