import React, { useState } from "react";
import Image from "next/image";
import openMenu from "../../images/icon-menu.svg";
// import closeMenu from "../../images/icon-menu-close.svg";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Drawer from "../drawer/mobileDrawer";

export default function MobileHeader() {
    const [open, setOpen] = useState<boolean>(false);

    return(
        <Grid2>
            <Button onClick={() => setOpen(!open)}>
                <Image src={openMenu} alt="hamburger Menu"/>
            </Button>
            <Drawer open={open} setOpen={setOpen} />
        </Grid2>
    );
}