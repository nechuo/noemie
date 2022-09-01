import styles from "./Editable.css";
import { Button } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(styles);

const Editable = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const classes = useStyles();

  const handleOnMouseOver = () => setIsHovering(true);
  const handleOnMouseOut = () => setIsHovering(false);

  return !props.isEditMode ? (
    <div className={classes.root} onMouseLeave={handleOnMouseOut}>
      <div className={classes.border} onMouseOver={handleOnMouseOver}>
        {props.children}
      </div>
      {isHovering && (
        <div className={classes.buttons}>
          <Button icon={<EditOutlined />} className={classes.editButton} />
          <Button
            danger
            icon={<DeleteOutlined />}
            className={classes.deleteButton}
          />
        </div>
      )}
    </div>
  ) : (
    <div className={classes.border}>{props.children}</div>
  );
};

export default Editable;
