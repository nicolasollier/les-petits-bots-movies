import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import axios from "axios";

//Components
import EditIcon from "../../UI/EditIcon/EditIcon";
import InputTextArea from "../../UI/InputTextArea/InputTextArea";
import FormControl from "../../UI/FormControl/FormControl";
import FormFooter from "../../UI/FormFooter/FormFooter";
import Button from "../../UI/Button/Button";

//Custom classes
import classes from "./MovieDescription.module.css";

const MovieDescription = ({ movieDatas, handleDescriptionChanges }) => {
  const [description, setDescription] = useState(movieDatas.description);
  const [isEditable, setIsEditable] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleDescriptionChange = (e) => {
    setHasError(false);
    setDescription(e.target.value);
  };

  const handleCancel = () => {
    setDescription(movieDatas.description);
    setHasError(false);
    setIsEditable(false);
  };

  const updateMovieDescription = async () => {
    await axios
      .put(`movies/${movieDatas.id}`, {
        name: movieDatas.name,
        description: description,
      })
      .then((res) => {
        const newMovieDatas = JSON.parse(res.config.data);
        setDescription(newMovieDatas.description);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const handleDescriptionSubmit = (e) => {
    e.preventDefault();

    //Add validation
    if (description.trim() === "" || description.length > 2000) {
      return setHasError(true);
    }
    //Send a PUT Request
    updateMovieDescription();
    //Lift up the state
    handleDescriptionChanges(description);
    //Return to non editable form
    setIsEditable(false);
  };

  return (
    <Card>
      <form onSubmit={handleDescriptionSubmit}>
        {!isEditable ? (
          //Displays when component is Editable
          <>
            <EditIcon
              onClick={() => setIsEditable((prevCheck) => !prevCheck)}
            />
            <div style={{ padding: "24px" }}>
              <span className={classes.subheading}>Description</span>
              <p
                style={{ maxWidth: "546px" }}
                className={classes.movieDescription}
              >
                {description}
              </p>
            </div>
          </>
        ) : (
          //Displays when component is Non Editable
          <>
            <FormControl label="Description">
              <InputTextArea
                inputPlaceholder="Entrez une description ici..."
                inputValue={description}
                onInputChange={handleDescriptionChange}
                hasError={hasError}
              />
            </FormControl>

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

export default MovieDescription;
