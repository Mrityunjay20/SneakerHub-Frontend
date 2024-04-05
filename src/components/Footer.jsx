import { Typography } from "@material-tailwind/react";
 
export function SimpleFooter() {
  return (
    <footer className="flex bg-gray-900  mt-6 px-5 w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal  text-gray-300">
        &copy; Built By
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal text-gray-300 transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Mrityunjay Shrivastava
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal  text-gray-300 transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Rishi Singh
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal  text-gray-300 transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Karan Kumar
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal  text-gray-300 transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Ashish Kumar
          </Typography>
        </li>
      </ul>
    </footer>
  );
}