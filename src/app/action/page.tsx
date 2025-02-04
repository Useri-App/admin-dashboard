import React from "react";
import Form from "./form";

const Action = async () => {
  const data = await (await fetch(`https://reqres.in/api/todos`)).json();

  return (
    <div className="h-screen bg-meta-4 p-8">
      <Form data={data} />
    </div>
  );
};

export default Action;

// https://www.youtube.com/watch?v=RadgkoJrhu0
