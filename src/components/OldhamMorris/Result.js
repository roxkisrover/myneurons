import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import adventurous from '../../data/oldhamMorris/descriptions/adventurous.md';
import aggressive from '../../data/oldhamMorris/descriptions/aggressive.md';
import conscientious from '../../data/oldhamMorris/descriptions/conscientious.md';
import devoted from '../../data/oldhamMorris/descriptions/devoted.md';
import dramatic from '../../data/oldhamMorris/descriptions/dramatic.md';
import idiosyncratic from '../../data/oldhamMorris/descriptions/idiosyncratic.md';
import leisurely from '../../data/oldhamMorris/descriptions/leisurely.md';
import mercurial from '../../data/oldhamMorris/descriptions/mercurial.md';
import selfConfident from '../../data/oldhamMorris/descriptions/self-confident.md';
import selfSacrificing from '../../data/oldhamMorris/descriptions/self-sacrificing.md';
import sensitive from '../../data/oldhamMorris/descriptions/sensitive.md';
import serious from '../../data/oldhamMorris/descriptions/serious.md';
import solitary from '../../data/oldhamMorris/descriptions/solitary.md';
import vigilant from '../../data/oldhamMorris/descriptions/vigilant.md';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  padding: 20px;
  max-width: 960px;
`;

const Title = styled.h1`
  margin: 0 0 20px;
  font-size: 32px;
  line-height: 1.125;
  font-weight: 600;
  color: #111;

  @media (min-width: 550px) {
    font-size: 48px;
    line-height: 1.08365;
    font-weight: 600;
  }
`;

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: null };
  }

  componentWillMount() {
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
      case 'aggressive':
        fetch(aggressive)
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
      case 'leisurely':
        fetch(leisurely)
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
      case 'self-sacrificing':
        fetch(selfSacrificing)
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
      case 'serious':
        fetch(serious)
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
      default:
        // eslint-disable-next-line
        console.log('NO MATCH!!!');
    }
  }

  render() {
    const { description } = this.state;
    const { title } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>{`myneurons | ${title} тип личности`}</title>
        </Helmet>

        <Container>
          <Section>
            <Title>{title}</Title>
            <ReactMarkdown source={description} />
          </Section>
        </Container>
      </React.Fragment>
    );
  }
}

Result.propTypes = {
  title: PropTypes.string.isRequired,
  match: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  title: state.title,
});

export default connect(mapStateToProps)(Result);
