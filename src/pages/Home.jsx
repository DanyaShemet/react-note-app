import React, { Fragment } from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";

export const Home = () => {
    const notes = new Array(3).fill('').map((_,i) => ({id: 1, title: `note${i+1}`}))
  return (
    <Fragment>
      <Form />

      <Notes notes={notes}/>
    </Fragment>
  );
};
