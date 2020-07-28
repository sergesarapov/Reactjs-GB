import React from "react";
import ReactDom from "react-dom";

const messages = ["Hi", "Why?", "Who?"];

const Message = (props) => <div>{props.text}</div>;

const MessageList = (props) => {
  return props.messages.map((el) => <Message text={el} />);
};

ReactDom.render(
  <MessageList messages={messages} />,
  document.getElementById("root")
);
