import React from "react";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

function SearchHome() {
  return (
    <InputGroup
      className="mb-3"
      style={{ backgroundColor: "transparent", borderRadius: "5px" }}
    >
      <Form.Control
        placeholder="What do you want to watch ?"
        aria-label="What do you want to watch ?"
        aria-describedby="basic-addon1"
      />
      <InputGroup.Text id="basic-addon1">
        <Search />
      </InputGroup.Text>
    </InputGroup>
  );
}

export default SearchHome;
