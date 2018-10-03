import React from 'react';
import styled from 'styled-components';
import { typesData } from '../../../data/oldhamMorris';
import ResultTemplate from './ResultTemplate';

const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 25px;
`;

const Conscientious = () => {
  const { title } = typesData[9];
  return (
    <ResultTemplate title={title}>
      <Paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi officiis sapiente harum
        cupiditate quas autem repellendus dolore quia porro praesentium dolorem eligendi, minus
        magnam impedit. In inventore totam voluptatum a?
      </Paragraph>
    </ResultTemplate>
  );
};

export default Conscientious;
