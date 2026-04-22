"use client";

import { motion, Variants } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { MenuTypes } from ".";

const MenuLinks = ({
  links,
  linkVariants,
}: {
  links: MenuTypes[];
  linkVariants: Variants;
}) => {
  const router = useRouter();
  const path = usePathname();
  const onButtonClick = (path: string) => router.push(path);

  return links.map((items) => (
    <motion.button
      key={items.id}
      onClick={() => onButtonClick(items.path)}
      className="cursor-pointer"
      variants={linkVariants}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      {items.name}
      {path === items.path && (
        <motion.div
          layoutId="active-dot"
          className="w-1 h-1 rounded-full bg-white/70 mx-auto"
        />
      )}
    </motion.button>
  ));
};

export default MenuLinks;
