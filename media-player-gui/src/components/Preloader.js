import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Hellyeah } from '../assets/hellyeah.svg';
import Draggable from "react-draggable";

const Wrapper = styled.div`
    .box {
        align-self: flex-end;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        height: ${({ size }) => size || 10}rem;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
        fill: ${({ theme }) => theme.palette.secondary.main};
        cursor: move;
    }
    .bounce-7 {
        animation-name: bounce-7;
        animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
    }
    @keyframes bounce-7 {
        0% {
            transform: scale(1, 1) translateY(0);
        }
        10% {
            transform: scale(1.1, 0.9) translateY(0);
        }
        30% {
            transform: scale(0.9, 1.1) translateY(-100px);
        }
        50% {
            transform: scale(1.05, 0.95) translateY(0);
        }
        57% {
            transform: scale(1, 1) translateY(-7px);
        }
        64% {
            transform: scale(1, 1) translateY(0);
        }
        100% {
            transform: scale(1, 1) translateY(0);
        }
    }
`;

const Preloader = ({ size }) => {
  return (
    <Draggable handle=".handle" defaultPosition={{ x: 0, y: 0 }} grid={null} enableUserSelectHack={true} scale={2}>
      <Wrapper className="handle" size={size}><Hellyeah className="box bounce-7" /></Wrapper>
    </Draggable>
  );
};

export default Preloader;
