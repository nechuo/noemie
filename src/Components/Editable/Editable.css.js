const iconSize = 29;

const styles = {
  root: {
    display: "flex",
    "&:hover": {
      boxShadow: "0px 0px 0px 2px blue inset",
    },
    width: "fit-content",
  },
  buttons: {},
  border: {
    border: "3px solid transparent",
  },
  button: {
    width: iconSize,
    height: iconSize,
    position: "absolute",
  },
  editButton: {
    extend: "button",
    color: "blue",
  },
  deleteButton: {
    extend: "button",
    marginLeft: iconSize,
  },
};

export default styles;
