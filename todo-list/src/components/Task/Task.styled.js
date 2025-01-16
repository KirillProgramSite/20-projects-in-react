import styled from "styled-components";
import { motion } from "framer-motion";


export const TaskWrapper = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px 20px;
    border-radius: 10px;

    border: 2px solid grey;
`

export const TaskLeftWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const TaskName = styled(motion.p)`
    font-size: 25px;
    margin-right: 50px;
    margin-left: 20px;
`