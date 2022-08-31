import styles from "./Home.css";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Header from "../../Components/Header/Header";
const useStyles = createUseStyles(styles);

const Home = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header header={data.header} />
      {data.sections?.map((section, index) => (
        <div className={classes.section} key={index}>
          <div className={classes.sectionName}>{section.name}</div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {section?.experiences?.map((experience, index) => (
              <div className={classes.experience} key={index}>
                <Link
                  to={experience?.name?.replace(" ", "_")}
                  className={classes.link}
                >
                  <img
                    alt=""
                    className={classes.image}
                    src={`/images/Home/${experience?.imageName}.jpg`}
                  />
                  <div className={classes.experienceName}>
                    {experience?.name}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
