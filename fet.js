const quiz = confirm("есть ли вам 18 лет?");
if (quiz){

    const questionOne = prompt("Во сколько вы встаете?")

    const number = Number(questionOne);

    if(questionOne !== null && !isNaN(number)) {

            
            if(number <= 5) {

                alert("Очень рано")

            } else if (number > 5 && number <= 8) {
                
                alert("Всё равно рано")

            } else if (number > 8 && number <= 11) {

                alert("Нормально")

            } else if (number > 11 && number <= 14) {

                alert("Слишком поздно")

            } else if (number > 14 && number <= 24) {

                alert("Очень-очень поздно")

            } else {

                alert("Научись пользоваться часами!")

            }
        
    } else {

        alert("Введите число")

    }

} else {

    alert('Вам запрещено проходить опрос')

}