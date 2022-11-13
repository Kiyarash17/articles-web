import { Drawer, Link, List, ListItemButton, Typography, Box, Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import closeMenu from "../../images/icon-menu-close.svg"
import React from "react";



type Props = {
  open: any;
  setOpen: any;
};

export default function MobileDrawer(props: Props) {
  const items = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "New",
      href: "#",
    },
    {
      title: "Popular",
      href: "#",
    },
    {
      title: "Trending",
      href: "#",
    },
    {
      title: "Categories",
      href: "#",
    },
  ];

  const drawer = (
    <div className="w-72">
        <Button className="w-full flex justify-end pr-5 pt-5 mb-16" onClick={() => props.setOpen(false)}>
          <Image src={closeMenu} alt="Menu"/>
        </Button>
        <List>
            {items.map((val, index) => {
                return(
                    <Link href={val.href} key={index} className="no-underline">
                        <a>
                            <ListItemButton>
                                <Typography variant="h4" className="p-4 text-black">{val.title}</Typography>
                            </ListItemButton>
                        </a>
                    </Link>
                );
            })

            }
        </List>
    </div>
  );

  return (
    <Box>
        <Drawer open={props.open} onClose={() => props.setOpen(false)} anchor="right" variant="temporary">
            {drawer}
        </Drawer>
    </Box>
  );
}
