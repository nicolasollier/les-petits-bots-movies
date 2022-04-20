import React, { useState } from "react";
import Card from "../../UI/Card/Card";

//Components
import EditIcon from "../../UI/EditIcon/EditIcon";

//Custom classes
import classes from "./MovieName.module.css";

const MovieName = ({ movieName }) => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <Card>
      {!isEditable ? (
        //Displays when component is Editable
        <div>
          <EditIcon onClick={() => setIsEditable((prevCheck) => !prevCheck)} />
          <div className={classes["form-controls"]}>
            <span className={classes.subheading}>Titre</span>
            <p className={classes.movieName}>#{movieName}</p>
          </div>
        </div>
      ) : (
        //Displays when component is Non Editable
        <div>
          <EditIcon onClick={() => setIsEditable((prevCheck) => !prevCheck)} />
          <div className={classes["form-controls"]}>
            <span className={classes.subheading__onEdit}>Titre</span>
            <input type="text" />
          </div>
        </div>
      )}
    </Card>
  );
};

export default MovieName;
