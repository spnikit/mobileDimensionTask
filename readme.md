## Бонусные вопросы

1. Расскажите почему код ниже вернет значение <i>"10"</i>? И да, там две точки :) </p>
		<pre>
2..toString(2);

Ответ: 2 точки, т.к. первая точка означает, что число не decimal, а уже float, вторая же точкая вызывает boxing и таким образом примитив превращается в объект, у которого мы можем вызывать методы, в том числе и toString(). Передавая же в метод toString() аргумент 2, мы заставляем число 2 преобразоваться в строку, отображающую число 2 по двоичному исчислению, т.е. 10.

2. Объясните почемуот перестановки слагаемых сумма меняется на примере двух вариантов ниже? 
{} + []
и
[] + {}

Ответ: В случае, когда первым стоит объект {}, он воспринимается, как пустой блок, а не объект, и потому игнорируется. 
