export const galleryHeader = {
  textStyle: "header",
  textAlign: "center",
  pb: 3,
};

export const gridCards = {
  gridTemplateColumns: ["auto", "repeat(auto-fit, minMax(150px, 1fr))"],
  alignItems: "center",
  minH: "calc(100vh - 230px)", // 70px header, 70px footer, 30px Paginate, 60px Searchbar // Total 230px
  gap: "20px",
  pb: "20px",
};

export const scrollbar1 = {
  "::-webkit-scrollbar": {
    width: "7px",
    height: "5px",
  },

  "::-webkit-scrollbar-track": {
    borderRadius: "8px",
    backgroundColor: "#e7e7e7",
    border: "1px solid #cacaca",
  },

  "::-webkit-scrollbar-thumb": {
    borderRadius: "8px",
    backgroundColor: "#d55959",
  },
};
