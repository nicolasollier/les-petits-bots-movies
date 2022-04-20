import React, { useState } from "react";
import Card from "../../UI/Card/Card";

//Components
import EditIcon from "../../UI/EditIcon/EditIcon";
import FormControl from "../../UI/FormControl/FormControl";
import FormFooter from "../../UI/FormFooter/FormFooter";
import Button from "../../UI/Button/Button";

//Custom classes
import classes from "./MovieName.module.css";

const MovieName = ({ movieName }) => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <Card>
      {!isEditable ? (
        //Displays when component is Editable
        <>
          <EditIcon onClick={() => setIsEditable((prevCheck) => !prevCheck)} />
          <div style={{ padding: "24px" }}>
            <span className={classes.subheading}>Titre</span>
            <p className={classes.movieName}>#{movieName}</p>
          </div>
        </>
      ) : (
        //Displays when component is Non Editable
        <>
          <EditIcon onClick={() => setIsEditable((prevCheck) => !prevCheck)} />
          <FormControl label="Titre" placeholder="Entrez un titre ici..." />
          <FormFooter>
            <Button>Annuler</Button>
            <Button>Enregister</Button>
          </FormFooter>
        </>
      )}
    </Card>
  );
};

export default MovieName;
