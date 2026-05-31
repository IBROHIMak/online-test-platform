// =============================================
// Global State
// =============================================
let currentTest = null;
let currentTestType = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let flaggedQuestions = new Set();
let timerInterval = null;
let timeRemaining = 0;
let testStartTime = null;
let userName = '';
let userSurname = '';
let darkMode = false;

// =============================================
// Screen Management
// =============================================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

// =============================================
// Welcome Screen
// =============================================
function selectTest(testType) {
    currentTestType = testType;
    currentTest = testData[testType];
    showScreen('instructionsScreen');
}

function backToWelcome() {
    currentTest = null;
    currentTestType = null;
    showScreen('welcomeScreen');
}

// =============================================
// Start Test
// =============================================
function startTest() {
    const firstInput = document.getElementById('userFirstName');
    const lastInput  = document.getElementById('userLastName');
    userName    = firstInput.value.trim();
    userSurname = lastInput.value.trim();

    if (!userName) {
        showToast('Iltimos, ismingizni kiriting!', 'error');
        firstInput.focus();
        return;
    }
    if (!userSurname) {
        showToast('Iltimos, familiyangizni kiriting!', 'error');
        lastInput.focus();
        return;
    }

    // Clear any old saved progress
    localStorage.removeItem('testProgress');

    // Init state
    currentQuestionIndex = 0;
    userAnswers = new Array(currentTest.questions.length).fill(null);
    flaggedQuestions = new Set();
    timeRemaining = currentTest.duration * 60;
    testStartTime = Date.now();

    // Setup header
    document.getElementById('testTitle').textContent = currentTest.title;
    document.getElementById('userNameDisplay').textContent = `${userName} ${userSurname}`;
    document.getElementById('totalQuestions').textContent = currentTest.questions.length;
    document.getElementById('scoreTotalDisplay').textContent = currentTest.questions.length;

    buildQuestionNavigation();
    displayQuestion(0);
    startTimer();
    showScreen('testScreen');
}

// =============================================
// Timer
// =============================================
function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            showToast("Vaqt tugadi! Test avtomatik yakunlandi.", 'warning');
            setTimeout(submitTest, 1500);
        }
    }, 1000);
}

function updateTimerDisplay() {
    const m = Math.floor(timeRemaining / 60);
    const s = timeRemaining % 60;
    document.getElementById('timerDisplay').textContent = `${m}:${s.toString().padStart(2, '0')}`;
    const el = document.getElementById('timer');
    el.classList.remove('warning', 'danger');
    if (timeRemaining <= 300 && timeRemaining > 60) el.classList.add('warning');
    else if (timeRemaining <= 60) el.classList.add('danger');
}

// =============================================
// Navigation Grid
// =============================================
function buildQuestionNavigation() {
    const grid = document.getElementById('navGrid');
    grid.innerHTML = '';
    currentTest.questions.forEach((_, i) => {
        const el = document.createElement('div');
        el.className = 'nav-item';
        el.textContent = i + 1;
        el.onclick = () => { goToQuestion(i); };
        grid.appendChild(el);
    });
    updateNavigationState();
}

function updateNavigationState() {
    document.querySelectorAll('.nav-item').forEach((el, i) => {
        el.classList.remove('answered', 'current', 'flagged');
        if (i === currentQuestionIndex) el.classList.add('current');
        if (userAnswers[i] !== null)     el.classList.add('answered');
        if (flaggedQuestions.has(i))     el.classList.add('flagged');
    });
    updateProgressBar();
}

function updateProgressBar() {
    const answered = userAnswers.filter(a => a !== null).length;
    const total    = currentTest.questions.length;
    document.getElementById('progressFill').style.width = (answered / total * 100) + '%';
    document.getElementById('answeredCount').textContent  = answered;
    document.getElementById('remainingCount').textContent = total - answered;
    document.getElementById('flaggedCount').textContent   = flaggedQuestions.size;
}

