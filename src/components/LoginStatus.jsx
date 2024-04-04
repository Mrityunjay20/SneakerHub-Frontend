import React from 'react';
import { Alert } from "@material-tailwind/react";


export default function LoginStatusCard({ status }) {
  return (
      <div className="flex max-w-max text-center mx-auto absolute top-3 flex-col gap-2">
        {status ? (
          <Alert color="blue">Signin Successful!</Alert>
        ) : (
          <Alert color="red">Process failed! Please try with correct email and password.</Alert>
        )}
      </div>
  );
}
