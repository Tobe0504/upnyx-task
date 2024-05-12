import Button from "../../Components/Button/Button";
import classes from "./HistorySectionAndCtas.module.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import InfoPopup from "../../Components/InfoPopup/InfoPopup";
import React, { useContext, useState } from "react";
import { ChatsContext } from "../../Context/ChatsContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LaunchIcon from "@mui/icons-material/Launch";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import ToggleSwitch from "../../Components/ToggleSwitch/ToggleSwitch";
import { ThemeContext } from "../../Context/ThemeContext";

const HistorySectionAndCtas = () => {
  // Context
  const { chatsState, deleteChat, createNewChat, setChatTitle } =
    useContext(ChatsContext);

  const { setTheme, theme } = useContext(ThemeContext);

  //   States
  const [titleIsEditable, setTitleIsEditable] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  // Router '
  const navigate = useNavigate();
  const { chatId } = useParams();

  return (
    <div className={classes.container}>
      <div className={classes.topSection}>
        <Button type="secondary" onClick={createNewChat}>
          <AddOutlinedIcon />
          <span>New Chat</span>
        </Button>

        <div className={classes.title}>
          <HistoryOutlinedIcon />
          <span>History</span>
        </div>

        <div className={classes.chatList}>
          {chatsState.map((data, i) => {
            return (
              <React.Fragment key={i}>
                <InfoPopup text={data?.title}>
                  <div
                    className={classes.chat}
                    onClick={() => {
                      navigate(`/${data?.id}`);
                    }}
                  >
                    <span>
                      <ChatBubbleOutlineIcon />
                    </span>
                    {titleIsEditable && data.id === selectedId ? (
                      <input
                        value={data?.title}
                        onChange={(e) => {
                          setChatTitle(data.id, e.target.value);
                        }}
                        onKeyUp={(e) => {
                          if (e.key === "Enter") {
                            setTitleIsEditable(false);
                          }
                        }}
                        onBlur={() => {
                          setTitleIsEditable(false);
                        }}
                      />
                    ) : (
                      <p>{data?.title}</p>
                    )}
                    <span
                      onClick={() => {
                        setSelectedId(data.id);
                        setTitleIsEditable(true);
                      }}
                    >
                      <BorderColorIcon />
                    </span>
                    <span
                      onClick={() => {
                        deleteChat(data?.id);
                      }}
                    >
                      <DeleteOutlineIcon />
                    </span>
                  </div>
                </InfoPopup>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className={classes.bottomSection}>
        <Link to="/">
          <PersonAddIcon />
          <span>Upgrade to Plus</span>
        </Link>

        <Link to="/">
          <LaunchIcon />
          <span>Updates & FAQ</span>
        </Link>

        <Link to="/">
          <DriveFileRenameOutlineOutlinedIcon />
          <span>Terms and Conditions</span>
        </Link>

        <Link to="/">
          <GppGoodOutlinedIcon />
          <span>Privacy Policy Page</span>
        </Link>

        <div>
          <ToggleSwitch
            onChange={(e) => {
              e.target.checked ? setTheme("dark") : setTheme("light");
            }}
            checked={theme === "dark" ? true : false}
          />
          <span>Dark mode</span>
        </div>
      </div>
    </div>
  );
};

export default HistorySectionAndCtas;
