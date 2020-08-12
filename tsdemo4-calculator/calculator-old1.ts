{
    //初始化数据
    let n1: string = '';
    let n2: string = '';
    let operator: string = '';
    let result: string = '';

    //创建容器
    let calc = document.createElement('div');
    calc.classList.add('calc');
    document.body.appendChild(calc);

    // 创建界面
    let output = document.createElement('div');
    output.classList.add('output');
    let span = document.createElement('span');
    output.appendChild(span);
    span.textContent = '0';
    calc.appendChild(output);

    // 定义getResult
    let getResult = (n1: string, n2: string, operator: string): string => {
        let numberN1: number = parseInt(n1);
        let numberN2: number = parseInt(n2);
        if (operator === '+') {
            return (numberN1 + numberN2).toString();
        } else if (operator === '-') {
            return (numberN1 - numberN2).toString();
        } else if (operator === '×') {
            return (numberN1 * numberN2).toString();
        } else if (operator === '÷') {
            return (numberN1 / numberN2).toString();
        }
    };

    //添加事件监听
    calc.addEventListener('click', event => {
        if (event.target instanceof HTMLButtonElement) {
            const text = event.target.textContent;
            if ('0123456789'.indexOf(text) >= 0) {
                if (operator) {
                    n2 += text;
                    span.textContent = n2;
                } else {
                    result = '';
                    n1 += text;
                    span.textContent = n1;
                }
            } else if ('+-×÷'.indexOf(text) >= 0) {
                if (result) {
                    n1 = result;
                    result = '';
                }
                operator = text;
            } else if ('='.indexOf(text) >= 0) {
                result = getResult(n1, n2, operator);
                span.textContent = result;
                n1 = '';
                n2 = '';
                operator = '';
            } else {
                console.log('不晓得');
            }
            console.log(n1, operator, n2);
        }
    });

    //定义createButton
    let createButton = (text: string | number, container: HTMLElement, className?: string) => {
        let button = document.createElement('button');
        button.textContent = text.toString();
        className && button.classList.add(className);
        container.appendChild(button);
    };
    // 初始化按钮
    let textLists: Array<Array<string | number>> = [
        ['Clear', '÷'],
        [7, 8, 9, '×'],
        [4, 5, 6, '-'],
        [1, 2, 3, '+'],
        [0, '.', '='],
    ];
    // 循环创建按钮
    textLists.forEach((textList: Array<number | string>) => {
        let div = document.createElement('div');
        div.classList.add('row');
        textList.forEach((text: number | string) => {
            createButton(text, div, `text-${text}`);
        });
        calc.appendChild(div);
    });
}