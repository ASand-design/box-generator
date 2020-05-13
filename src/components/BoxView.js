import React, { useState } from 'react';
import styled from 'styled-components';

const BoxView = styled.div`
    background: ${props => props.background};
    width: ${props => props.width && '50px'};
    height: ${props => props.height && '50px'};
    display: inline-block;
`;
export default BoxView;
//found this but cant get it to work