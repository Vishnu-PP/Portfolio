import React from "react";
import { DiCssdeck } from "react-icons/di";
import { Container } from "../../layout/LayoutStyles";
import { Section } from "../../styles/GlobalComponents";

function Test() {
  return (
    <Section>
      <Container>
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
        <span style={{fontSize:"8rem"}}>Ipo Sheriyaka!</span>
        </a>
      </Container>
    </Section>
  );
}

export default Test;
