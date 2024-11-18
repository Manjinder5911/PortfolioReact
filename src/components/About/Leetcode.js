import LeetCodeCalendar from 'leetcode-calendar';
import React from "react";
import { Row } from "react-bootstrap";

function Leetcode() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Leetcode</strong>
      </h1>
      <LeetCodeCalendar
        username="manjindersekhon2003"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Leetcode;