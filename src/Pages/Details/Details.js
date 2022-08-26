import styles from "./Details.css";
import { Player } from "video-react";
import { createUseStyles } from "react-jss";

import Header from "../../Components/Header/Header";
const useStyles = createUseStyles(styles);

const Details = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header header={props.header} />
      <div className={classes.detail}>
        <div className={classes.description}>
          <div className={classes.experienceName}>{props.experience.name}.</div>
          {props.experience.description}
        </div>
        <div className={classes.sideImages}>
          {props.experience.sideImages?.map((image) => (
            <img
              alt=""
              className={classes.sideImage}
              src={`/images/Home/${image.imageName}.jpg`}
            />
          ))}
        </div>
      </div>
      {props.experience.video && (
        <div className={classes.video}>
          <div style={{ width: 1300 }}>
            <Player src={`${props.experience.video.videoName}.mp4`} />
          </div>
        </div>
      )}
      <div className={classes.bottomImages}>
        {props.experience.bottomImages?.map((image) => (
          <img
            alt=""
            className={classes.bottomImage}
            src={`/images/Home/${image.imageName}.jpg`}
          />
        ))}
      </div>
    </div>
  );
};

export default Details;
