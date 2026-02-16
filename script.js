// ЗАВДАННЯ 1: Годинний таймер
let remainingMinutes = 60;
let timer1Interval = null;
let halfTimeMessageShown = false;

function startTimer1() {
    if (timer1Interval) return;
    
    timer1Interval = setInterval(() => {
        remainingMinutes--;
        
        const hours = Math.floor(remainingMinutes / 60);
        const minutes = remainingMinutes % 60;
        document.getElementById('timer1').textContent = 
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
        
        if (remainingMinutes === 30 && !halfTimeMessageShown) {
            document.getElementById('message1').textContent = 
                'Залишилось менше половини часу!';
            halfTimeMessageShown = true;
        }
        
        if (remainingMinutes <= 0) {
            clearInterval(timer1Interval);
            timer1Interval = null;
            document.getElementById('message1').textContent = 'Час вийшов!';
        }
    }, 60000);
}

function resetTimer1() {
    clearInterval(timer1Interval);
    timer1Interval = null;
    remainingMinutes = 60;
    halfTimeMessageShown = false;
    document.getElementById('timer1').textContent = '01:00:00';
    document.getElementById('message1').textContent = '';
}

// ЗАВДАННЯ 2: 30-секундний таймер
let remainingMs = 30000;
let timer2Interval = null;
let animationStarted = false;

function startTimer2() {
    if (timer2Interval) return;
    
    document.getElementById('startBtn2').disabled = true;
    
    timer2Interval = setInterval(() => {
        remainingMs -= 10;
        
        const seconds = Math.floor(remainingMs / 1000);
        const milliseconds = remainingMs % 1000;
        document.getElementById('timer2').textContent = 
            `00:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
        
        if (remainingMs <= 10000 && !animationStarted) {
            document.getElementById('timer2').classList.add('animated');
            document.getElementById('message2').textContent = 'Останні 10 секунд!';
            animationStarted = true;
        }
        
        if (remainingMs <= 0) {
            clearInterval(timer2Interval);
            timer2Interval = null;
            remainingMs = 0;
            document.getElementById('timer2').classList.remove('animated');
            document.getElementById('message2').textContent = 'Готово!';
            document.getElementById('startBtn2').disabled = false;
        }
    }, 10);
}

function resetTimer2() {
    clearInterval(timer2Interval);
    timer2Interval = null;
    remainingMs = 30000;
    animationStarted = false;
    document.getElementById('timer2').textContent = '00:30.000';
    document.getElementById('timer2').classList.remove('animated');
    document.getElementById('message2').textContent = '';
    document.getElementById('startBtn2').disabled = false;
}