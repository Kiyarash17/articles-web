import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";



export default function Article() {
    return(
        <Grid2 className="bg-black text-white mb-14 h-60">
            <Container>
                <Typography variant="h3" className="mt-6 mb-2 relative text-amber-500 font-bold">NEW</Typography>
                <Grid2 className="border-b-2 border-solid border-gray-500 border-x-0 border-t-0 py-7">
                    <Typography variant="body1" className="font-bold hover:text-amber-500 cursor-pointer">Hydrogen VS Electric Cars</Typography>
                    <Typography variant="subtitle2" className="text-gray-500 mt-3">Will hydrogen-fueled cas ever catch up to EVs?</Typography>
                </Grid2>
                <Grid2 className="border-b-2 border-solid border-gray-500 border-x-0 border-t-0 py-7">
                    <Typography variant="body1" className="font-bold hover:text-amber-500 cursor-pointer">The Downsides of AI Artistry</Typography>
                    <Typography variant="subtitle2" className="text-gray-500 mt-3">What are the possible adverse effects of on-demand AI image generation?</Typography>
                </Grid2>
                <Grid2 className="pt-7">
                    <Typography variant="body1" className="font-bold hover:text-amber-500 cursor-pointer">Is VC Funding Drying Up?</Typography>
                    <Typography variant="subtitle2" className="text-gray-500 mt-3">Private funding by VC firms is down 50% YOY. We take a look at what that means?</Typography>
                </Grid2>
            </Container>
        </Grid2>
    );
}