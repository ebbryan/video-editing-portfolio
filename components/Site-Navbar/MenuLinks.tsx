"use client";
import { useRouter } from "next-nprogress-bar";
import { MenuTypes } from ".";

const MenuLinks = ({ links }: { links: MenuTypes[] }) => {
  const router = useRouter();
  const onButtonClick = (path: string) => router.push(path);

  return links.map((items) => {
    return (
      <button
        key={items.id}
        onClick={() => onButtonClick(items.path)}
        className="cursor-pointer"
      >
        {items.name}
      </button>
    );
  });
};

export default MenuLinks;
