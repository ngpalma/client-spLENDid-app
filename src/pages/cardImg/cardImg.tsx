import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import { QuiltedImageListProps } from "../../types";
import { themePalette } from "../../config/theme.config";

const QuiltedImageList: React.FC<QuiltedImageListProps> = ({ itemData }) => {
  // Seteo de imagen responsive -> mejor calidad de imagen
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <ImageList
        sx={{
          width: "100%",
          height: "100%",
          border: `2px solid ${themePalette.BORDERS}`,
        }}
        variant="quilted"
        cols={3}
        rowHeight={90}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.main ? 2 : 1} // Set bigger cols for main images
            rows={item.main ? 2 : 1} // Set bigger rows for main images
          >
            <img
              {...srcset(item.img, 121, item.main ? 2 : 1, item.main ? 2 : 1)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          //celeste
          background: "rgba(33, 154, 157, 0.3)",
          // naranja
          // background: "rgba(235, 124, 73, 0.3)",
          // amarillo
          // background: "rgba(242, 207, 102, 0.3)",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default QuiltedImageList;

// import React from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import { QuiltedImageListProps } from "../../types";
// import { themePalette } from "../../config/theme.config";

// const QuiltedImageList: React.FC<QuiltedImageListProps> = ({ itemData }) => {
//   // Seteo de imagen responsive -> mejor calidad de imagen
//   function srcset(image: string, size: number, rows = 1, cols = 1) {
//     return {
//       src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//       srcSet: `${image}?w=${size * cols}&h=${
//         size * rows
//       }&fit=crop&auto=format&dpr=2 2x`,
//     };
//   }

//   return (
//     <ImageList
//       sx={{
//         width: "100%",
//         height: "100%",
//         border: `2px solid ${themePalette.BORDERS}`,
//       }}
//       variant="quilted"
//       cols={3}
//       rowHeight={90}
//     >
//       {itemData.map((item) => (
//         <ImageListItem
//           key={item.img}
//           cols={item.main ? 2 : 1} // Set bigger cols for main images
//           rows={item.main ? 2 : 1} // Set bigger rows for main images
//         >
//           <img
//             {...srcset(item.img, 121, item.main ? 2 : 1, item.main ? 2 : 1)}
//             alt={item.title}
//             loading="lazy"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// };

// export default QuiltedImageList;
