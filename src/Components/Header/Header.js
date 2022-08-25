import styles from "./Header.css";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
const useStyles = createUseStyles(styles);

const Header = ({ header }) => {
  const classes = useStyles();
  return (
    <Link to="/" className={classes.link}>
      <span className={classes.header}>{header}</span>
    </Link>
  );
};

export default Header;
