import styles from "./Header.css";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
const useStyles = createUseStyles(styles);

const Header = ({ header }) => {
  const classes = useStyles();
  return (
    <div className={classes.headerWrapper}>
      <Link to="/" className={classes.link}>
        <span className={classes.header}>{header}</span>
      </Link>
      <Link to="/contact" className={classes.link}>
        <span className={classes.sideMenuName}>Contact</span>
      </Link>
      <Link to="/about" className={classes.link}>
        <span className={classes.sideMenuName}>A Propos</span>
      </Link>
    </div>
  );
};

export default Header;
