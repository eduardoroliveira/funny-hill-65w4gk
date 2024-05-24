import React, { Component } from "react";
import { FlagLoading } from "./components/FlagLoading";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlagLoading />
      </div>
    );
  }
}

export default App;
// Note:
// =====
// - The specification is not very clear if you wanted both the sentence
// being writen + the list with each character as an item, so I createdn both...
// ==

// Flag - URL:
// ===========
// another - https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/616e6f -->
// ==

// Here's the script I created to get the URL...
// =============================================
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
// <script>
//   $(document).ready(function () {
//     const allI = $("code")
//       .filter(function () {
//         return $(this).attr("data-class").startsWith("23");
//       })
//       .find("div")
//       .filter(function () {
//         return $(this).attr("data-tag").endsWith("93");
//       })
//       .find("span")
//       .filter(function () {
//         return $(this).attr("data-id").includes("21");
//       })
//       .find("i")
//       .filter("[class~='char']");
//     let buffer = "";
//     for (let key of Object.keys(allI)) {
//       if (
//         key !== "Length" &&
//         key !== "prevObject" &&
//         allI[key] &&
//         $(allI[key]).attr("value")
//       ) {
//         buffer += $(allI[key]).attr("value");
//       }
//     }
//     console.log({ buffer });
//   });
// </script>
// ==
