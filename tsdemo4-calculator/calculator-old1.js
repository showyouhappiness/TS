{
    //初始化数据
    var n1_1 = '';
    var n2_1 = '';
    var operator_1 = '';
    var result_1 = '';
    //创建容器
    var calc_1 = document.createElement('div');
    calc_1.classList.add('calc');
    document.body.appendChild(calc_1);
    // 创建界面
    var output = document.createElement('div');
    output.classList.add('output');
    var span_1 = document.createElement('span');
    output.appendChild(span_1);
    span_1.textContent = '0';
    calc_1.appendChild(output);
    // 定义getResult
    var getResult_1 = function (n1, n2, operator) {
        var numberN1 = parseInt(n1);
        var numberN2 = parseInt(n2);
        if (operator === '+') {
            return (numberN1 + numberN2).toString();
        }
        else if (operator === '-') {
            return (numberN1 - numberN2).toString();
        }
        else if (operator === '×') {
            return (numberN1 * numberN2).toString();
        }
        else if (operator === '÷') {
            return (numberN1 / numberN2).toString();
        }
    };
    //添加事件监听
    calc_1.addEventListener('click', function (event) {
        if (event.target instanceof HTMLButtonElement) {
            var text = event.target.textContent;
            if ('0123456789'.indexOf(text) >= 0) {
                if (operator_1) {
                    n2_1 += text;
                    span_1.textContent = n2_1;
                }
                else {
                    result_1 = '';
                    n1_1 += text;
                    span_1.textContent = n1_1;
                }
            }
            else if ('+-×÷'.indexOf(text) >= 0) {
                if (result_1) {
                    n1_1 = result_1;
                    result_1 = '';
                }
                operator_1 = text;
            }
            else if ('='.indexOf(text) >= 0) {
                result_1 = getResult_1(n1_1, n2_1, operator_1);
                span_1.textContent = result_1;
                n1_1 = '';
                n2_1 = '';
                operator_1 = '';
            }
            else {
                console.log('不晓得');
            }
            console.log(n1_1, operator_1, n2_1);
        }
    });
    //定义createButton
    var createButton_1 = function (text, container, className) {
        var button = document.createElement('button');
        button.textContent = text.toString();
        className && button.classList.add(className);
        container.appendChild(button);
    };
    // 初始化按钮
    var textLists = [
        ['Clear', '÷'],
        [7, 8, 9, '×'],
        [4, 5, 6, '-'],
        [1, 2, 3, '+'],
        [0, '.', '='],
    ];
    // 循环创建按钮
    textLists.forEach(function (textList) {
        var div = document.createElement('div');
        div.classList.add('row');
        textList.forEach(function (text) {
            createButton_1(text, div, "text-" + text);
        });
        calc_1.appendChild(div);
    });
}
