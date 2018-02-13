import React, { Component } from "react";
import { Button, Dropdown, Container, Header, Icon } from "semantic-ui-react";

import "semantic-ui-less/semantic.less";
import "./index.css";

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
      <Container>
        <Header>Some Page Header Here!</Header>
        <Button>Hello There</Button>
        <Dropdown
          placeholder="Midwest States"
          selection
          selectOnBlur={false}
          options={stateOptions}
        />
        <p>Some Page font here so I can see it</p>
        <Icon className="home" />
        <Icon className="pen" />
        <Icon className="image" />
        <Icon className="camera" />
        <Icon className="spades" />
        <div>
          <Button
            content="Like"
            icon={{ className: "heart" }}
            label={{ as: "a", basic: true, content: "2,048" }}
            labelPosition="right"
          />
          <Button
            content="Like"
            icon={{ className: "heart" }}
            label={{
              as: "a",
              basic: true,
              pointing: "right",
              content: "2,048"
            }}
            labelPosition="left"
          />
          <Button
            icon={{ className: "newspaper" }}
            label={{ as: "a", basic: true, content: "2,048" }}
            labelPosition="left"
          />
        </div>
      </Container>
    );
  }
}

export default App;
