import { Chip, Typography } from "@material-tailwind/react";
import ShoeExport from "../components/three/Threescene";

export default function SingleShoeDetail() {
  return (
    <>
      <ShoeExport />

      <div className="w-full text-center bg-gray-300 -mt-48 p-6">
        <Typography variant="h1" color="dark-gray">
          Nike Jordan 1's
        </Typography>
      </div>
      <div className="w-full bg-gray-400 flex justify-center">
        <Typography className="w-1/4 mx-32 py-5 text-justify" variant="lead">
          Designed in collaboration with basketball legend Michael Jordan, the
          Nike Jordan 1 was first introduced in 1985, revolutionizing the
          sneaker industry and birthing a cultural phenomenon. Decades later,
          its legacy remains unwavering, making it a must-have addition to any
          sneaker collection.
        </Typography>
        <Typography className="w-1/4 mx-32 py-5 text-justify" variant="lead">
          Beyond its performance attributes, the Nike Jordan 1 is a symbol of
          self-expression and individuality. Available in a myriad of colorways
          and collaborations, each iteration tells a unique story, allowing you
          to showcase your personality and style effortlessly.
        </Typography>
      </div>
    </>
  );
}
