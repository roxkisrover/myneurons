import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { Breadcrumb, Icon, Divider } from 'antd';
import Container from '../../Container';

import adventurous from './descriptions/adventurous.md';
import conscientious from './descriptions/conscientious.md';
import devoted from './descriptions/devoted.md';
import dramatic from './descriptions/dramatic.md';
import idiosyncratic from './descriptions/idiosyncratic.md';
import mercurial from './descriptions/mercurial.md';
import selfConfident from './descriptions/self-confident.md';
import sensitive from './descriptions/sensitive.md';
import solitary from './descriptions/solitary.md';
import vigilant from './descriptions/vigilant.md';
import falsified from './descriptions/falsified.md';

const Branding = styled.span`
  color: #ff6101;
`;

const Title = styled.h1`
  text-align: center;
`;

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: null };
  }

  componentDidMount() {
    // === TEMPORARY DATA FOR DEBUGGING ===
    const { match } = this.props;
    const typeFromUrl = match.params.type;

    switch (typeFromUrl) {
      case 'adventurous':
        fetch(adventurous)
          .then(response => response.text())
          .then((text) => {
            this.setState({ description: text });
          });
        break;
      case 'conscientious':
        fetch(conscientious)
          .then(response => response.text())
          .then((text) => {
            this.setState({ description: text });
          });
        break;
      case 'devoted':
        fetch(devoted)
          .then(response => response.text())
          .then((text) => {
            this.setState({ description: text });
          });
        break;
      case 'dramatic':
        fetch(dramatic)
          .then(response => response.text())
          .then((text) => {
            this.setState({ description: text });
          });
        break;
      case 'idiosyncratic':
        fetch(idiosyncratic)
          .then(response => response.text())
          .then((text) => {
            this.setState({ description: text });
          });
        break;
      case 'mercurial':
        fetch(mercurial)
          .then(response => response.text())
          .then((text) => {
            this.setState({ description: text });
          });
        break;
      case 'self-confident':
        fetch(selfConfident)
          .then(response => response.text())
          .then((text) => {
            this.setState({ description: text });
          });
        break;
      case 'sensitive':
        fetch(sensitive)
          .then(response => response.text())
          .then((text) => {
            this.setState({ description: text });
          });
        break;
      case 'solitary':
        fetch(solitary)
          .then(response => response.text())
          .then((text) => {
            this.setState({ description: text });
          });
        break;
      case 'vigilant':
        fetch(vigilant)
          .then(response => response.text())
          .then((text) => {
            this.setState({ description: text });
          });
        break;
      case 'falsified':
        fetch(falsified)
          .then(response => response.text())
          .then((text) => {
            this.setState({ description: text });
          });
        break;
      default:
        // eslint-disable-next-line
        console.log('Test result: NO MATCH!');
    }
  }

  render() {
    const { description } = this.state;
    const { title } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>{title ? `myneurons | ${title} тип личности` : 'myneurons | Результат'}</title>
        </Helmet>

        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              <Icon type="home" />
              <Branding>myneurons</Branding>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/oldham-morris">
              <Icon type="form" />
              <span>Тест Олдхэма-Морриса</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Icon type="file" />
              <span>Результат</span>
            </Breadcrumb.Item>
          </Breadcrumb>

          <Divider />

          {title && <Title>{`${title} тип личности`}</Title>}


          <ReactMarkdown source={description} />
        </Container>
      </React.Fragment>
    );
  }
}

Result.propTypes = {
  match: PropTypes.shape().isRequired,
  // resultArr: PropTypes.arrayOf(PropTypes.number),
  title: PropTypes.string,
};

Result.defaultProps = {
  // resultArr: null,
  title: '',
};

const mapStateToProps = state => ({
  resultArr: state.omResultArr.resultArr,
  title: state.omResultTitle.title,
});

export default connect(mapStateToProps)(Result);
