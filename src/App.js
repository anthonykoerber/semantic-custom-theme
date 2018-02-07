import React, { Component } from "react";
import { Button, Dropdown } from "semantic-ui-react";

import "semantic-ui-less/semantic.less";

const stateOptions = [
  { key: "IL", value: "IL", text: "Illinois" },
  { key: "MI", value: "MI", text: "Michigan" },
  { key: "OH", value: "OH", text: "Ohio" },
  { key: "MO", value: "MO", text: "Missouri" },
  { key: "WI", value: "WI", text: "Wisconsin" },
  { key: "IN", value: "IN", text: "Indiana" }
];

class App extends Component {
  render() {
    return (
      <div>
        <Button>Hello There</Button>
        <Dropdown
          placeholder="Midwest States"
          selection
          options={stateOptions}
        />
      </div>
    );
  }
}

export default App;
