const koreanWords = [
    "안녕하세요",
    "사랑",
    "학교",
    "친구",
    "컴퓨터",
    "게임",
    "음악",
    "영화",
    "책",
    "한국어",
    "여행",
    "음식",
    "축구",
    "야구",
    "날씨",
    "봄",
    "여름",
    "가을",
    "겨울",
    "행복",
    "슬픔",
    "기쁨",
    "공부",
    "운동",
    "드라마",
    "노래",
    "사진",
    "바다",
    "산",
    "도시",
    "강",
    "꽃",
    "동물",
    "고양이",
    "강아지",
    "자동차",
    "자전거",
    "버스",
    "지하철"
];

const englishWords = [
    "hello",
    "world",
    "computer",
    "keyboard",
    "school",
    "student",
    "language",
    "typing",
    "practice",
    "challenge",
    "speed",
    "accuracy",
    "science",
    "history",
    "technology",
    "future",
    "browser",
    "internet",
    "program",
    "javascript",
    "react",
    "project",
    "learning",
    "developer",
    "design",
    "window",
    "screen",
    "letter",
    "word",
    "minute",
    "second",
    "timer",
    "focus",
    "random",
    "simple",
    "coding",
    "function",
    "variable",
    "array",
    "object",
    "build",
    "create",
    "update",
    "import",
    "export",
    "module"
];

const englishKeyboardLabels = {
    'esc-key': 'Esc',
    'one-key': '1',
    'two-key': '2',
    'three-key': '3',
    'four-key': '4',
    'five-key': '5',
    'six-key': '6',
    'seven-key': '7',
    'eight-key': '8',
    'nine-key': '9',
    'zero-key': '0',
    'minus-key': '-',
    'equals-key': '=',
    'backspace-key': 'Backspace',
    'tab-key': 'Tab',
    'Q-key': 'Q', 'W-key': 'W', 'E-key': 'E', 'R-key': 'R', 'T-key': 'T',
    'Y-key': 'Y', 'U-key': 'U', 'I-key': 'I', 'O=-key': 'O', 'P-key': 'P',
    'capslock-key': 'Caps', 'A-key': 'A', 'S-key': 'S', 'D-key': 'D', 'F-key': 'F',
    'G-key': 'G', 'H-key': 'H', 'J-key': 'J', 'K-key': 'K', 'L-key': 'L',
    'semicolon-key': ';', 'quote-key': "'", 'enter-key': 'Enter',
    'left-Shift-key': 'Shift', 'Z-key': 'Z', 'X-key': 'X', 'C-key': 'C', 'V-key': 'V',
    'B-key': 'B', 'N-key': 'N', 'M-key': 'M', 'comma-key': ',', 'period=-key': '.',
    'fowardslash-key': '/', 'right-control-key': 'Ctrl', 'windows-key': 'Win',
    'left-alt-key': 'Alt', 'space-key': 'Space', 'right-alt-key': 'Alt',
    'document-key': 'Menu', 'FN-key': 'Fn'
};

const koreanKeyboardLabels = {
    'esc-key': 'Esc',
    'one-key': 'ㅏ', 'two-key': 'ㅑ', 'three-key': 'ㅓ', 'four-key': 'ㅕ', 'five-key': 'ㅗ',
    'six-key': 'ㅛ', 'seven-key': 'ㅜ', 'eight-key': 'ㅠ', 'nine-key': 'ㅡ', 'zero-key': 'ㅣ',
    'minus-key': '-', 'equals-key': '=', 'backspace-key': 'Backspace',
    'tab-key': 'Tab',
    'Q-key': 'ㅏ', 'W-key': 'ㅑ', 'E-key': 'ㅓ', 'R-key': 'ㅕ', 'T-key': 'ㅗ',
    'Y-key': 'ㅛ', 'U-key': 'ㅜ', 'I-key': 'ㅠ', 'O=-key': 'ㅡ', 'P-key': 'ㅣ',
    'capslock-key': 'Caps', 'A-key': 'ㅐ', 'S-key': 'ㅔ', 'D-key': 'ㅒ', 'F-key': 'ㅖ',
    'G-key': 'ㅘ', 'H-key': 'ㅙ', 'J-key': 'ㅚ', 'K-key': 'ㅝ', 'L-key': 'ㅞ',
    'semicolon-key': 'ㅟ', 'quote-key': 'ㅢ', 'enter-key': 'Enter',
    'left-Shift-key': 'Shift', 'Z-key': 'ㄲ', 'X-key': 'ㄸ', 'C-key': 'ㅃ', 'V-key': 'ㅆ',
    'B-key': 'ㅉ', 'N-key': 'ㄱㅅ', 'M-key': 'ㄴㅈ', 'comma-key': 'ㄴㅎ', 'period=-key': 'ㄹㄱ',
    'fowardslash-key': 'ㄹㅁ',
    'right-control-key': 'Ctrl', 'windows-key': 'Win', 'left-alt-key': 'Alt',
    'space-key': 'Space', 'right-alt-key': 'Alt', 'document-key': 'Menu', 'FN-key': 'Fn'
};

