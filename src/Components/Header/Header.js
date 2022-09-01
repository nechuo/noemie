import { Button } from "antd";
import { useState } from "react";
import styles from "./Header.css";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import Editable from "../Editable/Editable";
const useStyles = createUseStyles(styles);

const Header = (props) => {
  const classes = useStyles();
  const [isSaveButtonLoading, setIsSaveButtonLoading] = useState(false);

  const handleButtonClicked = () => {
    setIsSaveButtonLoading(true);
    setTimeout(() => {
      props.setIsEditMode(false);
      setIsSaveButtonLoading(false);
      window.location.reload();
    }, 2000);
  };

  return (
    <div className={classes.headerWrapper}>
      <Link to="/" className={classes.link}>
        <Editable isEditMode={props.isEditMode}>
          <span className={classes.header}>{props.header}</span>
        </Editable>
      </Link>
      <Link to="/about" className={classes.link} style={{ marginLeft: "auto" }}>
        <span className={classes.sideMenuName}>A Propos</span>
      </Link>
      <Link to="/contact" className={classes.link}>
        <span className={classes.sideMenuName}>Contact</span>
      </Link>
      {props.isEditMode && (
        <Button
          type="primary"
          onClick={handleButtonClicked}
          loading={isSaveButtonLoading}
          className={classes.saveButton}
        >
          Sauvegarder
        </Button>
      )}
    </div>
  );
};

export default Header;
