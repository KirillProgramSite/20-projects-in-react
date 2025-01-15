import styled from "styled-components";
import { motion } from "framer-motion";

const backgroundColor = (color) => {
  switch (color) {
    case "primary":
      return "#2dc2f5";
    case "danger":
      return "#f14343";
    default:
      return "#74d200";
  }
};

export const Button = styled(motion.button)`
  background-color: ${(props) => backgroundColor(props.color)};
  color: white;
  border: none;
  padding: 5px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
`;
