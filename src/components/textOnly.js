import React from "react";
import convertToMinutes from "../convertToMinutes";

export default function TextOnly({ conversation, colors, users }) {
  return (
    <div className="w-100">
      {conversation &&
        conversation.results.map((message) => {
          const text = message.alternatives.map((text) => text.transcript);

          if (!text.join("").length) {
            return null;
          }

          const firstWordTime = message.alternatives[0].words[0].startTime;

          return (
            <div className="pb1 flex">
              <span className="code f7 black-40">
                {convertToMinutes(firstWordTime)}{" "}
                <span className="f5 fw4 sans-serif dark-gray">
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
  );
}
