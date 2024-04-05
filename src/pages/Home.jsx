import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CatagoryRow from "../components/ShopRows/CatagoryRow";
import FeaturedRow from "../components/ShopRows/FeaturedRow";


export default function HomePage() {
  return (
    <div className=" mt-3 z-20">
      <Carousel
        transition={{ duration: 1 }}
        className="rounded-3xl h-1/2 w-11/12 mx-auto"
      >
        <div className="relative h-full w-full mx-auto">
          <img
            src="https://krflloghzbpehgzmfnfu.supabase.co/storage/v1/object/public/hsc%20project/jordan-shoes-g8km3zwrx9ty5a9y.jpg"
            alt="image 2"
            className="h-full rounded-2xl w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-1/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl min-w-max md:text-4xl lg:text-5xl"
              >
                Discover Your Sole Style:
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 w-max md:text-lg lg:text-xl opacity-80"
              >
                Elevate every stride and express your unique personality with our diverse range of shoes today!
              </Typography>
              <div className="flex gap-2">
                <Link to="/products">
                  <Button size="lg" color="white">
                    Shop now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://krflloghzbpehgzmfnfu.supabase.co/storage/v1/object/public/hsc%20project/nike-sneakers-illustration-5k-q6%20(1).jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Elevate Your Look!
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-base md:text-lg lg:text-xl"
              >
                Unlock comfort and style with every step. Find your perfect pair
                today!
              </Typography>
              <div className="flex gap-2">
                <Link to="/products">
                  <Button size="lg" color="white">
                    Shop now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://krflloghzbpehgzmfnfu.supabase.co/storage/v1/object/public/hsc%20project/black-background-monochrome-converse-boots-wallpaper-preview.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl min-w-max md:text-4xl lg:text-5xl"
              >
                Stride in Style: Shop Now!
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                From casual kicks to elegant heels, we have shoes for every
                occasion. Explore our collection and step into confidence!
              </Typography>
              <div className="flex gap-2">
                <Link to="/products">
                  <Button size="lg" color="white">
                    Shop now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <FeaturedRow usergender={"male"} />
      <CatagoryRow usergender={"male"} />
      
    </div>
  );
}
