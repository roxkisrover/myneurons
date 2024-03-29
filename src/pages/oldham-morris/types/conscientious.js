import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Icon, Divider } from 'antd';
import { connect } from 'react-redux';
import Container from '../../../components/Container';
import CombChart from '../../../components/CombChart';

function Conscientious({ score }) {
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
                    <span>Добросовестный</span>
                </Breadcrumb.Item>
            </Breadcrumb>

            <Divider />

            <h1 style={{ textAlign: 'center' }}>Добросовестный тип личности</h1>

            {score && <CombChart data={score} />}

            <h2>Сухарь</h2>
            <p>
                Мужчины и женщины Добросовестного типа личности — это люди высоких моральных принципов, они
                очень обязательны, не позволяют себе отдохнуть до тех пор, пока работа не выполнена и не
                выполнена правильно. Они преданы своим семьям, своему делу, своим начальникам. Упорный труд
                для них - норма.
            </p>
            <p>
                Добросовестные люди процветают в таких культурах, где процветает этика труда.
                Добросовестность, проявляющаяся в упорном труде, благоразумии, стремлении к согласию, может
                стать залогом будущих успехов. Мы ставим этот тип личности на первое место среди четырнадцати
                других, так как он приспосабливающийся, привычный и поэтому наиболее желательный компонент для
                множества различных профилей индивидуальности. Действительно, в нашем обществе широкий
                диапазон Добросовестного поведения считается нормальным, даже восхитительным, и бывает трудно
                провести черту между Добросовестным типом личности и навязчиво-принудительным расстройством,
                которое является его крайним проявлением. Что можно сказать о людях, которые даже в каникулы
                не перестают работать? Может быть, они - трудоголики, которые не умеют расслабляться и идут
                прямой дорогой к сердечному приступу?
            </p>
            <p>
                Следующие восемь черт характера говорят о присутствии этого типа личности в вашей
                индивидуальности.
            </p>
            <ol>
                <li>
                    Тяжелый труд. Добросовестный тип дидактичен в работе, работает тяжело и скрупулезно, но
                    достигает средних результатов.
                </li>
                <li>
                    Правильное отношение. Добросовестный тип очень положителен, он.всегда придерживается
                    моральных и этических норм, чего ожидает и от других людей.
                </li>
                <li>
                    Правильность выбора. Добросовестные люди, оказавшись перед выбором, стараются понять, какой
                    из пунктов будет правильным, и не сдвигаются с места, пока не поймут этого, они всегда
                    стараются выбрать наилучшую стратегию, хотя решение босса для них всегда правильно.
                </li>
                <li>
                    Безупречность. Добросовестные типы всегда разбивают свою задачу на мелкие детали и не могут
                    пропустить ни одного момента.
                </li>
                <li>Упорство. Добросовестных типов сложно отклонить от намеченной ими цели.</li>
                <li>
                    Цель и детали. Добросовестные люди предпочитают хорошо продуманные действия, они хорошие
                    организаторы, архивариусы и систематизаторы, но детали их слишком поглощают.
                </li>
                <li>
                    Предусмотрительность. Добросовестные типы всегда стараются расчистить поле деятельности
                    вокруг себя и редко допускают серьезные эксцессы.
                </li>
                <li>
                    Аккумуляция. Добросовестные типы никогда не забывают как положительные, так и отрицательные
                    моменты, происходящие в общении с людьми, и вряд ли что-нибудь кому-нибудь могут простить.
                </li>
            </ol>

            <h3>Взаимоотношения с другими типами</h3>
            <p>
                Хотя Добросовестные люди не склонны делиться своими чувствами, они вовсе не против чувств и их
                выражения другими людьми. Добросовестные люди часто хорошо сочетаются с сильными
                Драматическими личностями наиболее эмоциональными и экспансивными в сравнении с другими
                типами. Их экспрессивность позволяет Добросовестным людям обрести эмоциональную свободу,
                которой им так не хватает. Драматические же партнеры, в свою очередь, могут у них научиться
                сдерживанию чувств и рациональности, которые им очень пригодятся в жизни. Этот союз может быть
                очень продуктивным, если Добросовестный партнер научится выдавливать из себя хотя бы изредка
                признания в любви, а Драматическому удастся отказаться от проявлений аффектации.
            </p>
            <p>
                Также Добросовестные люди часто ценят способность рисковать, присущую Авантюрному типу
                личности, конечно, если тот проявляется в умеренной форме. Умеренно Чувствительные типы тоже
                могут быть привлекательными для них. Отношения с Преданными типами оказываются очень
                устойчивыми. Отношения между двумя Добросовестными партнёрами обычно стоятся на
                взаимоуважении, но могут быть испорчены, если они не откажутся от соперничества друг с другом.
            </p>
            <p>
                Очень Добросовестные личности обычно плохо уживаются с Самоуверенными и Бдительными типами,
                так как каждый из них требует, чтобы все происходило по его усмотрению, их негибкость в
                отношениях обязательно приведет к противостоянию с Добросовестной личностью.
            </p>
            <p>
                Расстройство личности - <strong>ананкастное (обсессивно-компульсивное)</strong>. Различие
                между Добросовестным типом и ОКР - в действительности, в степени проявлений. Люди, страдающие
                этим расстройством, до такой степени добросовестны, что не могут адаптироваться к требованиям
                реальной жизни и устоять перед личными или профессиональными поражениями.
            </p>

            <h3>Признаки ананкастного расстройства личности:</h3>
            <p>
                «Первазивный образец озабоченности порядком, совершенностью, умственным и внутренним контролем
                в ущерб гибкости, открытости, эффективности начинается в ранней молодости и выражается в
                следующих контекстах:
            </p>
            <ol>
                <li>
                    Озабоченность деталями, правилами, списками, порядком, организацией, расписанием до такой
                    степени, что теряется цель всей деятельности.
                </li>
                <li>
                    Стремление к совершенству мешает довести дело до конца (например, человек не способен
                    завершить какой-либо проект, так как еще не встречал в этой области сверхсовершенных
                    стандартов).
                </li>
                <li>
                    Излишне посвящает себя работе (не оправданной экономической необходимостью в ущерб досугу и
                    дружбе).
                </li>
                <li>Сверхдобросовестный, скрупулезный, негибкий в вопросах морали, этики.</li>
                <li>
                    Неспособность выбрасывать устаревшие бесполезные вещи, даже если с ними не связаны никакие
                    сентиментальные воспоминания.
                </li>
                <li>
                    Отказывают передать часть работы другим людям, пока те не убедят, что будут выполнять ее в
                    точности таким же образом.
                </li>
                <li>
                    Скупой и экономичный в средствах, не тратит деньги ни на себя, ни на близких людей, деньги
                    накапливает на случай будущей катастрофы.
                </li>
            </ol>
        </Container>
    );
}

Conscientious.propTypes = {
    score: PropTypes.arrayOf(PropTypes.number),
};

Conscientious.defaultProps = {
    score: null,
};

const mapStateToProps = (state) => ({
    score: state.omScore.score,
});

export default connect(mapStateToProps)(Conscientious);