const keyMap = {
    'Escape': 'esc-key',
    '1': 'one-key',
    '2': 'two-key',
    '3': 'three-key',
    '4': 'four-key',
    '5': 'five-key',
    '6': 'six-key',
    '7': 'seven-key',
    '8': 'eight-key',
    '9': 'nine=-key',
    '0': 'zero-key',
    '-': 'minus-key',
    '=': 'equals-key',
    'Backspace': 'backspace-key',
    'Tab': 'tab-key',
    'CapsLock': 'capslock-key',
    'Shift': 'left-Shift-key',
    'Control': 'left-control-key',
    'Alt': 'left-alt-key',
    ' ': 'space-key',
    'a': 'A-key', 's': 'S-key', 'd': 'D-key', 'f': 'F-key', 'g': 'G-key',
    'h': 'H-key', 'j': 'J-key', 'k': 'K-key', 'l': 'L-key',
    'z': 'Z-key', 'x': 'X-key', 'c': 'C-key', 'v': 'V-key', 'b': 'B-key',
    'n': 'N-key', 'm': 'M-key',
    'q': 'Q-key', 'w': 'W-key', 'e': 'E-key', 'r': 'R-key', 't': 'T-key',
    'y': 'Y-key', 'u': 'U-key', 'i': 'I-key', 'o': 'O=-key', 'p': 'P-key'
};

let isKoreanMode = false;

const originalHeaderText = document.querySelector('h1').innerText;
const originalNewGameText = document.getElementById('newGameBtn').innerText;

const koreanHeaderText = "한글타자기";
const koreanNewGameText = "새 게임";
const koreanModeText = "한국모드?"

const englishNewGameText = "New Game?"
const englishModeText = "English Mode?"

const koreanWordsCount = koreanWords.length;

const timer = 30 * 1000;

window.timer = null;

window.gameStart = null;

const addClass = (el, name) => {
    if (el) el.className += ' ' + name;
}

const removeClass = (el, name) => {
    if (el) el.className = el.className.replace(name, '');
}

const randomKoreanWord = () => {
    const index = Math.floor(Math.random() * koreanWordsCount);
    return koreanWords[index];
}

const formatWord = (koreanWord) => {
    return `<div class="word"><span class="letter">${koreanWord.split('').join('</span><span class="letter">')}</span></div>`;
}

const getRandomWord = () => {
    if (isKoreanMode) {
        const index = Math.floor(Math.random() * englishWords.length);
        return englishWords[index];
    } else {
        const index = Math.floor(Math.random() * koreanWords.length);
        return koreanWords[index];
    }
}

const newGame = () => {
    const container = document.getElementById('words');
    if (!container) return;
    container.innerHTML = '';

    for (let i = 0; i < 200; i++) {
        container.innerHTML += formatWord(getRandomWord());
    }

    addClass(document.querySelector('.word'), 'current');
    addClass(document.querySelector('.letter'), 'current');

    document.getElementById('info').innerHTML = (timer / 1000) + '';

    window.timer = null;
    window.gameStart = null;

    document.getElementById('game').classList.remove('over');
    updateCursor();

    if (isKoreanMode) {
        updateKeyboardLabels(englishKeyboardLabels);
    } else {
        updateKeyboardLabels(koreanKeyboardLabels);
    }
}


const getWords = () => {
    const words = [...document.querySelectorAll('.word')]
    const lastWord = document.querySelector('.word.current')
    const lastWordIndex = words.indexOf(lastWord)
    const typedWords = words.slice(0, lastWordIndex)

    const correctWords = typedWords.filter(w => {
        const letters = [...w.children]
        const incorrect = letters.filter(l => l.className.includes('incorrect'))
        const correct = letters.filter(l => l.className.includes('correct'))
        return incorrect.length === 0 && correct.length === letters.length
    })

    return correctWords.length / (timer / 60000);
}


const gameOver = () => {
    clearInterval(window.timer);
    addClass(document.getElementById('game'), 'over')
    const result = Math.round(getWords());
    document.getElementById('info').innerHTML = `WPM: ${result}`;
}


