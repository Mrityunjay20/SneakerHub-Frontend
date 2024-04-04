import React, { useState } from "react";
import { Card, Typography, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function SideBar() {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  return (
    <Card className="h-[120vh] w-full max-w-[20rem] mt-3 p-4 shadow-xl m shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Filter
        </Typography>
      </div>

      <List>
        <div className="border-b border-gray-200 pb-2 mb-2">
          <Typography variant="small" className="text-gray-500 pb-1">
            Gender
          </Typography>
          <ListItem>
            <ListItemPrefix>
              <input type="checkbox" />
            </ListItemPrefix>
            <Typography>Men</Typography>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <input type="checkbox" />
            </ListItemPrefix>
            <Typography>Women</Typography>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <input type="checkbox" />
            </ListItemPrefix>
            <Typography>Kids</Typography>
          </ListItem>
        </div>

        {showCategoryDropdown ? (
          <div className="border-b border-gray-200 pb-2 mb-2  ">
            <Typography variant="small" className="text-gray-500 pb-1">
              Category
            </Typography>
            <div className="max-h-[170px] overflow-y-auto">
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography>Leggings (6248)</Typography>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography>Leggings (6248)</Typography>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography>ghhj (6248)</Typography>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography>Leggings (6248)</Typography>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography>Leggings (6248)</Typography>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography>ghhj (6248)</Typography>
            </ListItem>
            </div>
            
            {/* Add more categories */}
            <div className="mt-2 text-gray-500 cursor-pointer flex items-center" onClick={() => setShowCategoryDropdown(false)}>
              <ChevronUpIcon className="h-4 w-4 mr-1" />
              <Typography variant="small">Show Less</Typography>
            </div>
          </div>
        ) : (
          <div className="border-b border-gray-200 pb-2 mb-2 cursor-pointer" onClick={() => setShowCategoryDropdown(true)}>
            <div className="flex justify-between items-center">
              <Typography variant="small" className="text-gray-500 pb-1">
                Category
              </Typography>
              <ChevronDownIcon className="h-5 w-5" />
            </div>
          </div>
        )}

        <div className="border-b border-gray-200 pb-2 mb-2">
          <Typography variant="small" className="text-gray-500 pb-1">
            Brand
          </Typography>
          <ListItem>
            <ListItemPrefix>
              <input type="checkbox" />
            </ListItemPrefix>
            <Typography>GRACIT (1171)</Typography>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <input type="checkbox" />
            </ListItemPrefix>
            <Typography>TAG 7 (1074)</Typography>
          </ListItem>
          {/* Add more brands */}
        </div>

        <div className="border-b border-gray-200 pb-2 mb-2">
          <Typography variant="small" className="text-gray-500 pb-1">
            Price
          </Typography>
          <ListItem>
            <ListItemPrefix>
              <input type="checkbox" />
            </ListItemPrefix>
            <Typography>Rs. 220 to Rs. 1853 (7231)</Typography>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <input type="checkbox" />
            </ListItemPrefix>
            <Typography>Rs. 1853 to Rs. 3486 (75)</Typography>
          </ListItem>
          {/* Add more price ranges */}
        </div>
      </List>
    </Card>
  );
}
