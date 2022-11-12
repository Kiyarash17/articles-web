import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import desktopImage from "../images/image-web-3-desktop.jpg";
import Article from "./articles";
import BottomArticle from "./bottomArticle";

export default function MainPage() {
  return (
    <Grid2>
      <Container>
        <Grid2 className="flex justify-between">
          <Grid2 className="w-[70%]">
            <Image
              src={desktopImage}
              alt="mainImage"
              className="w-full h-auto"
            />
            <Grid2 className="flex justify-between mt-5">
              <Grid2 className="flex-1">
                <Typography variant="h3" className="font-bold mr-24">
                  The Bright Future of Web 3.0?
                </Typography>
              </Grid2>
              <Grid2 className="flex-1">
                <Typography variant="body1" className="text-gray-500 mr-10">
                  We dive into the next evolution of the web that claim to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promising?
                </Typography>
                <Button className="block mt-6 bg-red-500 py-2 px-8 text-white rounded-none hover:bg-black">READ MORE</Button>
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 className="ml-5 bg-black w-[30%]">
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
