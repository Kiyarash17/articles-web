import { Container, Typography } from "@mui/material";
import Image from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import retroPcs from "../images/image-retro-pcs.jpg";
import laptop from "../images/image-top-laptops.jpg";
import gaming from "../images/image-gaming-growth.jpg";

const items = [
  {
    number: "01",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    image: retroPcs,
  },
  {
    number: "02",
    title: "Top 10 Laptops of 2022",
    description: "Our best pickes for varius needs and budgets.",
    image: laptop,
  },
  {
    number: "03",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    image: gaming,
  },
];

export default function BottomArticle() {
  return (
    <Grid2 className="flex my-16">
      {items.map((val, index) => {
        return (
          <Grid2 key={index} className="flex flex-1 mr-8">
            <Image src={val.image} alt="Article Image" className="w-24 h-auto" />
            <Grid2 className="ml-3">
              <Typography variant="h3" className="text-gray-400">{val.number}</Typography>
              <Typography variant="h6" className="font-bold my-1 hover:text-red-500 cursor-pointer">{val.title}</Typography>
              <Typography variant="body2" className="text-gray-500">{val.description}</Typography>
            </Grid2>
          </Grid2>
        );
      })}
    </Grid2>
  );
}
