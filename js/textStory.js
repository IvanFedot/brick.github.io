const html = document.body;
const block = document.querySelectorAll(".Box");
const Text = document.getElementById("Text");

const Text1 = 
    "Здравствуйте! Сегодня мы рассмотрим мою будущую профессию, которая имеет много направленностей и возможностей. " +
    "Сейчас я говорю про дизайнера. Я считаю, что человек, работающий дизайнером, нужен (почти) всем компаниям. " +
    "Это очень творческая и интересная работа. Поэтому я хочу рассказать о ней и поделиться с вами хотя бы парами крупицами информации о этой профессии и её видах. Ну, давайте же начнём!";


    
for(let i = 0; i < 7; i++) {
    block[i].onclick = () => {
        html.classList.toggle("scroll")
        switch(i) {
            case 0:
                console.log(Text1)
                break
            case 1:
                console.log(123)
                break
            case 2:
                console.log(321)
                break
            case 3:
                console.log(321)
                break
            case 4:
                console.log(321)
                break
            case 5:
                console.log(321)
                break
            case 6:
                console.log(321)
                break
        } 
    }
}