const html = document.body;
const block = document.querySelectorAll(".Box");
const text = document.getElementById("Text");
const panelWindow = document.getElementById("PanelWindow");
const panelBase = document.getElementById("PanelBase");
const panelText = document.getElementById("PanelText");
const arrowLeft = document.getElementById("ArrowLeft");
const arrowRight = document.getElementById("ArrowRight");
const character = document.getElementById("Character");
const close = document.getElementById("Close");
const wallGif = document.getElementById("WallGIF");
const audioVoice = document.getElementById("AudioVoice")

let panelType = 0;
let textPart = 0;

const textType0 = [
    "Здравствуйте! Сегодня мы рассмотрим мою будущую профессию, которая имеет много направленностей и возможностей. Сейчас я говорю про дизайнера.",
    "Я считаю, что человек, работающий дизайнером, нужен (почти) всем компаниям. Это очень творческая и интересная работа. Поэтому я хочу рассказать о ней и поделиться с вами хотя бы парами крупицами информации о этой профессии и её видах. Ну, давайте же начнём!"
];

const textType1 = [
    "Начнём сразу с чего-то более общего, здесь я расскажу чем впринципе занимаются дизайнеры и расскажу про графику на сайтах, приложениях и товарах в общем смысле. Кто такой графический дизайнер? Нет, скорее даже, что такое графика?",
    "Это первый вопрос, который можно задать, и я сразу же на него отвечу! Графика - это изображение на плоскости, ну почти. Вообще понятие графики очень размыто.",
    "Конечно если мы обратимся к википедии то это вид изобразительного искусства, в котором основными изобразительными средствами являются свойства изобразительной поверхности и тональные отношения линий штрихов и пятен.",
    "НЕВАЖНО! Просто держите в голове то, что графика - это изображение. То есть всё в мире может быть графикой, но если мы говорим про технологии, то это картинка на вашем экране.",
    "Допустим с этим разобрались, но кто такой графический дизайнер? А это уже человек, который занимается созданием хорошей и качественной картинки или объекта для ваших глазок. Плюс, он должен сделать также удобно и функционально.",
    "Допустим, чтобы сидеть на кресле ничего не должно припятствовать к этому, а великий дизайнер взял и поместил это кресло в ОЧЕНЬ красивую коробку. Теперь конечно кресло стало приятным для глаз, но где мне сидеть?",
    "На самом деле это раньше так называли дизайнеров с приставкой 'графический'. Просто из-за развития технологий теперь их просто кличут дизайнерами. Естественно графический дизайн понятие растяжимое, как и большинство работ. И все дизайнеры имеют очень много схожестей и не так много отличий.",
    "Существуют разные виды дизайнеров, которые занимаются определённой работой. Про них мы и поговорим."
];

const textType2 = [
    "И первое, про что я хочу поговорить - Моушн-дизайн. Задавайте вопрос. иии... Отвечаю! Моушн-дизайн - это создания анимации по принципам графического дизайна. То есть это анимация (Отсюда и название, берём английское слово motion и переводим, получим 'передвижение').",
    "Если ещё более понятней, то это анимация в которой играет роль не объект, а его взаимодействия в кадре (Допустим движение, падение, прыжок). Обычно это можно увидеть в рекламных роликах или в трейлерах к фильмам.",
    "Этими вещами и занимается моушн-дизайнер. Впринципе, это всё, что я хотел сказать. Движемся дальше!"
];

const textType3 = [
    "Ну и сразу же перемещаемся в 3д пространство! Как мы знаем, 3Д - это три измерения (Ну условные x y z). И когда люди научились создавать 3д объекты, то появились 3д дизайнеры. 3Д дизайнер - это как обычный графический дизайнер, только работающий с объектами в 3д ну или в объёме (особо разницы нет).",
    "Допустим (условно) вам нужна реклама вашего кирпича и, чтобы показать его со всех сторон и ответить на вопросы о том, как товар выглядит, вы делаете рекламу в 3д. Вообще, если грамотно использовать 3д, то можно добиться крутых результатов.",
    "В трёхмерном измерении дизайнер должен задумыватся не только о расположении объектов и их видовых свойствах, но и о освещении, расположении кадра и о глубине предметов на изображении. Такая работа чуть труднее, чем просто работать в одной плоскости, но и результат может получиться гораздо лучше.",
    "Естественно 3д и 2д подходят под разные задачи и друг друга они заменить не смогут. 3д - это работа с определённым объектом, 2д - это скорее про макеты с несколькими объектами (Конечно я очень упростил, но хотя бы такой пример).",
    "С этим разобрались, но если я вам скажу, что бывают дизайнеры, которые работают с восприятием от взаимодействия с целым продуманным миром? Что вы на это скажете?"
];

