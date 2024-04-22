import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function SimpleCard() {
    return (
      <Card className="my-32 w-96 mx-auto">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Now Check Your favorite products in 3D!
          </Typography>
          <Typography>
          Experience seamless interaction with 3D objects on our ecommerce platform. 
          Explore products from every angle, zoom in for intricate details, and visualize dimensions accurately. 
          Enhance your shopping journey with immersive 3D interaction, bringing products to life like never before.
          </Typography>
        </CardBody>
        
      </Card>
    );
  }