import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SetExample from "./SetExample";
import StackExample from "./StackExample";
import QueueExample from "./QueueExample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Tabs>
      <TabList>
        <Tab>Set</Tab>
        <Tab>Stack</Tab>
        <Tab>Queue</Tab>
        <Tab>Tree</Tab>
        <Tab>Tree 2</Tab>
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
      {/* <TabPanel>
        <TreeExample />
      </TabPanel>
      <TabPanel>
        <TreeExample2 />
      </TabPanel> */}
    </Tabs>
  );
}

export default App;
