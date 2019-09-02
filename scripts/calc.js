window.onload = ()=>{
const buttons = document.getElementById('buttons');
const clear = document.getElementById('clear');
const solution = document.getElementById('solution');

buttons.addEventListener('click', (e)=>{
    if (e.target.nodeName === 'LI'){
        let v = e.target.innerHTML;

        if (v === '='){
            try {
                solution.innerHTML = eval(solution.innerHTML);
            } catch (error) {
                solution.innerHTML = error.message;
            }
        }else {
            solution.innerHTML +=v;
        }
    }
});

// clear (c) button
clear.addEventListener('click',()=>{
    solution.innerHTML= '';
});

};