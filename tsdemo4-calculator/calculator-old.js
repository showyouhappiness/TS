{
    // tsc calculator.ts   
    // tsc -w calculator.ts  实时更新
    // npm i -g http-server
    // http-server . -c-1
    // let a: number = 3
    // console.log(a)
    // '0123456789'.split('') //['0','1','2','3','4','5','6','7','8','9']
    //声明 n1 n2 operator
    var n1_1;
    var n2_1;
    var operator_1;
    var result = '';
    //创建container
    var container_1 = document.createElement('div');
    container_1.classList.add('container');
    document.body.appendChild(container_1);
    //创建output
    var output = document.createElement('div');
    output.classList.add('output');
    //创建 outout 里的 span
    var span_1 = document.createElement('span');
    output.appendChild(span_1);
    span_1.textContent = '0';
    container_1.appendChild(output);
    //声明创建按钮函数
    function createButton(text, container, className) {
        var button = document.createElement('button');
        button.textContent = text;
        if (className) {
            button.className = className;
        }
        container.appendChild(button);
        return button;
    }
    //监听 container
    container_1.addEventListener('click', function (event) {
        if (event.target instanceof HTMLButtonElement) {
            var button = event.target;
            var text = button.textContent;
            if ('0123456789'.indexOf(text) >= 0) {
                //如果有操作符
                if (operator_1) {
                    if (n2_1) {
                        n2_1 = parseInt(n2_1.toString() + text);
                    }
                    else {
                        n2_1 = parseInt(text);
                    }
                    span_1.textContent = n2_1.toString();
                }
                else {
                    //如果没有操作符
                    if (n1_1) {
                        n1_1 = parseInt(n1_1.toString() + text);
                    }
                    else {
                        n1_1 = parseInt(text);
                    }
                    span_1.textContent = n1_1.toString();
                }
            }
            else if ('+-×÷'.indexOf(text) >= 0) {
                //更新operator
                operator_1 = text;
            }
            else if ('='.indexOf(text) >= 0) {
                //更新结果
                var result_1;
                if (operator_1 === '+') {
                    result_1 = n1_1 + n2_1;
                }
                else if (operator_1 === '-') {
                    result_1 = n1_1 - n2_1;
                }
                else if (operator_1 === '×') {
                    result_1 = n1_1 * n2_1;
                }
                else if (operator_1 === '÷') {
                    result_1 = n1_1 / n2_1;
                }
                span_1.textContent = result_1.toString();
            }
        }
    });
    // 声明所有按钮
    var keys = [
        ['clear', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
    ];
    //
    keys.forEach(function (textList) {
        var div = document.createElement('div');
        div.classList.add('row');
        textList.forEach(function (text) {
            createButton(text, div, 'button text-${text}');
        });
        container_1.appendChild(div);
    });
}
