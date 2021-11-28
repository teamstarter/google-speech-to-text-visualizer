import { useState } from "react";
import "tachyons/css/tachyons.min.css";
import TextOnly from "./components/textOnly";
import Timelines from "./components/timelines";

function selectContents(el: any) {
  let range = document.createRange();
  range.selectNodeContents(el);
  let sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

function getUsers(json) {
  return json.results.reduce((acc, item) => {
    return { [item.channelTag]: null, ...acc };
  }, {});
}

const colors = ["dark-blue", "dark-red", "dark-green", "dark-orange"];

function App() {
  const [lastConversation, setLastConversation] = useState(
    window.localStorage.getItem("lastConversation")
  );
  const lastConversationJson = lastConversation
    ? JSON.parse(lastConversation)
    : null;
  const [conversation, setConversation] = useState(
    lastConversation ? lastConversationJson : null
  );
  const [users, setUsers] = useState(
    lastConversation ? getUsers(lastConversationJson) : {}
  );
  const [tab, setTab] = useState("timelines");

  const handleJson = (e) => {
    const json = JSON.parse(e.target.value);
    const users = getUsers(json);

    setUsers(users);
    setConversation(json);
    window.localStorage.setItem("lastConversation", JSON.stringify(json));
  };

  const handleUserName = (e) => {
    const userTag = e.target.name;
    const newUser = { ...users };
    newUser[userTag] = e.target.value;

    setUsers(newUser);
  };

  return (
    <div className="App pa4 sans-serif mid-gray flex flex-column justify-center items-center w-100">
      <h2 className="dib mt0 f3 dark-blue mb2">
        👀 Google-speech-to-text Visualizer
      </h2>
      <div className="" style={{ minWidth: 800 }}>
        {!conversation ? (
          <div className="w-100">
            <div className="pt3">
              ⬇️ &nbsp; Paste the content from a json transcipt bellow to get a
              version easily readable and reusable.
              <div className="pv3 fw2">
                🕵️ This code runs in your browser and do not share your
                transcript to anyone.
              </div>
            </div>
            <textarea
              type="textarea"
              name="textValue"
              value={lastConversation}
              onChange={handleJson}
              className="dib w-100 b--dark-blue br2"
              style={{ minHeight: 600, whiteSpace: "pre-wrap" }}
            />
          </div>
        ) : null}

        <div className="ml4 w-100">
          {conversation && conversation.results.length > 0 ? (
            <div className="flex mt4 justify-between">
              <div className="flex">
                {Object.keys(users).map((user) => {
                  return (
                    <div>
                      <label>👤 n°{user}</label>
                      <input
                        type="text"
                        name={user}
                        onChange={handleUserName}
                        className={`mh2 pa2 br2 b--${colors[user - 1]}`}
                        placeholder="Name"
                        style={{ width: 110 }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex">
                <button
                  onClick={() => {
                    window.localStorage.removeItem("lastConversation", null);
                    setLastConversation(null);
                    setConversation(null);
                  }}
                  className="bg-white b-blue blue white br2 ba pa2 f5 ph3 fw5 mr3"
                >
                  Reset
                </button>
                <button
                  onClick={() => {
                    selectContents(document.getElementById("transformed-text"));
                  }}
                  className="bg-dark-blue white br2 ba pa2 f5 ph3 fw5"
                >
                  Select all the text
                </button>
              </div>
            </div>
          ) : null}

          {conversation ? (
            <div
              id="transformed-text"
              className={`mt3 w-100`}
              style={{ minWidth: 800, maxWidth: 800 }}
            >
              <div
                className="flex w-100 bb mb3"
                style={{ borderBottomColor: "lightgray" }}
              >
                <div
                  href="#"
                  className={`link blue pa2 pointer ${
                    tab === "timelines" ? "fw7" : ""
                  }`}
                  onClick={() => setTab("timelines")}
                >
                  Timelines
                </div>
                <div
                  href="#"
                  className={`link blue pa2 pointer ${
                    tab === "textOnly" ? "fw7" : ""
                  }`}
                  onClick={() => setTab("textOnly")}
                >
                  Text only
                </div>
              </div>

              {tab === "textOnly" ? (
                <TextOnly
                  conversation={conversation}
                  colors={colors}
                  users={users}
                />
              ) : null}
              {tab === "timelines" ? (
                <Timelines
                  conversation={conversation}
                  colors={colors}
                  users={users}
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
