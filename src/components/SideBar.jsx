import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function SideBar() {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  return (
    <Card className="w-1/4 sm:w-1/3 md:w-1/4 lg:w-1/5 mt-3 p-4 shadow-xl m shadow-blue-gray-900/5 overflow-x-auto overflow-y-auto">
      <div className="mb-2 p-4">
        <Typography
          variant="h5"
          color="blue-gray"
          className="text-lg sm:text-base"
        >
          Filter
        </Typography>
      </div>

      <List>
        <div className="border-b border-gray-200 pb-2 mb-2">
          <Typography
            variant="small"
            className="text-gray-500 pb-1 text-sm sm:text-xs"
          >
            Gender
          </Typography>
          <ListItem>
            <ListItemPrefix>
              <input type="checkbox" />
            </ListItemPrefix>
            <Typography variant="small" className="text-sm sm:text-xs">
              Men
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <input type="checkbox" />
            </ListItemPrefix>
            <Typography variant="small" className="text-sm sm:text-xs">
              Women
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <input type="checkbox" />
            </ListItemPrefix>
            <Typography variant="small" className="text-sm sm:text-xs">
              Kids
            </Typography>
          </ListItem>
        </div>

        {/* Brand section */}
        <div className="border-b border-gray-200 pb-2 mb-2">
          <Typography
            variant="small"
            className="text-gray-500 pb-1 text-sm sm:text-xs"
          >
            Brand
          </Typography>
          <ListItem>
            <ListItemPrefix>
              <input type="checkbox" />
            </ListItemPrefix>
            <Typography variant="small" className="text-sm sm:text-xs">
              GRACIT (1171)
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <input type="checkbox" />
            </ListItemPrefix>
            <Typography variant="small" className="text-sm sm:text-xs">
              TAG 7 (1074)
            </Typography>
          </ListItem>
          {/* Add more brands */}
        </div>

        {/* Price section */}
        <div className="border-b border-gray-200 pb-2 mb-2">
          <Typography
            variant="small"
            className="text-gray-500 pb-1 text-sm sm:text-xs"
          >
            Price
          </Typography>
          <ListItem>
            <ListItemPrefix>
              <input type="checkbox" />
            </ListItemPrefix>
            <Typography variant="small" className="text-sm sm:text-xs">
              Rs. 220 to Rs. 1853 (7231)
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <input type="checkbox" />
            </ListItemPrefix>
            <Typography variant="small" className="text-sm sm:text-xs">
              Rs. 1853 to Rs. 3486 (75)
            </Typography>
          </ListItem>
          {/* Add more price ranges */}
        </div>

        {showCategoryDropdown ? (
          <div className="border-b border-gray-200 pb-2 mb-2 max-h-[150px] overflow-y-auto">
            <Typography
              variant="small"
              className="text-gray-500 pb-1 text-sm sm:text-xs"
            >
              Category
            </Typography>
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography variant="small" className="text-sm sm:text-xs">
                Leggings (6248)
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography variant="small" className="text-sm sm:text-xs">
                Leggings (6248)
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography variant="small" className="text-sm sm:text-xs">
                Leggings (6248)
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography variant="small" className="text-sm sm:text-xs">
                Leggings (6248)
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography variant="small" className="text-sm sm:text-xs">
                Leggings (6248)
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography variant="small" className="text-sm sm:text-xs">
                Leggings (6248)
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography variant="small" className="text-sm sm:text-xs">
                Leggings (6248)
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography variant="small" className="text-sm sm:text-xs">
                Leggings (6248)
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography variant="small" className="text-sm sm:text-xs">
                Leggings (6248)
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <input type="checkbox" />
              </ListItemPrefix>
              <Typography variant="small" className="text-sm sm:text-xs">
                Leggings (6248)
              </Typography>
            </ListItem>
            {/* Add more category items */}

            <div
              className="mt-2 text-gray-500 cursor-pointer flex items-center"
              onClick={() => setShowCategoryDropdown(false)}
            >
              <ChevronUpIcon className="h-4 w-4 mr-1" />
              <Typography variant="small" className="text-sm sm:text-xs">
                Show Less
              </Typography>
            </div>
          </div>
        ) : (
          <div
            className="border-b border-gray-200 pb-2 mb-2 cursor-pointer"
            onClick={() => setShowCategoryDropdown(true)}
          >
            <div className="flex justify-between items-center">
              <Typography
                variant="small"
                className="text-gray-500 pb-1 text-sm sm:text-xs"
              >
                Category
              </Typography>
              <ChevronDownIcon className="h-5 w-5" />
            </div>
          </div>
        )}

        {/* Add more list items */}
      </List>
    </Card>
  );
}
