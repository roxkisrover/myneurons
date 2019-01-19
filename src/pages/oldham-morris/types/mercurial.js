import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Icon, Divider } from 'antd';
import { connect } from 'react-redux';
import Container from '../../../components/Container';
import CombChart from '../../../components/CombChart';

const Mercurial = ({ score }) => (
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
        <span>Деятельный</span>
      </Breadcrumb.Item>
    </Breadcrumb>

    <Divider />

    <h1 style={{ textAlign: 'center' }}>Деятельный тип личности</h1>

    {score && <CombChart data={score} />}

    <h2>Огонь и лед</h2>
    <p>
      Если вам приходится близко общаться с человеком, в характере которого преобладает Деятельный
      тип, то, вероятно, вы испытали на себе активность этих людей. Они не могут сидеть на месте и
      не дают этого другим. Они будут настаивать, чтобы вы отправились с ними в путешествие, они
      постоянно в поисках новых впечатлений во всем, они постоянно ищут новые стили жизни, новую
      любовь. Никакой другой тип, даже Драматический, не может быть настолько горячим в своем
      желании соединиться с жизнью и с другими людьми. Никакой другой тип не может быть настолько
      переменчивым в настроениях, настолько жаждущим.
    </p>
    <p>
      Следующие семь признаков и поведенческих особенностей свидетельствуют о наличии в характере
      Деятельного типа личности; чем больше особенностей поведения будет совпадать, тем выше уровень
      этого типа в вашем «Автопортрете личности», и наоборот.
    </p>
    <ol>
      <li>
        Романтическая привязанность. Деятельные люди должны быть вовлечены в глубокие романтические
        отношения с одним человеком.
      </li>
      <li>
        Интенсивность. Они всегда сосредоточены на том, что происходит во всех отношениях. Все, что
        происходит между ними и другими людьми, не может быть принято ими легко.
      </li>
      <li>
        Душа. Они демонстрируют свои чувства. Они эмоциональны, импульсивны и живо на все реагируют,
        можно сказать, что Деятельный человек - это душа без оболочки.
      </li>
      <li>Неограниченность. У них нет ограничений в любви, забавах, риске.</li>
      <li>
        Активность. Энергичность отличает этот тип, такие люди всегда оживлены, заняты, творчески
        активны, увлечены. Они проявляют инициативу и могут также заражать других своей активностью.
      </li>
      <li>
        Распространенное мнение. Они чрезвычайно любопытны, поэтому живо всем интересуются,
        постоянно экспериментируют с другими культурами, ролями, системами ценностей, постоянно в
        поисках нового.
      </li>
      <li>
        Пути для отступления. Люди с преобладанием Деятельного типа прекрасно чувствуют, когда нужно
        отступить, и стараются уйти от действительности, когда она начинает становиться болезненной
        и резкой.
      </li>
    </ol>

    <h3>Взаимоотношения с другими типами</h3>
    <p>
      Обычно очень Деятельный человек с трудом выдерживает длительные отношения. Деятельные личности
      очень горячие, но быстро обжигаются или сгорают. Так же, как и для Драматического типа, самый
      удачный союз может получиться с трезвым, устойчивым, ответственным Добросовестным типом. Но в
      отличие от Драматического типа Деятельному гораздо сложнее заключить такой союз, так как
      Добросовестные люди не часто бывают потрясены, фейерверками.
    </p>
    <p>
      Деятельные люди нуждаются в сильных, интересных, волнующих, романтичных, другими словами, в
      прекрасном принце или принцессе, соответствующих всем их требованиям. Их проблема состоит в
      поиске длительных отношений, но идеального союза для таких людей не существует. Деятельные
      личности могут найти «себе краткий, но красивый союз.
    </p>
    <p>
      Авантюрные личности могут сильно увлечь их, но при этом они не соответствуют требованиям
      Деятельных личностей, зато как временные партнеры они великолепны. Два Деятельных человека
      могут великолепно провести время, но слишком много волнений также им может повредить.
      Драматические личности требуют слишком много внимания, поэтому также не долговременен будет
      такой брак.
    </p>
    <p>
      Если Деятельный партнер хочет найти себе спутника жизни, то ему более подойдет человек не
      слишком романтичный и эмоциональный. Ищите кого-нибудь хотя бы немного Добросовестного.
      Бдительный человек может дать вам эмоциональный отдых. Идеосинкратический тип вполне может
      быть приемлемым для вас, если допустит вас в свой нереальный мир, вы очень отличаетесь, но это
      может быть залогом длительных уникальных отношений.
    </p>
    <p>
      Брак с Чувствительные человеком может удивить вас длительностью, ведь Чувствительные люди
      слишком толерантны, они также нуждаются в супругах, которые могли бы сделать доступным для НИХ
      мир других людей, что вполне вам по силам.
    </p>
    <p>
      Расстройство личности - <strong>эмоционально-неустойчивое</strong>.
    </p>
    <p>
      Неуравновешенность, гнев, самоуничижение, беспокойство, неуверенность, опустошенность, сильное
      саморазрушение — все это чувства людей, страдающих эмоционально-неустойчивым расстройством
      личности. Они отчаянные, импульсивные и неуравновешенные. Они не могут использовать свои
      способности, их ужасает одиночество, они разрушают отношения, без которых не могут жить. Тот,
      кто имеет это расстройство, постоянно испытывает невозможные душевные мучения, а те, кто
      находится рядом с ними, все равно, что в ловушке, и вынуждены терпеть их.
    </p>

    <h3>В DSМ-IV это расстройство личности описано таким образом:</h3>
    <p>
      Образец первазивной неустойчивости межабонентских отношений, характерный чрезмерной
      импульсивностью, развивающийся в раннем взрослом возрасте и представленный в разнообразии
      нижеследующих контекстов:
    </p>
    <ol>
      <li>Приложение неимоверных усилий, дабы избежать предполагаемого отказа.</li>
      <li>Неустойчивые интенсивные отношения с чередующимися сверхидеализацией и девальвацией.</li>
      <li>Переживания по поводу самоопределения. Заметное отсутствие устойчивого мнения о себе.</li>
      <li>
        Импульсивность и склонность к саморазрушению (например, секс, употребление наркотических
        веществ, безрассудство).
      </li>
      <li>Периодичное суицидальное поведение, жесты, угрозы, саморазрушительное поведение.</li>
      <li>
        Аффективная неустойчивость, зависимая от амплитуды настроения (например, эпизодическое
        дисфорическое настроение или беспокойство, продолжающееся от нескольких часов до нескольких
        дней).
      </li>
      <li>Хроническое чувство опустошенности.</li>
      <li>Интенсивный гнев или трудность в управлении гневом.</li>
      <li>
        Переходные процессы, связанные с напряжением. Параноидальные, а также диссоциативные
        признаки.
      </li>
    </ol>
    <p>
      Для тех, кто страдает этим расстройством личности, жизнь может быть невыносимой. Для них нет
      ничего постоянного, они отчаянно влюбляются, но вскоре страшно разочаровываются. Их горе
      безутешно, а счастье безмерно; если они любят, то как никогда в жизни, если ненавидят, то как
      никого на свете, и каждый раз с новой силой. Они живут для любви: или молятся и устилают
      дорогу цветами, или презирают и проходят, не зацепив взглядом. Они не могут найти себя,
      установиться в своих, привязанностях и твердых позициях и принципах; они ищут себя в религии и
      других подобных областях, но безрезультатно. Им кажется, что они опустошены и должны стать
      кем-то еще. «Кто я? Что я из себя представляю? О чем думаю? Что мне с собой делать?» Это
      вопросы, вечно волнующие таких людей.
    </p>
    <p>
      Их чувства, настроения, отношения с людьми - все противоречит друг другу. И они не могут
      покинуть этот замкнутый, круг. Люди с расстройством личности, страдающие активностью на грани
      срыва, видят все в черно-белом свете. Они не допускают различных оттенков, все люди для них
      делятся на плохих и хороших. Они нуждаются в любви постоянно, но находят не постоянство в
      любви. Они запутались в себе, минута размышлений им кажется вечностью. Чувство опустошенности
      не покидает их; они не могут быть в одиночестве, так как нуждаются в любви и защите, в
      признании того самого идеального человека. Но снова происходит срыв, и личность, терзаемая
      этим расстройством, снова пускается на поиски идеального партнера, снова ищет идеальной любви
      и понимания, а прежняя любовь становится объектом слепой ненависти или холодного равнодушия.
      Мир разрушается. И опять в душе осень, и все начинается сначала. Прежде чем подступить к
      своему новому предмету воздыханий, личность, страдающая активностью на грани срыва, начинает
      страшно бояться быть отвергнутой, впадает в отчаяние и бросается в ноги своей любви: «Не
      оставляйте меня! Я сделаю все, чтобы Вы были счастливы!» Иногда личность, страдающая
      активностью на грани срыва, идет на безумные жертвы ради своей новой любви, жалость к себе в
      ней борется с любовью.
    </p>
    <p>
      Находясь постоянно между черным и белым, личности, страдающие активностью на грани срыва,
      живут неполноценной жизнью, они чувствуют себя угнетенными, пессимистичными, несчастными, они
      не могут избавиться от отчаяния, беспокойства, дискомфорта, чувства вины. Иногда испытывают
      краткие эпизоды эйфории. Они не способны сохранять последовательность в чем-либо, не могут
      исходить из ранее полученного опыта. Они не могут предотвратить крушений, боли, разочарований
      и перепадов настроения. Они не знают, как оградить свои мысли от беспокойства и боли, не могут
      сосредоточиться на работе, хорошей книге, кинофильме. Вместо этого они пускаются в сексуальные
      приключения, употребляя наркотики.
    </p>
  </Container>
);

Mercurial.propTypes = {
  score: PropTypes.arrayOf(PropTypes.number),
};

Mercurial.defaultProps = {
  score: null,
};

const mapStateToProps = state => ({
  score: state.omScore.score,
});

export default connect(mapStateToProps)(Mercurial);