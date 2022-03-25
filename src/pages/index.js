import React from 'react';
import { Link } from 'gatsby';
import {
    Row, Col, Divider, Tag,
} from 'antd';
import * as homeStyles from './index.module.less';
import SEO from '../components/SEO';
import { omQuestionsMeta } from '../data/oldhamMorris/questions';

function Home() {
    return (
        <>
            <SEO
                title="Главная страница"
                keywords={['тесты', 'психология']}
            />

            <div className={homeStyles.wrapper}>
                <div className={homeStyles.container}>
                    <Row gutter={24}>
                        <Col md={{ span: 12 }}>
                            <h1 className={homeStyles.title}>myneurons</h1>
                            <h2>Сборник научно обоснованных психологических тестов</h2>
                            <p>
                                Это некоммерческий проект, в котором собраны диагностические и экспериментальные
                                методы и методики, необходимые в работе как практических психологов, так и
                                психологов-исследователей.
                            </p>
                            <p>
                                Все тесты подробно и полно описаны профессиональными психологами с использованием
                                профильной литературы.
                            </p>
                            <p>
                                Данный ресурс будет полезен практикующим психологам, исследователям, преподавателям
                                психологии, студентам, аспирантам, а также всем интересующимся вопросами
                                психодиагностики и передовыми психологическими тестами.
                            </p>
                        </Col>

                        <Col md={{ span: 12 }}>
                            <div className={homeStyles.scroll}>
                                <h3>Модифицированный тест Олдхэма-Морриса</h3>
                                <div className={homeStyles.tagGroup}>
                                    <Tag>{`${omQuestionsMeta.questionsCount} вопросов`}</Tag>
                                    <Tag>{`~${omQuestionsMeta.estimatedTime} минут`}</Tag>
                                </div>
                                <p>
                                    Личностный самоопросник, разработанный Дж.&nbsp;Олдхэмом и Л.&nbsp;Моррисом на
                                    основании критериев DSM-IV и (частично) DSM-III-R.
                                </p>
                                <Link
                                    className="ant-btn ant-btn-primary ant-btn-sm"
                                    to="/oldham-morris"
                                >
                                    Начать тестирование
                                </Link>

                                <Divider dashed />

                                <h3>Пятифакторный опросник личности TIPI-RU</h3>
                                <div className={homeStyles.tagGroup}>
                                    <Tag>10 вопросов</Tag>
                                    <Tag>~2 минуты</Tag>
                                </div>
                                <p>
                                    Оценка конвергентной валидности, внутренней согласованности и тест-ретестовой
                                    надёжности.
                                </p>
                                <Link
                                    className="ant-btn ant-btn-primary ant-btn-sm"
                                    disabled
                                    to="/"
                                >
                                    Тест временно недоступен
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Home;
