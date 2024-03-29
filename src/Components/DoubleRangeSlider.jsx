import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

export default function DoubleRangeSlider() {
  const [value, setValue] = React.useState([500, 2500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: 300,
        "& .MuiSlider-thumb": {
          color: "#d6a217",
        },
        "& .MuiSlider-track": {
          color: "#5a7674",
        },
        "& .MuiSlider-rail": {
          color: "#5a7674",
        },
        "& .MuiSlider-valueLabel": {
          backgroundColor: "#d6a217",
        },
      }}
    >
      <Slider
        getAriaLabel={(index) => (index === 0 ? "0" : "3000")}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
       
        getAriaValueText={valuetext}
        min={0}
        max={3000}
        step={100}
      />
    </Box>
  );
}
