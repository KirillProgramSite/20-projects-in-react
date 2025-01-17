import styled from "styled-components";
import { motion } from "framer-motion";


export const FilterElement = styled(motion.div)`
    font-size: 20px;
    color: grey;
    margin-right: 15px;
    cursor: pointer;
    transition: all 0.5s linear;

    &:hover{
        color: #74d200;
    }
`