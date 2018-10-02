import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin: 30px auto;
  padding: 0 20px;
  width: 100%;
  max-width: 960px;
  box-sizing: border-box;

  @media (min-width: 400px) {
    width: 85%;
    padding: 0;
  }
  @media (min-width: 550px) {
    width: 80%;
  }
`;

const Result = () => (
  <Container>
    <h1>Тип личности</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae accusantium officia sequi modi
      illo, nobis dolorum repellendus cumque dolores fugiat praesentium maiores, laborum dolorem
      enim repudiandae porro, consectetur explicabo aliquam.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quos est fugiat
      provident, impedit pariatur corrupti ut aspernatur nam mollitia quis deleniti velit ab
      veritatis inventore officiis eius repellat numquam!
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, delectus nobis
      consequatur consequuntur totam ipsum deserunt recusandae, eligendi possimus dolores ex autem
      voluptatem sed quasi quo, sint odit! Adipisci, minima?
    </p>
  </Container>
);

export default Result;
