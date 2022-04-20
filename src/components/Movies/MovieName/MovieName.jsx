import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import axios from "axios";

//Components
import EditIcon from "../../UI/EditIcon/EditIcon";
import FormControl from "../../UI/FormControl/FormControl";
import FormFooter from "../../UI/FormFooter/FormFooter";
import Button from "../../UI/Button/Button";

//Custom classes
import classes from "./MovieName.module.css";

const MovieName = ({ movieDatas, handleNameChanges }) => {
  const [name, setName] = useState(movieDatas.name);
  const [isEditable, setIsEditable] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleNameChange = (e) => {
    setHasError(false);
    setName(e.target.value);
  };

  const handleCancel = () => {
    setName(movieDatas.name);
    setHasError(false);
    setIsEditable(false);
  };

  const updateMovieName = async () => {
    await axios
      .put(`movies/${movieDatas.id}`, {
        name: name,
        description: movieDatas.description,
      })
      .then((res) => {
        const newMovieDatas = JSON.parse(res.config.data);
        setName(newMovieDatas.name);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();

    //Add validation
    if (name.trim() === "" || name.length > 256) {
      return setHasError(true);
    }
    //Send a PUT Request
    updateMovieName();
    //Lift up the state
    handleNameChanges(name);
    //Return to non editable form
    setIsEditable(false);
  };

  return (
    <Card>
      <form onSubmit={handleNameSubmit}>
        {!isEditable ? (
          //Displays when component is Editable
          <>
            <EditIcon
              onClick={() => setIsEditable((prevCheck) => !prevCheck)}
            />
            <div style={{ padding: "24px" }}>
              <span className={classes.subheading}>Titre</span>
              <p className={classes.movieName}>{name}</p>
            </div>
          </>
        ) : (
          //Displays when component is Non Editable
          <>
            <FormControl
              label="Titre"
              inputPlaceholder="Entrez un titre ici..."
              inputValue={name}
              onInputChange={handleNameChange}
              hasError={hasError}
            />
            <FormFooter>
              <Button onClick={handleCancel}>Annuler</Button>
              <Button disabled={hasError} type="submit">
                Enregister
              </Button>
            </FormFooter>
          </>
        )}
      </form>
    </Card>
  );
};

export default MovieName;
