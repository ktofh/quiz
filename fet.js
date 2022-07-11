const cot = confirm("есть ли вам 18 лет?");
if (cot == false){
    alert('Вам запрещено проходить опрос')
};
const ger =prompt('Во сколько вы встаете');
if (ger ===1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 14, 15 , 16, 17 ,18 , 19, 20, 21, 22 , 23, 24){
    true
}else{
    alert('некорректный ввод')
}
if (ger<5){
    alert("Очень рано")
}else if (5>ger && ger>8){
    alert("Всё равно рано")
}else if (8>ger && ger>11){
    alert("Нормально")
}else if (11>ger && ger>14){
    alert("Слишком поздно")
}else if (14>ger){
   alert("Очень-очень поздно")
}