document.getElementById('game').addEventListener('keyup', e => {
    const key = e.key;
    const currentWord = document.querySelector('.word.current');
    const current = document.querySelector('.letter.current');
    if (!current) return;

    const expectedKey = current.innerHTML;

    const isLetter = key.length === 1 && key !== ' ';
    const isSpace = key === ' ';
    const isBackspace = key === 'Backspace';
    const isFirstLetter = current === currentWord.firstChild;

    if (document.querySelector('#game.over')) {
        return
    }

    console.log({ key, expectedKey });

    if (!window.timer && isLetter) {
        window.timer = setInterval(() => {
            if (!window.gameStart) {
                window.gameStart = (new Date()).getTime()
            }
            const currentTime = (new Date()).getTime()
            const ms = currentTime - window.gameStart
            const seconds = Math.round(ms / 1000);
            const remainingSeconds = (timer / 1000) - seconds
            if (remainingSeconds <= 0) {
                gameOver()
                return
            }
            document.getElementById('info').innerHTML = remainingSeconds + ''
        }, 1000)

    }

    if (isBackspace) {
        e.preventDefault();

        if (!isFirstLetter) {
            const prev = current.previousSibling;

            removeClass(current, 'current');
            addClass(prev, 'current');

            removeClass(prev, 'correct');
            removeClass(prev, 'incorrect');

        } else if (!current) {
            addClass(currentWord.lastChild, 'current')
        }
         else {
            const prevWord = currentWord.previousElementSibling;
            if (!prevWord) return;

            removeClass(currentWord, 'current');
            addClass(prevWord, 'current');

            const lastLetter = prevWord.lastChild;
            removeClass(current, 'current');
            addClass(lastLetter, 'current');

            removeClass(lastLetter, 'correct');
            removeClass(lastLetter, 'incorrect');
        }

        updateCursor();
        return;
    }

    if (isLetter) {
        addClass(current, key === expectedKey ? 'correct' : 'incorrect');
        removeClass(current, 'current');

        const nextLetter = current.nextSibling;
        if (nextLetter) addClass(nextLetter, 'current');
    }

    else if (!isSpace && !isBackspace) {
        const extraLetter = document.createElement('span');
        extraLetter.innerHTML = key;
        extraLetter.className = 'letter incorrect extra';
        currentWord.appendChild(extraLetter);
    }

    if (isSpace) {
        const remaining = [...currentWord.querySelectorAll('.letter:not(.correct)')];
        remaining.forEach(l => addClass(l, 'incorrect'));
    
        const nextWord = currentWord.nextElementSibling;
        if (nextWord) {
            removeClass(current, 'current');
            removeClass(currentWord, 'current');
    
            const firstLetterNext = nextWord.querySelector('.letter');
            if (firstLetterNext) addClass(firstLetterNext, 'current');
    
            addClass(nextWord, 'current');
        } else {
            removeClass(current, 'current');
            removeClass(currentWord, 'current');
    
            gameOver();
        }
    }

    updateCursor();

    if (currentWord.getBoundingClientRect().top > 250) {
        const words = document.getElementById('words')
        const margin = parseInt(words.style.marginTop || '0px')
        words.style.marginTop = (margin - 35) + 'px'
    }
});

function updateCursor() {
    const nextLetter = document.querySelector('.letter.current');
    const nextWord = document.querySelector('.word.current');
    const cursor = document.getElementById('cursor');
    const target = nextLetter || nextWord;

    if (cursor && target) {
        const rect = target.getBoundingClientRect();
        cursor.style.top = rect.top + 2 + 'px';
        cursor.style.left = nextLetter ? rect.left + 'px' : rect.right + 'px';
    }
}

document.addEventListener('keydown', e => {
    const keyID = keyMap[e.key] || keyMap[e.key.toLowerCase()];
    if (!keyID) return;
    const keyDiv = document.getElementById(keyID);
    if (!keyDiv) return;

    keyDiv.style.backgroundColor = 'lightgrey';
    keyDiv.style.color = 'black';

    setTimeout(() => {
        keyDiv.style.backgroundColor = 'rgb(32, 32, 32)';
        keyDiv.style.color = 'white';
    }, 100);
});

function updateKeyboardLabels(labels) {
    for (const id in labels) {
        const el = document.getElementById(id);
        if (el) el.innerText = labels[id];
    }
}

document.getElementById('koreanModeBtn').addEventListener('click', () => {
    isKoreanMode = !isKoreanMode;

    if (isKoreanMode) {
        document.querySelector('h1').innerText = koreanHeaderText;
        document.getElementById('newGameBtn').innerText = englishNewGameText;
        document.getElementById('koreanModeBtn').innerText = englishModeText
    } else {
        document.querySelector('h1').innerText = originalHeaderText;
        document.getElementById('newGameBtn').innerText = originalNewGameText;
        document.getElementById('koreanModeBtn').innerText = koreanModeText
    }

    newGame();
});



document.getElementById('newGameBtn').addEventListener('click', () => {
    gameOver()
    newGame()
})

document.getElementById('ConfirmationBtn').addEventListener('click', () => {
    document.querySelector('.disclaimer').style.display = 'none';
});


newGame();
