import { Button, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { db } from "./firebase-config";

function Todo({ todo, inprogress, id }) {
  const toggleInProgress = () => {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  };

  const deleteHandler = () => {
      db.collection("todos").doc(id).delete()
  }

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "inprogress" : "completed"}
        />
      </ListItem>
      <Button onClick={toggleInProgress}>
        {inprogress ? "Done" : "Undone"}
      </Button>
      <Button onClick={deleteHandler}>X</Button>
    </div>
  );
}

export default Todo;
