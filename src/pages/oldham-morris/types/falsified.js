import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Icon, Divider } from 'antd';
import { connect } from 'react-redux';
import Container from '../../../components/Container';
import CombChart from '../../../components/CombChart';

function Falsified({ score }) {
    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="/">
                    <Icon type="home" />
                    <span style={{ color: '#ff6101' }}>myneurons</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/oldham-morris">
                    <Icon type="form" />
                    <span>Тест Олдхэма-Морриса</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Icon type="file" />
                    <span>Недостаточно правдивый</span>
                </Breadcrumb.Item>
            </Breadcrumb>

            <Divider />

            <h1 style={{ textAlign: 'center' }}>Недостаточно правдивый тип личности</h1>

            {score && <CombChart data={score} />}

            <h2>В следующий раз повезёт</h2>
            <p>
                Тест считается не пройденным, так как в представленных ответах наблюдаются существенные
                противоречия.
            </p>
        </Container>
    );
}

Falsified.propTypes = {
    score: PropTypes.arrayOf(PropTypes.number),
};

Falsified.defaultProps = {
    score: null,
};

const mapStateToProps = (state) => ({
    score: state.omScore.score,
});

export default connect(mapStateToProps)(Falsified);
