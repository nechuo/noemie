import styles from "./Home.css";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Header from "../../Components/Header/Header";
import Editable from "../../Components/Editable/Editable";
const useStyles = createUseStyles(styles);

const Home = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header
        header={props.siteContent.header}
        isEditMode={props.isEditMode}
        setIsEditMode={props.setIsEditMode}
      />
      {props.siteContent.sections?.map((section, index) => (
        <div className={classes.section} key={index}>
          <div className={classes.sectionName}>
            <Editable isEditMode={props.isEditMode}>{section.name}</Editable>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {section?.experiences?.map((experience, index) => (
              <div className={classes.experience} key={index}>
                <Link
                  to={experience?.name?.replace(" ", "_")}
                  className={classes.link}
                >
                  <Editable isEditMode={props.isEditMode}>
                    <img
                      alt=""
                      className={classes.image}
                      src={`/images/Home/${experience?.imageName}.jpg`}
                    />
                  </Editable>
                  <div className={classes.experienceName}>
                    <Editable isEditMode={props.isEditMode}>
                      {experience?.name}
                    </Editable>
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
