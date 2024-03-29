// import React from "react";

// //Component
// import DottedMap from "dotted-map/without-countries";

// function MapDotted() {
//     const mapJsonString = '{ "width": 800, "height": 600, "grid": "diagonal" }';

//   const map = new DottedMap({ map: JSON.parse(mapJsonString) });

//   map.addPin({
//     lat: 40.73061,
//     lng: -73.935242,
//     svgOptions: { color: "#d6ff79", radius: 0.4 },
//   });

//   const svgMap = map.getSVG({
//     radius: 0.22,
//     color: "#423B38",
//     shape: "circle",
//     backgroundColor: "#020300",
//   });

//   return (
//     <>
//       <div>
//         <img srcDoc={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`} />
//       </div>
//     </>
//   );
// }

// export default MapDotted;
