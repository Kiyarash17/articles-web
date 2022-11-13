import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import desktopImage from "../images/image-web-3-desktop.jpg";
import mobileImage from "../images/image-web-3-mobile.jpg"
import Article from "./articles";
import BottomArticle from "./bottomArticle";

export default function MainPage() {
  return (
    <Grid2>
      <Container>
        <Grid2 className="flex justify-between flex-wrap md:flex-nowrap">
          <Grid2 className="xs:w-full md:w-[69%]">
            <Grid2>
              <Grid2 className="hidden md:block">
                <Image
                  src={desktopImage}
                  alt="mainImage"
                  className="w-full h-auto"
                />
              </Grid2>
              <Grid2 className="md:hidden">
                <Image
                  src={mobileImage}
                  alt="mainImage"
                  className="w-full h-auto"
                />
              </Grid2>
            </Grid2>
            <Grid2 className="flex justify-between mt-5 flex-wrap">
              <Grid2 className="md:flex-1 xs:w-full">
                <Typography variant="h3" className="font-bold mr md:mr-24">
                  The Bright Future of Web 3.0?
                </Typography>
              </Grid2>
              <Grid2 className="w-full md:flex-1 xs:pb-5 md:pb-0 mt-4 md:mt-0">
                <Typography variant="body1" className="text-gray-500 md:mr-10">
                  We dive into the next evolution of the web that claim to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promising?
                </Typography>
                <Button className="block mt-6 bg-red-500 py-2 px-8 text-white rounded-none hover:bg-black">READ MORE</Button>
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 className="md:ml-5 bg-black w-full md:w-[29%] mt-10 md:mt-0">
            <Article />
          </Grid2>
        </Grid2>
        <Grid2>
            <BottomArticle />
        </Grid2>
      </Container>
    </Grid2>
  );
}
