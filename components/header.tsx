import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import logo from "/images/logo.svg";
import MobileHeader from "../components/header/mobileHeader";

const header = [
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

export default function Header() {
  return (
    <Grid2>
      <Container>
        <Grid2 className="flex my-7 justify-between items-center">
          <Grid2>
            <Image src={logo} alt="logo" />
          </Grid2>
          <Grid2 className="hidden md:block">
            <List className="flex">
              {header.map((val, index) => {
                return (
                  <Link href={val.href} key={index} className="hover:text-red-500">
                    <ListItem>
                      <Typography variant="body1">{val.title}</Typography>
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </Grid2>
          <Grid2 className="block md:hidden">
            <MobileHeader />
          </Grid2>
        </Grid2>
      </Container>
    </Grid2>
  );
}
