import { useState } from "react";

// Components
import PostmanInput from "./postmanInput";
import PostmanOutput from "./postmanOutput";

const Postman = () => {
  const [formValues, setFormValues] = useState({});
  const [response, setResponse] = useState();
  return (
    <div>
      <PostmanInput
        formValues={formValues}
        setFormValues={setFormValues}
        setResponse={setResponse}
      />

      <PostmanOutput response={response} />
    </div>
  );
};

export default Postman;
