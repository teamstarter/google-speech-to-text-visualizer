import React from "react";
import convertToMinutes from "../convertToMinutes";

const timeDilatation = 100;

function toMs(time) {
  if (!time.includes(".")) {
    return (parseInt(time.replace("s", ""), 10) * 1000) / timeDilatation;
  }
  return parseInt(time.replace(".", "").replace("s", ""), 10) / timeDilatation;
}

function Timeline({ users, user, conversation, colors }) {
  const globalHeight = toMs(
    conversation.results[conversation.results.length - 1].resultEndTime
  );

  return (
    <div className="" style={{ width: `${100 / Object.keys(users).length}%` }}>
      <h3>Timeline of {users[user]}</h3>
      <div
        className="relative"
        style={{
          width: "95%",
          height: globalHeight
        }}
      >
        {conversation &&
          conversation.results
            .filter((message) => message.channelTag === parseInt(user, 10))
            .map((message) => {
              const text = message.alternatives.map((text) => text.transcript);

              if (!text.join("").length) {
                return null;
              }

              const firstWordTime = message.alternatives[0].words[0].startTime;

              if (!message.alternatives[0].words[0].startTime) {
                return null;
              }

              const calculatedHeight =
                toMs(message.resultEndTime) -
                toMs(message.alternatives[0].words[0].startTime);

              return (
                <div
                  className="pb1 flex absolute left-0 pa2"
                  style={{
                    top: toMs(message.alternatives[0].words[0].startTime),
                    minHeight: `${
                      calculatedHeight < 30 ? 30 : calculatedHeight
                    }px`,
                    boxShadow: "rgb(85 85 85 / 25%) 3px 4px 6px 1px",
                    borderRadius: "0 15px 15px 15px"
                  }}
                >
                  <span className="code f7 black-40">
                    {convertToMinutes(firstWordTime)}{" "}
                    <span
                      className="fw4 sans-serif dark-gray"
                      style={{ fontSize: 18 }}
                    >
                      <span className={`fw6 ${colors[message.channelTag - 1]}`}>
                        {users[message.channelTag]}:{" "}
                      </span>
                      {text.join(" ")}
                    </span>
                  </span>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default function Timelines({ users, conversation, colors }) {
  return (
    <div className="flex w-100">
      {Object.keys(users).map((user) => {
        return (
          <Timeline
            user={user}
            users={users}
            conversation={conversation}
            colors={colors}
          />
        );
      })}
    </div>
  );
}