// =============================================
// Display Question
// =============================================
function displayQuestion(index) {
    currentQuestionIndex = index;
    const q = currentTest.questions[index];
    document.getElementById('currentQuestionNum').textContent = index + 1;

    document.getElementById('questionContent').innerHTML = `
        <div class="question-text">${q.question}</div>
        <div class="options">
            ${q.options.map((opt, i) => `
                <div class="option ${userAnswers[index] === i ? 'selected' : ''}"
                     onclick="selectAnswer(${i})">
                    <div class="option-label">${String.fromCharCode(65 + i)}</div>
                    <div class="option-text">${opt}</div>
                </div>
            `).join('')}
        </div>
    `;

    const flagBtn = document.getElementById('flagBtn');
    flagBtn.classList.toggle('active', flaggedQuestions.has(index));

    document.getElementById('prevBtn').disabled = index === 0;
    const nextBtn = document.getElementById('nextBtn');
    if (index === currentTest.questions.length - 1) {
        nextBtn.innerHTML = `Yakunlash <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
        nextBtn.onclick = confirmSubmit;
    } else {
        nextBtn.innerHTML = `Keyingi <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
        nextBtn.onclick = nextQuestion;
    }

    updateNavigationState();
}

function selectAnswer(i) {
    userAnswers[currentQuestionIndex] = i;
    displayQuestion(currentQuestionIndex);
    autoSave();
}

function toggleFlag() {
    if (flaggedQuestions.has(currentQuestionIndex)) flaggedQuestions.delete(currentQuestionIndex);
    else flaggedQuestions.add(currentQuestionIndex);
    displayQuestion(currentQuestionIndex);
}

function previousQuestion() {
    if (currentQuestionIndex > 0) displayQuestion(currentQuestionIndex - 1);
}

function nextQuestion() {
    if (currentQuestionIndex < currentTest.questions.length - 1)
        displayQuestion(currentQuestionIndex + 1);
}

function goToQuestion(i) {
    displayQuestion(i);
    // Mobile: close nav after selecting
    if (window.innerWidth < 768) {
        document.querySelector('.question-nav').classList.add('hidden');
    }
}

// =============================================
// Submit
// =============================================
function confirmSubmit() {
    const unanswered = userAnswers.filter(a => a === null).length;
    document.getElementById('unansweredModal').textContent = unanswered;
    document.getElementById('confirmModal').classList.add('active');
}

function closeModal() {
    document.getElementById('confirmModal').classList.remove('active');
}

function submitTest() {
    clearInterval(timerInterval);
    closeModal();
    localStorage.removeItem('testProgress');
    const results = calculateResults();
    displayResults(results);
    showScreen('resultsScreen');
}

// =============================================
// Results
// =============================================
function calculateResults() {
    let correct = 0, incorrect = 0, unanswered = 0;
    const detailedAnswers = currentTest.questions.map((q, i) => {
        const ua = userAnswers[i];
        if (ua === null) { unanswered++; return { q, ua, status: 'unanswered' }; }
        if (ua === q.correct) { correct++; return { q, ua, status: 'correct' }; }
        incorrect++;
        return { q, ua, status: 'incorrect' };
    });
    const timeTaken = currentTest.duration * 60 - timeRemaining;
    const percentage = Math.round((correct / currentTest.questions.length) * 100);
    return { correct, incorrect, unanswered, total: currentTest.questions.length, percentage, timeTaken, detailedAnswers };
}

function displayResults(r) {
    document.getElementById('scoreValue').textContent = r.correct;
    document.getElementById('scoreTotalDisplay').textContent = r.total;
    document.getElementById('scorePercentage').textContent = r.percentage + '%';
    document.getElementById('correctAnswers').textContent   = r.correct;
    document.getElementById('incorrectAnswers').textContent = r.incorrect;
    document.getElementById('unansweredCount').textContent  = r.unanswered;

    const m = Math.floor(r.timeTaken / 60), s = r.timeTaken % 60;
    document.getElementById('timeTaken').textContent = `${m}:${s.toString().padStart(2, '0')}`;

    document.getElementById('resultUserName').textContent = `${userName} ${userSurname}`;

    // IELTS band score
    const bandEl = document.getElementById('ieltsband');
    if (currentTestType === 'ielts') {
        const band = getIELTSBand(r.percentage);
        bandEl.style.display = 'block';
        bandEl.innerHTML = `
            <div class="ielts-band-box">
                <span class="ielts-band-label">Taxminiy IELTS Band:</span>
                <span class="ielts-band-score">${band.score}</span>
                <span class="ielts-band-desc">${band.desc}</span>
            </div>`;
    } else {
        bandEl.style.display = 'none';
    }

    // Animate circle
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (r.percentage / 100) * circumference;
    const circle = document.getElementById('scoreCircle');
    circle.style.transition = 'none';
    circle.style.strokeDashoffset = circumference;
    setTimeout(() => {
        circle.style.transition = 'stroke-dashoffset 1.2s ease';
        circle.style.strokeDashoffset = offset;
        if (r.percentage >= 75)      circle.style.stroke = '#10B981';
        else if (r.percentage >= 60) circle.style.stroke = '#F59E0B';
        else                          circle.style.stroke = '#EF4444';
    }, 100);

    drawResultsChart(r);
    displayDetailedAnswers(r.detailedAnswers);
}

