import classes from "./ChatInteraction.module.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useContext, useEffect, useRef, useState } from "react";
import { ChatsContext } from "../../Context/ChatsContext";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import { useParams } from "react-router-dom";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { CircularProgress } from "@mui/material";
import { ThemeContext } from "../../Context/ThemeContext";
import Button from "../../Components/Button/Button";

const ChatInteraction = () => {
  // Context
  const {
    chatsState,
    addConversationToActiveChat,
    setChatTitle,
    activeDepartment,
    createNewChat,
  } = useContext(ChatsContext);
  const { theme } = useContext(ThemeContext);

  //   State
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  // Router
  const { chatId } = useParams();

  //   Utils
  const activeChat = chatsState?.find((data) => {
    return data.id.toString() === chatId;
  });

  //   Refs
  const chatContainer = useRef<HTMLDivElement | null>(null);

  //   Effects
  useEffect(() => {
    if (chatsState.length) {
      chatContainer.current?.scrollTo({
        top: chatContainer.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatsState]);
  return (
    <div className={classes.container} ref={chatContainer}>
      <div
        className={classes.introSection}
        style={
          theme === "dark"
            ? { background: "#323842ff" }
            : { background: "#fff" }
        }
      >
        <h4>Introduce yourself to AIWorkSquad</h4>
        <p>
          <span>Introduce yourself to AIWorkSquad</span>
          <EditOutlinedIcon />
        </p>
      </div>

      <div className={classes.chatSection}>
        {chatId ? (
          <div className={classes.chats}>
            {activeChat?.conversation?.map((data, i) => {
              return (
                <div
                  key={i}
                  className={`${classes.chat} ${
                    data.isResponse ? classes.isResponse : classes.notResponse
                  }`}
                >
                  {data?.isResponse && <ForumOutlinedIcon />}
                  <p>{data.text}</p>
                  {!data?.isResponse && <HelpOutlineOutlinedIcon />}
                  {data?.isResponse && (
                    <div className={classes.actions}>
                      <ContentCopyOutlinedIcon />
                      <OpenInNewOutlinedIcon />
                      <FileDownloadOutlinedIcon />
                      <EmailOutlinedIcon />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className={classes.create}>
            <p>
              Select a chat or Create a new chat to start a new conversation
            </p>
            <Button onClick={createNewChat}>New chat</Button>
          </div>
        )}
      </div>

      <form
        className={classes.inputSection}
        style={
          theme === "dark"
            ? { background: "#323842ff" }
            : { background: "#fff" }
        }
      >
        <div>
          <input
            placeholder={
              activeDepartment === "Marketing"
                ? "Enter your marketing query here..."
                : "Enter your sales query here..."
            }
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
          <span>
            <HelpOutlineOutlinedIcon />
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setLoading(true);
              if (text.length > 0) {
                addConversationToActiveChat(chatId as string, {
                  text,
                  isResponse: false,
                });

                setText("");
                setTimeout(() => {
                  addConversationToActiveChat(chatId as string, {
                    text: "This is an auto-generated response",
                    isResponse: true,
                  });
                  setLoading(false);
                }, 2000);

                if (activeChat?.title === "New chat") {
                  setChatTitle(chatId as string, text);
                }
              }
            }}
          >
            {loading ? (
              <CircularProgress
                size="1rem"
                color="inherit"
                style={{ color: "#0095a9ff" }}
              />
            ) : (
              <SendOutlinedIcon />
            )}
          </button>
        </div>

        <p>
          Type your next question above or select one from the related questions
          section
        </p>
      </form>
    </div>
  );
};

export default ChatInteraction;
