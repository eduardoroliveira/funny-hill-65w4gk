import React, { Component, useEffect, useState } from "react";

const endpoint =
  "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/616e6f";

const Main = () => {
  const [flag, setFlag] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(endpoint).then((result) => setFlag(result));
  }, []);

  return <section>here:{flag}</section>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
