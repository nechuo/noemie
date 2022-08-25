import styles from "./About.css";
import { createUseStyles } from "react-jss";
import Header from "../../Components/Header/Header";
const useStyles = createUseStyles(styles);

const About = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header header={props.header} />
      <div className={classes.about}>
        <img alt="" className={classes.image} src="/images/about.jpg" />
      </div>
      <div className={classes.about}>
        <div className={classes.description}>{props.about}</div>
      </div>
    </div>
  );
};

export default About;