function getIELTSBand(percentage) {
    if (percentage >= 95) return { score: '9.0',         desc: 'Expert foydalanuvchi' };
    if (percentage >= 90) return { score: '8.5',         desc: 'Expert foydalanuvchi' };
    if (percentage >= 85) return { score: '8.0',         desc: 'Juda yaxshi foydalanuvchi' };
    if (percentage >= 80) return { score: '7.5',         desc: 'Juda yaxshi foydalanuvchi' };
    if (percentage >= 72) return { score: '7.0',         desc: 'Yaxshi foydalanuvchi' };
    if (percentage >= 65) return { score: '6.5',         desc: 'Malakali foydalanuvchi' };
    if (percentage >= 57) return { score: '6.0',         desc: 'Malakali foydalanuvchi' };
    if (percentage >= 50) return { score: '5.5',         desc: "O'rtacha foydalanuvchi" };
    if (percentage >= 42) return { score: '5.0',         desc: "O'rtacha foydalanuvchi" };
    if (percentage >= 35) return { score: '4.5',         desc: 'Cheklangan foydalanuvchi' };
    if (percentage >= 27) return { score: '4.0',         desc: 'Cheklangan foydalanuvchi' };
    if (percentage >= 20) return { score: '3.5',         desc: 'Juda cheklangan foydalanuvchi' };
    if (percentage >= 13) return { score: '3.0',         desc: 'Juda cheklangan foydalanuvchi' };
    if (percentage >= 7)  return { score: '2.5',         desc: "Minimal foydalanuvchi" };
    return                       { score: '1.0 - 2.0',   desc: "Minimal foydalanuvchi" };
}

function drawResultsChart(r) {
    const canvas = document.getElementById('resultsChart');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const isDark = document.body.classList.contains('dark');
    const textColor = isDark ? '#CDD6F4' : '#111827';
    const labelColor = isDark ? '#A6ADC8' : '#6B7280';

    const data = [
        { label: "To'g'ri",    value: r.correct,    color: '#10B981' },
        { label: "Noto'g'ri",  value: r.incorrect,  color: '#EF4444' },
        { label: "Javobsiz",   value: r.unanswered, color: '#9CA3AF' }
    ];

    const barW = 70, gap = 50, maxH = 140;
    const totalW = data.length * barW + (data.length - 1) * gap;
    const startX = (canvas.width - totalW) / 2;

    data.forEach((item, i) => {
        const x = startX + i * (barW + gap);
        const h = r.total > 0 ? (item.value / r.total) * maxH : 0;
        const y = canvas.height - h - 35;

        ctx.fillStyle = item.color;
        ctx.beginPath();
        ctx.roundRect(x, y, barW, h, [6, 6, 0, 0]);
        ctx.fill();

        ctx.fillStyle = textColor;
        ctx.font = 'bold 18px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(item.value, x + barW / 2, y - 8);

        ctx.font = '13px sans-serif';
        ctx.fillStyle = labelColor;
        ctx.fillText(item.label, x + barW / 2, canvas.height - 12);
    });
}

