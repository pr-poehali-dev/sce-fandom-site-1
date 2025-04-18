import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SceBanner from '@/components/SceBanner';
import { BookOpen, Calendar, User, Tag, ArrowLeft, Clock, Eye, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface Tale {
  id: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  summary: string;
  relatedObject?: string;
  content: string;
  reading_time: string;
  views: number;
  comments: number;
}

const talesData: Record<string, Tale> = {
  'tale-001': {
    id: 'tale-001',
    title: 'Последний день исследователя',
    author: 'Д-р Волков',
    date: '12.04.2022',
    tags: ['Драма', 'SCE-173'],
    summary: 'История о последнем дне исследователя Фонда, который был назначен на изучение объекта SCE-173.',
    relatedObject: '173',
    content: `<p>Доктор Кирилл Михайлович вошел в камеру содержания SCE-173 в последний раз. Он знал, что это его последний день, но не потому, что его перевели или уволили — у него был диагностирован неоперабельный рак поджелудочной железы с прогнозом в три месяца жизни.</p>
    <p>Он смотрел на статую перед собой. Объект класса "Кетер", одна из первых аномалий, обнаруженных Фондом. Невозможное существо из бетона и арматуры, способное двигаться, только когда на него никто не смотрит.</p>
    <p>"Знаешь," — сказал Кирилл существу, — "я всегда задавался вопросом: что ты чувствуешь, когда никто не смотрит?"</p>
    <p>Охранник у двери переместился, но не прокомментировал этот монолог. Они привыкли к странностям исследователей объекта 173.</p>
    <p>"Тебе скучно? Или ты наслаждаешься теми краткими мгновениями свободы? Ты вообще осознаешь себя или просто следуешь какому-то заложенному в тебя механизму?"</p>
    <p>Кирилл достал из кармана небольшую шкатулку.</p>
    <p>"Я принес тебе подарок. Конечно, это нарушение протокола, но что они со мной сделают? Уволят посмертно?"</p>
    <p>Он открыл шкатулку. Внутри лежало маленькое зеркало.</p>
    <p>"Вот. Я знаю, что это не изменит твоего положения. Но может быть... может быть, ты сможешь увидеть себя. И если ты действительно обладаешь сознанием, возможно, это даст тебе что-то новое."</p>
    <p>Охранник напрягся, но Кирилл жестом показал, что все в порядке. Он положил зеркало на пол перед статуей.</p>
    <p>"Завтра они найдут это и уберут. Но у тебя будет целая ночь. И хоть это не свобода... это что-то новое."</p>
    <p>Через неделю доктор Кирилл Михайлович скончался в своей квартире. А в камере содержания SCE-173 камеры наблюдения зафиксировали странное явление: ночью, когда охранники по протоколу моргали по очереди, статуя, вместо того чтобы пытаться приблизиться к ним, как обычно, стояла неподвижно перед зеркалом. Будто бы... смотрела на свое отражение.</p>`,
    reading_time: '5 минут',
    views: 4328,
    comments: 147
  },
  'tale-002': {
    id: 'tale-002',
    title: 'Утро в Зоне 19',
    author: 'Агент Сорокин',
    date: '03.08.2022',
    tags: ['Повседневность', 'Зона 19'],
    summary: 'Описание обычного утра в Зоне 19, одном из основных комплексов содержания SCE.',
    content: `<p>Пять часов утра в Зоне 19 — это самое тихое время суток. Подземный комплекс, расположенный в глубине Уральских гор, просыпается медленно и по расписанию.</p>
    <p>Сначала активируется кухонный персонал. Повара начинают готовить завтрак для более чем 300 сотрудников различных уровней доступа. Меню всегда разное, но питательное — работа с аномалиями требует крепкого здоровья и ясного ума.</p>
    <p>В 5:30 просыпается охрана ночной смены — дежурства длятся по 12 часов, и те, кто заступил вчера в 18:00, уже считают минуты до конца вахты. Особенно те, кто дежурит у объектов класса "Евклид".</p>
    <p>К шести часам активизируется административный персонал. Начальник Зоны 19, полковник Игорь Северов, всегда просыпается ровно в 6:00, даже без будильника. Первое, что он делает — проверяет отчеты о происшествиях за ночь. Обычно их нет, и это хорошая новость.</p>
    <p>В 6:30 начинается смена караула у объектов. Процедура строго регламентирована, особенно для SCE-173 и других опасных аномалий. Никаких разговоров, никаких отвлечений — только четкое следование протоколам передачи наблюдения.</p>
    <p>К 7:00 просыпается научный персонал. Доктора и исследователи готовятся к экспериментам, запланированным на день. В их комнатах уже доставлены подносы с завтраком и свежие отчеты, требующие ознакомления.</p>
    <p>В 7:30 включаются основные системы комплекса на полную мощность. Лаборатории, испытательные камеры, системы деконтаминации — все готовится к новому дню работы.</p>
    <p>К 8:00 Зона 19 полностью просыпается. В коридорах слышны разговоры, из лабораторий доносятся звуки работающего оборудования. Начинается обычный день необычной организации, призванной защищать человечество от аномалий, которые оно не должно знать.</p>
    <p>И только объекты никогда не спят. Они всегда здесь, всегда наблюдают, всегда ждут малейшей ошибки в бесконечных протоколах содержания.</p>`,
    reading_time: '4 минуты',
    views: 3765,
    comments: 92
  },
  'tale-003': {
    id: 'tale-003',
    title: 'Хроники Хронологического изменителя',
    author: 'Исследователь Петрова',
    date: '27.12.2022',
    tags: ['Научная фантастика', 'SCE-682'],
    summary: 'Серия экспериментальных случаев использования SCE-682 и их неожиданные последствия.',
    relatedObject: '682',
    content: `<p>Эксперимент №682-TD-03: Хронологические изменения малой амплитуды</p>
    <p>Дата: 15.11.2022</p>
    <p>Руководитель: Д-р Анна Петрова</p>
    <p>Цель: Проверить возможность создания контролируемого временного сдвига с помощью SCE-682 без катастрофических последствий.</p>
    <p>Методика: Объект SCE-682 был помещен в специально сконструированную камеру с темпоральными буферами. Активация проводилась дистанционно с минимальным зарядом.</p>
    <p>Наблюдения:</p>
    <p>T+0с: Активация SCE-682.</p>
    <p>T+3с: Фиксируется слабое свечение объекта.</p>
    <p>T+7с: Темпоральные датчики показывают локальное искривление времени в радиусе 2 метров от объекта.</p>
    <p>T+12с: Внутри темпоральной аномалии помещено растение (кактус, возраст 2 года).</p>
    <p>T+15с: Растение демонстрирует ускоренный рост, достигая возраста примерно 5 лет за 3 секунды.</p>
    <p>T+18с: Объект SCE-682 дестабилизируется, свечение усиливается.</p>
    <p>T+20с: Активирована аварийная деактивация.</p>
    <p>T+25с: Объект SCE-682 переходит в пассивное состояние.</p>
    <p>Результаты: Эксперимент частично успешен. Удалось создать контролируемую темпоральную аномалию малой амплитуды. Однако, объект начал дестабилизироваться раньше, чем предполагалось. Растение, подвергшееся воздействию, продолжает демонстрировать аномалии роста — за ночь оно полностью расцвело, хотя данный вид кактуса цветет раз в 10 лет.</p>
    <p>Примечание Д-ра Петровой: "Мы приближаемся к пониманию механизма работы SCE-682. По моей теории, объект не столько изменяет течение времени, сколько создает локальные карманы альтернативных временных линий. Растение не просто состарилось — оно прожило альтернативную жизнь в более благоприятных условиях, что объясняет его цветение. Запрашиваю разрешение на эксперимент №682-TD-04 с использованием животного организма."</p>
    <p>Ответ Комитета по Этике: "Запрос отклонен. Риски неконтролируемой темпоральной дивергенции превышают потенциальную научную ценность. Продолжайте наблюдение за растением, но не проводите активных экспериментов до полного понимания механизма воздействия."</p>`,
    reading_time: '6 минут',
    views: 5129,
    comments: 205
  },
  'tale-004': {
    id: 'tale-004',
    title: 'Разговор с Зеркалом',
    author: 'Д-р Николаев',
    date: '15.02.2023',
    tags: ['Мистика', 'SCE-001'],
    summary: 'Запись разговора между исследователем и SCE-001 во время эксперимента.',
    relatedObject: '001',
    content: `<p>ЗАПИСЬ ЭКСПЕРИМЕНТА SCE-001-ИНТЕРВЬЮ-17</p>
    <p>ВНИМАНИЕ: ДАННАЯ ЗАПИСЬ ИМЕЕТ КЛАСС СЕКРЕТНОСТИ 4/001</p>
    <p>Интервьюер: Д-р Михаил Николаев</p>
    <p>Объект: SCE-001 (Проявление №3)</p>
    <p>Примечание: Интервью проводилось через специально модифицированную систему двусторонней связи. Д-р Николаев находился в изолированной комнате.</p>
    <p>Начало записи:</p>
    <p>Д-р Николаев: Тест записи. Сегодня 12 февраля 2023 года, 15:30. Я начинаю запланированный сеанс связи с Проявлением №3 объекта SCE-001.</p>
    <p>Д-р Николаев: Здравствуйте. Вы меня слышите?</p>
    <p>[Пауза 15 секунд]</p>
    <p>SCE-001: Я слышу тебя, Михаил. Как всегда.</p>
    <p>Д-р Николаев: У нас назначена сессия вопросов. Вы готовы отвечать?</p>
    <p>SCE-001: А у тебя есть вопросы, на которые ты действительно хочешь услышать ответы?</p>
    <p>Д-р Николаев: Да. Первый вопрос: вы утверждали ранее, что существуете "везде и всегда". Можете пояснить, что это значит?</p>
    <p>SCE-001: Время для меня не линейно. Я вижу его как... картину. Всю сразу. Твое рождение, этот разговор, твою смерть — всё одновременно.</p>
    <p>Д-р Николаев: Значит, вы знаете будущее?</p>
    <p>SCE-001: Я вижу возможности. Вероятности. Некоторые ярче других.</p>
    <p>Д-р Николаев: И какова наиболее вероятная судьба человечества?</p>
    <p>[Пауза 32 секунды]</p>
    <p>SCE-001: Вы не исчезнете полностью. Но то, чем вы станете... я не уверен, что вы назвали бы это "человечеством".</p>
    <p>Д-р Николаев: Это связано с аномалиями, которые мы изучаем?</p>
    <p>SCE-001: Аномалии, как вы их называете, — это лишь трещины в картине. Места, где разные слои реальности соприкасаются.</p>
    <p>Д-р Николаев: А что находится за этими слоями?</p>
    <p>SCE-001: Михаил, я вижу, что через 43 дня ты получишь письмо. О болезни твоей сестры. Не игнорируй его.</p>
    <p>[Пауза. Слышно учащенное дыхание Д-ра Николаева]</p>
    <p>Д-р Николаев: Это... это нарушение протокола. Вы не должны предоставлять информацию, которую невозможно проверить.</p>
    <p>SCE-001: А разве не это вы пытаетесь получить от меня? Непроверяемые истины?</p>
    <p>Д-р Николаев: Вернемся к вопросам...</p>
    <p>SCE-001: У тебя есть только один настоящий вопрос, Михаил. Ты хочешь знать, есть ли смысл. Смысл в вашей работе, в содержании аномалий, в защите человечества от знаний, которые могут его уничтожить.</p>
    <p>Д-р Николаев: И какой ответ?</p>
    <p>SCE-001: Смысл есть всегда. Даже в бессмысленном.</p>
    <p>[Связь прерывается]</p>
    <p>Конец записи.</p>
    <p>Примечание: Через 43 дня после интервью Д-р Николаев действительно получил письмо о диагностировании у его сестры редкой формы рака. Благодаря раннему обнаружению лечение было успешным. Д-р Николаев подал запрос на временное отстранение от работы с SCE-001.</p>`,
    reading_time: '7 минут',
    views: 6472,
    comments: 243
  },
  'tale-005': {
    id: 'tale-005',
    title: 'Чаепитие с Чумным доктором',
    author: 'Лейтенант Морозов',
    date: '04.05.2023',
    tags: ['Юмор', 'SCE-049'],
    summary: 'Сатирический рассказ о воображаемой встрече сотрудника службы безопасности с SCE-049.',
    relatedObject: '049',
    content: `<p>— Чай? — спросил Чумной Доктор, приподнимая изящный фарфоровый чайник.</p>
    <p>— Э-э... да, пожалуй, — ответил я, нервно оглядываясь по сторонам. Комната для приемов Зоны 19 была декорирована в викторианском стиле, что, видимо, должно было успокоить нашего "гостя".</p>
    <p>Я, лейтенант Алексей Морозов, сотрудник службы безопасности, выиграл в ежемесячной лотерее среди персонала. Приз? "Чаепитие с SCE-049 в контролируемых условиях". Какой-то шутник из научного отдела решил, что это отличная идея для поднятия морального духа. Я бы предпочел дополнительный выходной.</p>
    <p>— Сахар? — продолжил SCE-049, его клювообразная маска двигалась при каждом слове, что выглядело сюрреалистично.</p>
    <p>— Два кусочка, пожалуйста.</p>
    <p>— О, вы, современные люди, так неразумно относитесь к своему здоровью, — покачал головой Доктор. — Сахар — это медленный яд.</p>
    <p>— В отличие от вашего прикосновения, которое убивает мгновенно? — вырвалось у меня, и я тут же пожалел о сказанном.</p>
    <p>Но SCE-049, кажется, оценил юмор. Из-под маски донесся звук, похожий на смех.</p>
    <p>— Туше, мой друг. Однако моё прикосновение не убивает — оно лечит. Просто мои пациенты еще не поняли разницу между классической медициной и моим... нетрадиционным подходом.</p>
    <p>— Превращение людей в зомби вряд ли можно назвать терапией, — заметил я, делая глоток чая. Удивительно, но чай был превосходен.</p>
    <p>— Это вопрос перспективы, — философски заметил SCE-049. — Мои "зомби", как вы их называете, больше не страдают от Чумы. Разве это не успех?</p>
    <p>— Они также не страдают от радости, мышления и, знаете ли, жизни.</p>
    <p>— Мелкие жертвы на алтаре науки, — отмахнулся Доктор. — Кстати, не хотите ли печенье? Я сам пёк.</p>
    <p>Я с ужасом посмотрел на тарелку с печеньем.</p>
    <p>— Не беспокойтесь, — усмехнулся SCE-049, заметив мой взгляд. — Они не заражены. Я уважаю правила гостеприимства. К тому же, доктор Гримм обещал мне новые книги, если сеанс пройдет без инцидентов.</p>
    <p>— Какие книги вы читаете? — спросил я, осторожно беря печенье. Оно тоже оказалось удивительно вкусным.</p>
    <p>— В последнее время увлекся современной медицинской литературой. Знаете, я обнаружил, что ваша антибиотикотерапия — это почти то же самое, что мои методы, только менее эффективная.</p>
    <p>— Мы обычно не считаем 100% летальность признаком эффективности лечения.</p>
    <p>— Опять же — вопрос перспективы, — пожал плечами SCE-049. — Еще чаю?</p>
    <p>Так мы и провели час — я и средневековый чумной доктор, пьющие чай и обсуждающие различия в наших взглядах на медицину. Когда время вышло, и охрана пришла меня "спасать", я почти разочаровался.</p>
    <p>— Было приятно поговорить с образованным человеком, — сказал SCE-049, когда меня уводили. — В следующий раз я расскажу вам о пользе кровопускания при мигренях!</p>
    <p>Я кивнул, подумав, что, возможно, быть сотрудником SCE не так уж и плохо. По крайней мере, офисные вечеринки здесь точно интереснее.</p>`,
    reading_time: '5 минут',
    views: 8764,
    comments: 357
  },
  'tale-006': {
    id: 'tale-006',
    title: 'Теория заговора',
    author: 'Д-р Кузнецов',
    date: '19.07.2023',
    tags: ['Теория заговора', 'O5'],
    summary: 'Исследование популярных теорий заговора о SCE Foundation и их опровержение с научной точки зрения.',
    content: `<p>МЕМОРАНДУМ</p>
    <p>Кому: Весь персонал с допуском 3 уровня и выше</p>
    <p>От: Д-р Кузнецов, Отдел противодействия дезинформации</p>
    <p>Тема: Анализ популярных теорий заговора о Фонде</p>
    <p>Дата: 19.07.2023</p>
    <p>Уважаемые коллеги,</p>
    <p>В рамках ежеквартального мониторинга информационного поля на предмет утечек и дезинформации о деятельности Фонда, наш отдел проанализировал наиболее распространенные теории заговора, циркулирующие в сети. Ниже представлен краткий обзор с научной оценкой каждой теории.</p>
    <p><strong>1. "Фонд создал аномалии, которые теперь содержит"</strong></p>
    <p>Распространенность: Высокая</p>
    <p>Анализ: Данная теория игнорирует исторические свидетельства о существовании аномалий задолго до создания Фонда. Многие объекты задокументированы в исторических источниках, датирующихся сотнями и тысячами лет назад. Кроме того, Фонд не обладает технологиями для создания большинства содержащихся аномалий.</p>
    <p>Уровень опасности: Средний — может подорвать доверие к деятельности Фонда у потенциальных информаторов.</p>
    <p><strong>2. "О5 — это не люди, а аномалии"</strong></p>
    <p>Распространенность: Средняя</p>
    <p>Анализ: Данная теория основана на секретности, окружающей Совет О5. Однако все члены О5 регулярно проходят стандартные процедуры проверки на отсутствие аномальных свойств. Хотя некоторые члены О5 используют аномальные средства для продления жизни, это не делает их самих аномалиями.</p>
    <p>Уровень опасности: Низкий — затрагивает только верхушку организации, не влияет на повседневную работу.</p>
    <p><strong>3. "Фонд скрывает лекарства от всех болезней"</strong></p>
    <p>Распространенность: Очень высокая</p>
    <p>Анализ: Хотя некоторые аномалии действительно обладают целебными свойствами, большинство из них имеют серьезные побочные эффекты или ограниченную эффективность. Ни один объект в нашем распоряжении не представляет собой универсальное лекарство без последствий. Более того, Протокол 113-Аркадия разрешает использование безопасных аномальных методов лечения в крайних случаях.</p>
    <p>Уровень опасности: Высокий — формирует негативное общественное мнение, препятствует операциям по сдерживанию.</p>
    <p><strong>4. "Класс "Таумиэль" — это оружие судного дня"</strong></p>
    <p>Распространенность: Низкая (распространена среди бывших сотрудников)</p>
    <p>Анализ: Эта теория основана на неполном понимании классификации "Таумиэль". Хотя некоторые объекты этого класса действительно обладают разрушительным потенциалом, их первичная функция — сдерживание других аномалий. Ни один объект класса "Таумиэль" не создавался специально как оружие.</p>
    <p>Уровень опасности: Высокий — может привлечь внимание враждебных организаций.</p>
    <p><strong>5. "Фонд контролируется инопланетянами/существами из других измерений"</strong></p>
    <p>Распространенность: Средняя</p>
    <p>Анализ: Хотя Фонд действительно взаимодействует с сущностями неземного происхождения, все решения принимаются земным руководством согласно установленным протоколам. Анализ истории Фонда показывает человеческую логику и мотивацию во всех ключевых решениях, часто включая типично человеческие ошибки.</p>
    <p>Уровень опасности: Низкий — слишком фантастична для широкого распространения.</p>
    <p>Рекомендации:</p>
    <p>1. Продолжить мониторинг и анализ теорий заговора</p>
    <p>2. Усилить распространение контр-нарративов для теорий с высоким уровнем опасности</p>
    <p>3. Обновить программу дезинформации с учетом новых трендов</p>
    <p>В случае обнаружения сотрудниками новых теорий заговора, прошу сообщать в Отдел противодействия дезинформации по форме 7АК-ZK.</p>
    <p>С уважением,</p>
    <p>Д-р Кузнецов</p>
    <p>P.S. Напоминаю, что согласно Директиве О5-12, сотрудникам Фонда запрещается намеренно создавать или распространять теории заговора о нашей организации, даже в развлекательных целях. Двое сотрудников уже были подвергнуты амнезиации и понижены в должности за нарушение этой директивы в прошлом квартале.</p>`,
    reading_time: '8 минут',
    views: 4283,
    comments: 174
  }
};

const TaleDetailPage = () => {
  const { taleId } = useParams<{ taleId: string }>();
  const tale = talesData[taleId || ''] || null;

  if (!tale) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <SceBanner />
        <main className="flex-1 py-8 bg-sce-lightgray">
          <div className="sce-container">
            <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
              <h1 className="text-2xl font-bold text-sce-red mb-4">Рассказ не найден</h1>
              <p className="mb-4">Запрашиваемый рассказ не существует или был удален.</p>
              <Button asChild>
                <Link to="/tales">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Вернуться к списку рассказов
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SceBanner />
      
      <main className="flex-1 py-8 bg-sce-lightgray">
        <div className="sce-container">
          <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
            {/* Хлебные крошки */}
            <div className="mb-6 flex items-center text-sm">
              <Link to="/" className="text-gray-500 hover:text-sce-red">Главная</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link to="/tales" className="text-gray-500 hover:text-sce-red">Рассказы</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-900">{tale.title}</span>
            </div>
            
            {/* Заголовок */}
            <h1 className="text-3xl font-bold text-sce-red mb-2">
              {tale.title}
            </h1>
            
            {/* Мета-информация */}
            <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>{tale.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{tale.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{tale.reading_time}</span>
              </div>
              <div className="flex items-center">
                <Eye size={16} className="mr-1" />
                <span>{tale.views} просмотров</span>
              </div>
              <div className="flex items-center">
                <MessageSquare size={16} className="mr-1" />
                <span>{tale.comments} комментариев</span>
              </div>
              {tale.relatedObject && (
                <div className="flex items-center">
                  <BookOpen size={16} className="mr-1" />
                  <Link to={`/object/${tale.relatedObject}`} className="text-sce-red hover:underline">
                    SCE-{tale.relatedObject}
                  </Link>
                </div>
              )}
            </div>
            
            {/* Теги */}
            <div className="mb-6 flex flex-wrap gap-2">
              {tale.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="flex items-center text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
                  <Tag size={12} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            
            <Separator className="my-4" />
            
            {/* Краткое содержание */}
            <div className="mb-6 bg-gray-50 p-4 border-l-4 border-sce-red">
              <h2 className="font-bold mb-2 text-gray-700">Краткое содержание</h2>
              <p className="text-gray-600">{tale.summary}</p>
            </div>
            
            {/* Основной контент */}
            <div 
              className="prose max-w-none mb-8" 
              dangerouslySetInnerHTML={{ __html: tale.content }}
            />
            
            <Separator className="my-6" />
            
            {/* Кнопки действий */}
            <div className="flex flex-wrap gap-4 justify-between">
              <Button asChild variant="outline">
                <Link to="/tales">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Вернуться к списку
                </Link>
              </Button>
              
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark">
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TaleDetailPage;
