import React from 'react';
import { Breadcrumb, Icon, Divider } from 'antd';
import { Link } from 'gatsby';
import Container from '../../../components/Container';

function Types() {
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
                    <span>Типы личности</span>
                </Breadcrumb.Item>
            </Breadcrumb>

            <Divider />

            <h1 style={{ textAlign: 'center' }}>Перечень определяемых типов личности</h1>
            <ul>
                <li>
                    <Link to="/oldham-morris/types/vigilant">Бдительный</Link>
                </li>
                <li>
                    <Link to="/oldham-morris/types/idiosyncratic">Идеосинкратический</Link>
                </li>
                <li>
                    <Link to="/oldham-morris/types/mercurial">Деятельный</Link>
                </li>
                <li>
                    <Link to="/oldham-morris/types/solitary">Одинокий</Link>
                </li>
                <li>
                    <Link to="/oldham-morris/types/devoted">Преданный</Link>
                </li>
                <li>
                    <Link to="/oldham-morris/types/self-confident">Самоуверенный</Link>
                </li>
                <li>
                    <Link to="/oldham-morris/types/dramatic">Драматичный</Link>
                </li>
                <li>
                    <Link to="/oldham-morris/types/conscientious">Добросовестный</Link>
                </li>
                <li>
                    <Link to="/oldham-morris/types/sensitive">Чувствительный</Link>
                </li>
                <li>
                    <Link to="/oldham-morris/types/adventurous">Авантюрный</Link>
                </li>
            </ul>
        </Container>
    );
}

export default Types;
