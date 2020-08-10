{
    //创建container
    let container: HTMLDivElement = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    //声明创建按钮函数
    function createButton(text: string, container: HTMLElement, className: string) {
        let button: HTMLButtonElement = document.createElement('button');
        button.textContent = text;
        if (className) {
            button.className = className
        }
        container.appendChild(button);
        return button;
    }

    //创建output
    let output: HTMLDivElement = document.createElement('div');
    output.classList.add('output');

    //创建 outout 里的 span
    let span: HTMLSpanElement = document.createElement('span');
    span.textContent = '0';

    //声明 n1 n2 operator
    let n1: number;
    let n2: number;
    let operator: string;

    //监听 container
    container.addEventListener('click', function (event) {
        if (event.target instanceof HTMLButtonElement) {
            let button: HTMLButtonElement = event.target;
            let text = button.textContent;
            if ('0123456789'.indexOf(text) >= 0) {
                //如果有操作符
                if (operator) {
                    if (n2) {
                        n2 = parseInt(n2.toString() + text);
                    } else {
                        n2 = parseInt(text);
                    }
                    span.textContent = n2.toString();
                } else {
                    //如果没有操作符
                    if (n1) {
                        n1 = parseInt(n1.toString() + text);
                    } else {
                        n1 = parseInt(text);
                    }
                    span.textContent = n1.toString();
                }
            } else if ('+-×÷'.indexOf(text) >= 0) {
                //更新operator
                operator = text;
            } else if ('='.indexOf(text) >= 0) {
                //更新结果
                let result;
                if (operator === '+') {
                    result = n1 + n2;
                } else if (operator === '-') {
                    result = n1 - n2;
                } else if (operator === '×') {
                    result = n1 * n2;
                } else if (operator === '÷') {
                    result = n1 / n2;
                }
                span.textContent = result.toString();
            }
            console.log(operator, n1, n2);
        }
    });

    // 声明所有按钮
    let keys: Array<Array<string>> = [
        ['clear', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
    ];

    //
    keys.forEach((textList: Array<string>) => {
        let div: HTMLDivElement = document.createElement('div');
        div.classList.add('row')
        textList.forEach((text: string) => {
            createButton(text, div, 'button text-${text}');
        });
        container.appendChild(div);
    });
}