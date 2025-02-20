import React from "react";
import styled from "styled-components";

interface FactDisplayProps {
  fact: string;
  fetchFact: () => void;
}

const FactContainer = styled.div`
  width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #ffe5b4;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const FactText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const RefreshButton = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  position: relative;

  &:hover {
    background-color: #cc5500;
  }
`;

const FactDisplay: React.FC<FactDisplayProps> = ({ fact, fetchFact }) => (
  <FactContainer>
    <FactText>{fact || "Loading..."}</FactText>
    <RefreshButton onClick={fetchFact}>Get New Fact</RefreshButton>
  </FactContainer>
);

export default FactDisplay;
