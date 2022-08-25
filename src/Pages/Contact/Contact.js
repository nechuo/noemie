import styles from "./Contact.css";
import { createUseStyles } from "react-jss";
import Header from "../../Components/Header/Header";
const useStyles = createUseStyles(styles);

const Contact = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header header={props.header} />
      <div className={classes.contact}>Email: {props.contact}</div>
    </div>
  );
};

export default Contact;
