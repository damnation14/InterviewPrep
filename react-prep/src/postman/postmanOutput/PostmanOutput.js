import "./style.css";

const PostmanOutput = ({ response }) => {
  const responseString = JSON.stringify(response);
  return (
    <div className="outputContainer">
      <label for="requestBody">Response:</label>
      <textarea value={responseString}></textarea>
    </div>
  );
};

export default PostmanOutput;