const textType4 = [
    "Чтож, быстрой справки, честно... Начнём! Game (с английского) - это игра. Но мы говорим не про настолки, а про видеоигры, то есть те, что запускаются и играются на всякой технике (типо телефона или компьютера). Всё! Справка окончена. Теперь можно ответить на вопросы именительного падежа.",
    "ГеймДизайнер - это человек, который занимается созданием видеоигр. Именно с него начинается код, музыка, сценариий и всё на свете для их игры мечты. Он по сути дела направляет всю команду разработчиков на путь, по которому они будут идти.",
    "Выбирает жанр, стиль и (иногда) игровые механики. Задаёт тонус игре, так сказать.",
    "Всё что он посчитал хорошей идеей собирается в дизайн-документ, на который будет опираться команда. То есть он занимается дизайном, но с которым ты можешь не только взаимодействовать глазами, но и руками.",
    "ГеймДизайнер делает так, чтобы твоё восприятие от игры было максимально комфортным, чтобы ты получил эмоции и полюбил их продукт (ну впринципе обычное дело дизайнера). Поэтому его и называют геймдизайнер.",
    "Гейм - потому что учавствует в разработке игр. Дизайнер - потому что задаёт тонус всему проекту (как упаковка молока задаёт тонус для твоего восприятия этого продукта).",
    "И прошу заметить! Все дизайнеры имеют много схожих характеристик, вы заметили? Если до сих пор не догоняете, то вот последний пример уж точно расставит всё на свои места."
];

const textType5 = [
    "Не затягиваю! Готовьте лоб. Архитектор-дизайнер занимается архитектурой и дизайном здания. То есть он создаёт планировку, стиль и масштаб здания. Грубо говоря, создаёт макет, по которому будут работать строители. Дизайнера не сильно волнует техническая часть здания, этим уже занимаются другие работники.",
    "В случае, если дизайнер напортачил, то ему вежливо об этом скажет кто-то другой, так как перед постройкой макету нужно пройти ещё рассмотр его коллегами и выявления в нём ошибок. Ну и всё! Уже дальше нечего рассказывать, потому что я уже всё перечислил.",
    "Думаю здесь уже ТОЧНО понятно, кто такие дизайнеры. Подведём итог:",
    "Дизайнер - это человек, который занимается созданием удобного и одновременно красивого объекта, здания или продукта. Именно с дизайнера, в большинстве своём, начинается проект. Он ему задаёт вектор, по которому он будет развиваться. Дизайнер - опора, от которой отталкивается весь коллектив."
];

const textType6 = [
    "Спасибо вам! Я смог поделиться с вами информацией, которую знаю, а вы меня выслушали (надеюсь). Теперь вы имеете представление о дизайнерах и их видах. Было приятно самому узнать много нового для себя. При создании сайта я также получил классный опыт и эмоции.",
    "Было приятно с вами, надеюсь ещё увидимся!"
];

for(let i = 0; i < 7; i++) {
    block[i].onclick = () => {
        html.classList.toggle("scroll")
        panelWindow.classList.add("visible")
        wallGif.src = "./material/WallClose.gif" 
        soundAudio()
        setTimeout(() => {
            panelBase.classList.add("visible")
            arrowLeft.classList.add("visible")
            arrowRight.classList.add("visible")
            character.classList.add("visible")
            close.classList.add("visible")
            switch(i) {
                case 0:
                    panelType = 0
                    text.innerHTML = textType0[0]
                    break
                case 1:
                    panelType = 1
                    text.innerHTML = textType1[0]
                    break
                case 2:
                    panelType = 2
                    text.innerHTML = textType2[0]
                    break
                case 3:
                    panelType = 3
                    text.innerHTML = textType3[0]
                    break
                case 4:
                    panelType = 4
                    text.innerHTML = textType4[0]
                    break
                case 5:
                    panelType = 5
                    text.innerHTML = textType5[0]
                    break
                case 6:
                    panelType = 6
                    text.innerHTML = textType6[0]
                    break
            }
        }, 2000);
    };
};

const soundAudio = () => {
    audioVoice.src = `./material/sound${panelType}.mp3`
}

const hi = setInterval(() => {
    !audioVoice.paused ? character.src = "./material/Talk.gif" : character.src = "./material/Idle.gif"
    console.log(123)
}, 1000)

const updateText = () => {
    switch(panelType) {
        case 0:
            text.innerHTML = textType0[textPart]
            break
        case 1:
            text.innerHTML = textType1[textPart]
            break
        case 2:
            text.innerHTML = textType2[textPart]
            break
        case 3:
            text.innerHTML = textType3[textPart]
            break
        case 4:
            text.innerHTML = textType4[textPart]
            break
        case 5:
            text.innerHTML = textType5[textPart]
            break
        case 6:
            text.innerHTML = textType6[textPart]
            break
    }
}

arrowLeft.onclick = () => {
    if(textPart >= 1) {
        textPart--
        updateText()
    }
}

arrowRight.onclick = () => {
    if(panelType == 0 && textPart < 1 || panelType == 1 && textPart < 7 || panelType == 2 && textPart < 2 || panelType == 3 && textPart < 4 || panelType == 4 && textPart < 6 || panelType == 5 && textPart < 3 || panelType == 6 && textPart < 1) {
        textPart++
        updateText()
    }
}

close.onclick = () => {
    character.src = "./material/Idle.gif"
    textPart = 0
    soundStatus = "pause"
    audioVoice.pause()
    panelBase.classList.remove("visible")
    arrowLeft.classList.remove("visible")
    arrowRight.classList.remove("visible")
    character.classList.remove("visible")
    close.classList.remove("visible")
    wallGif.src = "./material/WallOpen.gif"
    setTimeout(() => {
        panelWindow.classList.remove("visible")
        html.classList.toggle("scroll")
    }, 1000);
}