import Layout from "../../Components/Layout/Layout";
import ChatInteraction from "../ChatInteraction/ChatInteraction";
import HistorySectionAndCtas from "../HistorySectionAndCtas/HistorySectionAndCtas";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.historySection}>
          <HistorySectionAndCtas />
        </div>
        <div className={classes.chatSection}>
          <ChatInteraction />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
