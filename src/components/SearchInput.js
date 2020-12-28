import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import search_ico from "../assets/landing page pngs/search.svg";

const SearchInput = ({ onChange, handleKeyPress }) => {
  return (
    <InputGroup style={{ width: "250px" }}>
      <FormControl
        type="text"
        placeholder="Search here.."
        onChange={onChange}
        onKeyPress={handleKeyPress}
        style={{
          borderRadius: "8px",
          border: "0.5px solid silver",
          padding: "8px 8px",
          borderRight: "none",
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          boxShadow: "none",
        }}
      />
      <InputGroup.Append>
        <InputGroup.Text
          id="btnGroupAddon"
          style={{
            backgroundColor: "#fff",
            border: "0.5px solid silver",
            borderLeft: "none",
            borderRadius: "8px",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <img src={search_ico} alt="searchicon" />
        </InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchInput;
