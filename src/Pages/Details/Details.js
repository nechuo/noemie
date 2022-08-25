import data from "../../data";
import styles from "./Details.css";
import { createUseStyles } from "react-jss";
import Header from "../../Components/Header/Header";
const useStyles = createUseStyles(styles);

const Details = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header header={data.header} />
    </div>
  );
};

export default Details;