function displayDetailedAnswers(answers) {
    document.getElementById('detailedAnswers').innerHTML = answers.map((item, i) => {
        const labels = { correct: "To'g'ri", incorrect: "Noto'g'ri", unanswered: "Javobsiz" };
        return `
        <div class="answer-item ${item.status}">
            <div class="answer-item-header">
                <span class="answer-item-question">Savol ${i + 1}</span>
                <span class="answer-badge ${item.status}">${labels[item.status]}</span>
            </div>
            <div class="answer-details">
                <p><strong>Savol:</strong> ${item.q.question}</p>
                ${item.ua !== null
                    ? `<p><strong>Sizning javobingiz:</strong> ${String.fromCharCode(65 + item.ua)}) ${item.q.options[item.ua]}</p>`
                    : `<p><strong>Javob berilmagan</strong></p>`}
                ${item.status !== 'correct'
                    ? `<p class="correct-answer-text"><strong>To'g'ri javob:</strong> ${String.fromCharCode(65 + item.q.correct)}) ${item.q.options[item.q.correct]}</p>`
                    : ''}
            </div>
        </div>`;
    }).join('');
}

function reviewAnswers() {
    document.querySelector('.detailed-results').scrollIntoView({ behavior: 'smooth' });
}

function restartTest() {
    clearInterval(timerInterval);
    localStorage.removeItem('testProgress');
    location.reload();
}

// =============================================
// Dark Mode
// =============================================
function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
    document.getElementById('darkModeBtn').textContent = darkMode ? '☀️' : '🌙';
}

// =============================================
// Auto-save
// =============================================
function autoSave() {
    if (!currentTest || !currentTestType) return;
    localStorage.setItem('testProgress', JSON.stringify({
        testType: currentTestType,
        currentQuestionIndex,
        userAnswers,
        flaggedQuestions: [...flaggedQuestions],
        timeRemaining,
        userName,
        userSurname
    }));
}

function loadSavedProgress() {
    // Restore dark mode
    if (localStorage.getItem('darkMode') === 'true') {
        darkMode = true;
        document.body.classList.add('dark');
        const btn = document.getElementById('darkModeBtn');
        if (btn) btn.textContent = '☀️';
    }

    const saved = localStorage.getItem('testProgress');
    if (!saved) return;

    try {
        const data = JSON.parse(saved);
        if (!testData[data.testType]) { localStorage.removeItem('testProgress'); return; }

        if (confirm(`${data.userName} ${data.userSurname || ''} — avvalgi testni davom ettirasizmi?`)) {
            currentTestType      = data.testType;
            currentTest          = testData[data.testType];
            currentQuestionIndex = data.currentQuestionIndex || 0;
            userAnswers          = data.userAnswers || new Array(currentTest.questions.length).fill(null);
            flaggedQuestions     = new Set(data.flaggedQuestions || []);
            timeRemaining        = data.timeRemaining || currentTest.duration * 60;
            userName             = data.userName || '';
            userSurname          = data.userSurname || '';

            document.getElementById('testTitle').textContent      = currentTest.title;
            document.getElementById('userNameDisplay').textContent = `${userName} ${userSurname}`;
            document.getElementById('totalQuestions').textContent  = currentTest.questions.length;
            document.getElementById('scoreTotalDisplay').textContent = currentTest.questions.length;

            buildQuestionNavigation();
            displayQuestion(currentQuestionIndex);
            startTimer();
            showScreen('testScreen');
        } else {
            localStorage.removeItem('testProgress');
        }
    } catch (e) {
        localStorage.removeItem('testProgress');
    }
}

// =============================================
// Sidebar toggle
// =============================================
function toggleNav() {
    document.querySelector('.question-nav').classList.toggle('hidden');
}

// =============================================
// Fullscreen
// =============================================
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
    } else {
        document.exitFullscreen();
    }
}

// =============================================
// Toast notification
// =============================================
function showToast(msg, type = 'info') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
}

// =============================================
// Keyboard shortcuts
// =============================================
document.addEventListener('keydown', e => {
    if (!document.getElementById('testScreen').classList.contains('active')) return;
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowLeft')  previousQuestion();
    if (e.key === 'ArrowRight') nextQuestion();
    if (e.key >= '1' && e.key <= '4') selectAnswer(parseInt(e.key) - 1);
    if (e.key === 'f' || e.key === 'F') toggleFlag();
    if (e.key === 'Escape') closeModal();
});

// Prevent accidental close
window.addEventListener('beforeunload', e => {
    if (document.getElementById('testScreen').classList.contains('active')) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// Auto-save every 15 seconds
setInterval(autoSave, 15000);

// Init
window.addEventListener('load', loadSavedProgress);
