import { useState } from "react";
import "tachyons/css/tachyons.min.css";

/**
 * 1046.800
 */
function convertToMinutes(timeInString) {
  const sec = parseInt(timeInString, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (parseInt(hours) === 0) {
    return minutes + ":" + seconds; // Return is HH : MM : SS
  }
  return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
}

function selectContents(el: any) {
  let range = document.createRange();
  range.selectNodeContents(el);
  let sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  console.log("aaa");
}

function App() {
  const [users, setUsers] = useState({});
  const [conversation, setConversation] = useState();

  const handleJson = (e) => {
    const json = JSON.parse(e.target.value);
    const users = json.results.reduce((acc, item) => {
      return { [item.channelTag]: null, ...acc };
    }, {});

    setUsers(users);
    setConversation(json);
  };

  const handleUserName = (e) => {
    const userTag = e.target.name;
    const newUser = { ...users };
    newUser[userTag] = e.target.value;

    setUsers(newUser);
  };

  return (
    <div className="App pa4 sans-serif mid-gray">
      <h2 className="mt0 f2 dark-blue">👀 Google-speech-to-text Visualizer</h2>
      <div className="flex">
        <div className="w-40">
          <label className="dib mb2 fw5">Json transcript</label>
          <textarea
            type="textarea"
            name="textValue"
            onChange={handleJson}
            className="dib w-100"
            style={{ minHeight: 600, whiteSpace: "pre-wrap" }}
          />
        </div>

        <div className="ml4 w-50">
          <div className="flex">
            {Object.keys(users).map((user) => {
              return (
                <div>
                  <label>Person n°{user}</label>
                  <input
                    type="text"
                    name={user}
                    onChange={handleUserName}
                    className="mh2 pa2"
                  />
                </div>
              );
            })}
            <button
              onClick={() => {
                selectContents(document.getElementById("transformed-text"));
              }}
              className="bg-dark-blue white br2 ba pa2 f5 ph3"
            >
              Select all
            </button>
          </div>

          <div
            id="transformed-text"
            className="mt4"
            onClick={(e) => selectContents(e.target)}
          >
            {conversation &&
              conversation.results.map((message) => {
                return (
                  <div className="pb1 flex">
                    <span className="code f7">
                      {convertToMinutes(message.resultEndTime)}{" "}
                      <span className="f5 fw4 sans-serif">
                        <span className="fw6">
                          {users[message.channelTag]}:{" "}
                        </span>
                        {message.alternatives.map((text) => text.transcript)}
                      </span>
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
