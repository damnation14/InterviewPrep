import "./style.css";

const PostmanInput = ({ setFormValues, formValues, setResponse }) => {
  const handleChange = (formFieldId) => (e) => {
    setFormValues((prev) => ({
      ...prev,
      [formFieldId]: e.target.value,
    }));
  };

  const handleClick = async () => {
    const {
      apiUrl,
      requestMethod,
      requestHeader,
      requestBody = {},
    } = formValues;
    try {
      const parsedHeader = JSON.parse(requestHeader);
      const response = await fetch(apiUrl, {
        method: requestMethod,
        headers: parsedHeader,
        ...(requestMethod === "POST" && { body: requestBody }),
      });
      const data = await response.json();
      setResponse(data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="inputContainer">
      <div className="topRow">
        <select
          id="methods"
          onChange={handleChange("requestMethod")}
          value={formValues["requestMethod"]}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
        </select>
        <input
          onChange={handleChange("apiUrl")}
          id="apiUrl"
          type="text"
          className="apiUrlInput"
          placeholder="Enter API URL"
          value={formValues["apiUrl"]}
        />
        <button className="sendButton" onClick={handleClick}>
          Send
        </button>
      </div>

      <div className="bottomRow">
        <div className="column">
          <label htmlFor="requestHeader">Request Header:</label>
          <textarea
            id="requestHeader"
            className="textareaStyle"
            onChange={handleChange("requestHeader")}
            value={formValues["requestHeader"]}
          />
        </div>
        <div className="column">
          <label htmlFor="requestBody">Request Body:</label>
          <textarea
            id="requestBody"
            className="textareaStyle"
            onChange={handleChange("requestBody")}
            value={formValues["requestBody"]}
          />
        </div>
      </div>
    </div>
  );
};

export default PostmanInput;
