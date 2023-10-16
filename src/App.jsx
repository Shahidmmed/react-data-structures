import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SetExample from "./SetExample";
import StackExample from "./StackExample";
import QueueExample from "./QueueExample";
import TreeExample from "./TreeExample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Tabs>
      <TabList>
        <Tab>Set</Tab>
        <Tab>Stack</Tab>
        <Tab>Queue</Tab>
        <Tab>Tree</Tab>
      </TabList>

      <TabPanel>
        <SetExample />
      </TabPanel>
      <TabPanel className="stack">
        <StackExample />
      </TabPanel>
      <TabPanel className="queue">
        <QueueExample />
      </TabPanel>
      <TabPanel>
        <TreeExample />
      </TabPanel>
    </Tabs>
  );
}

export default App;
