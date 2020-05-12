import React, { useState } from 'react';
import styled from 'styled-components';

const BoxView = styled.div`
    background: ${props => props.bgColor};
    width: ${props => props.width && '50px'};
    height: ${props => props.height && '50px'};
    display: inline-block;
`;
export default BoxView;