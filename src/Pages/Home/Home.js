import styles from "./Home.css";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(styles);

const Home = () => {
  const classes = useStyles();
  const data = {
    header: "Noemie",
    sections: [
      {
        name: "Section 1",
        experiences: [{ imageName: "1.jpg", name: "Experience 1" }],
      },
      {
        name: "Section 2",
        experiences: [
          { imageName: "1.jpg", name: "Experience 2" },
          { imageName: "1.jpg", name: "Experience 3" },
        ],
      },
      {
        name: "Section 3",
        experiences: [
          { imageName: "1.jpg", name: "Experience 4" },
          { imageName: "1.jpg", name: "Experience 5" },
          { imageName: "1.jpg", name: "Experience 6" },
          { imageName: "1.jpg", name: "Experience 7" },
        ],
      },
    ],
  };

  return (
    <div className={classes.root}>
      <span className={classes.header}>{data.header}</span>
      {data.sections.map((section, index) => (
        <div key={index}>
          <div className={classes.section}>{section.name}</div>
          <div style={{ display: "flex" }}>
            {section.experiences.map((experience, index) => (
              <div className={classes.experience} key={index}>
                <img
                  alt=""
                  className={classes.image}
                  src={`/images/Home/${experience.imageName}`}
                />
                <div className={classes.experienceName}>{experience.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
