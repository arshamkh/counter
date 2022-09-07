const no = document.querySelector('.no');
const btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach((btn)=>{
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if(styles.contains('increase')){
            count++
        }
        if(styles.contains('decrease')){
            count--
        }
        if(styles.contains('reset')){
            count = 0
        }
        no.textContent = count
    })
})