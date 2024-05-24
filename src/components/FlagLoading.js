import React, { useEffect, useState } from "react";
import { setStringTyped } from "../util/setStringTyped";

const endpoint =
  "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/616e6f";

export const FlagLoading = () => {
  const [flag, setFlag] = useState("");
  const [list, setList] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(endpoint)
      .then((result) => result.text())
      .then(async (responseFlag) => {
        setLoading(false);
        await setStringTyped(responseFlag, 500, setFlag);
        await setStringTyped(responseFlag, 500, setList);
      });
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        fontFamily: "Courier New, Verdana, Arial",
        fontSize: "50pt",
      }}
    >
      <div>
        <div>{isLoading ? "Loading..." : flag}</div>
        <div>
          {list === "" ? undefined : (
            <ul>
              {list.split("").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
