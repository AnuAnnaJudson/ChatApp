import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";
//MultichatSocket is a websocket that allows the user to connect to all of their chats they have

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "xxxxxxxxxx",//replace the xxxx with project id
    props.user.username,
    props.user.secret
  );

  //useMultiChatLogic takes in 3 arguments, projectID,username and secret

  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatsPage;
