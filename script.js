// Global Variables
let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let flaggedQuestions = new Set();
let timerInterval = null;
let timeRemaining = 0;
let startTime = null;
let userName = '';
let userEmail = '';

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Test Selection
function selectTest(testType) {
    currentTest = testData[testType];
    showScreen('instructionsScreen');
}

function backToWelcome() {
    showScreen('welcomeScreen');
    currentTest = null;
}

// Start Test
function startTest() {
    const nameInput = document.getElementById('userName');
    userName = nameInput.value.trim();
    
    if (!userName) {
        alert('Iltimos, ismingizni kiriting!');
        nameInput.focus();
        return;
    }
    
    userEmail = document.getElementById('userEmail').value.trim();
    
    // Initialize test
    currentQuestionIndex = 0;
    userAnswers = new Array(currentTest.questions.length).fill(null);
    flaggedQuestions.clear();
    timeRemaining = currentTest.duration * 60; // Convert to seconds
    startTime = Date.now();
    
    // Setup UI
    document.getElementById('testTitle').textContent = currentTest.title;
    document.getElementById('userNameDisplay').textContent = userName;
    document.getElementById('totalQuestions').textContent = currentTest.questions.length;
    document.getElementById('scoreTotalDisplay').textContent = currentTest.questions.length;
    
    // Build navigation
    buildQuestionNavigation();
    
    // Show first question
    displayQuestion(0);
    
    // Start timer
    startTimer();
    
    // Show test screen
    showScreen('testScreen');
}

// Timer Functions
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitTest();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timerDisplay').textContent = display;
    
    const timerElement = document.getElementById('timer');
    timerElement.classList.remove('warning', 'danger');
    
    if (timeRemaining <= 300 && timeRemaining > 60) {
        timerElement.classList.add('warning');
    } else if (timeRemaining <= 60) {
        timerElement.classList.add('danger');
    }
}

// Question Navigation
function buildQuestionNavigation() {
    const navGrid = document.getElementById('navGrid');
    navGrid.innerHTML = '';
    
    currentTest.questions.forEach((q, index) => {
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';
        navItem.textContent = index + 1;
        navItem.onclick = () => goToQuestion(index);
        navGrid.appendChild(navItem);
    });
    
    updateNavigationState();
}

function updateNavigationState() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        item.classList.remove('answered', 'current', 'flagged');
        
        if (index === currentQuestionIndex) {
            item.classList.add('current');
        }
        if (userAnswers[index] !== null) {
            item.classList.add('answered');
        }
        if (flaggedQuestions.has(index)) {
            item.classList.add('flagged');
        }
    });
    
    updateProgressBar();
}

function updateProgressBar() {
    const answered = userAnswers.filter(a => a !== null).length;
    const total = currentTest.questions.length;
    const percentage = (answered / total) * 100;
    
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('answeredCount').textContent = answered;
    document.getElementById('remainingCount').textContent = total - answered;
    document.getElementById('flaggedCount').textContent = flaggedQuestions.size;
}

// Display Question
function displayQuestion(index) {
    currentQuestionIndex = index;
    const question = currentTest.questions[index];
    
    document.getElementById('currentQuestionNum').textContent = index + 1;
    
    const questionContent = document.getElementById('questionContent');
    questionContent.innerHTML = `
        <div class="question-text">${question.question}</div>
        <div class="options">
            ${question.options.map((option, i) => `
                <div class="option ${userAnswers[index] === i ? 'selected' : ''}" 
                     onclick="selectAnswer(${i})">
                    <div class="option-label">${String.fromCharCode(65 + i)}</div>
                    <div class="option-text">${option}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Update flag button
    const flagBtn = document.getElementById('flagBtn');
    if (flaggedQuestions.has(index)) {
        flagBtn.classList.add('active');
    } else {
        flagBtn.classList.remove('active');
    }
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = index === 0;
    const nextBtn = document.getElementById('nextBtn');
    if (index === currentTest.questions.length - 1) {
        nextBtn.textContent = 'Yakunlash';
        nextBtn.onclick = confirmSubmit;
    } else {
        nextBtn.innerHTML = `
            Keyingi
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        `;
        nextBtn.onclick = nextQuestion;
    }
    
    updateNavigationState();
}

function selectAnswer(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    displayQuestion(currentQuestionIndex);
}

function toggleFlag() {
    if (flaggedQuestions.has(currentQuestionIndex)) {
        flaggedQuestions.delete(currentQuestionIndex);
    } else {
        flaggedQuestions.add(currentQuestionIndex);
    }
    displayQuestion(currentQuestionIndex);
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        displayQuestion(currentQuestionIndex - 1);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentTest.questions.length - 1) {
        displayQuestion(currentQuestionIndex + 1);
    }
}

function goToQuestion(index) {
    displayQuestion(index);
}

// Navigation Toggle (Mobile)
function toggleNav() {
    const nav = document.querySelector('.question-nav');
    nav.classList.toggle('hidden');
}

// Fullscreen Toggle
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('Fullscreen error:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// Submit Test
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
    
    // Calculate results
    const results = calculateResults();
    
    // Display results
    displayResults(results);
    
    showScreen('resultsScreen');
}

function calculateResults() {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    
    const detailedAnswers = currentTest.questions.map((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        if (userAnswer === null) {
            unanswered++;
            return { question, userAnswer, isCorrect: null, correctAnswer: question.correct };
        } else if (isCorrect) {
            correct++;
            return { question, userAnswer, isCorrect: true, correctAnswer: question.correct };
        } else {
            incorrect++;
            return { question, userAnswer, isCorrect: false, correctAnswer: question.correct };
        }
    });
    
    const totalTime = currentTest.duration * 60 - timeRemaining;
    const percentage = Math.round((correct / currentTest.questions.length) * 100);
    
    return {
        correct,
        incorrect,
        unanswered,
        total: currentTest.questions.length,
        percentage,
        timeTaken: totalTime,
        detailedAnswers
    };
}

function displayResults(results) {
    // Score display
    document.getElementById('scoreValue').textContent = results.correct;
    document.getElementById('scorePercentage').textContent = results.percentage + '%';
    
    // Animate score circle
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (results.percentage / 100) * circumference;
    const scoreCircle = document.getElementById('scoreCircle');
    
    setTimeout(() => {
        scoreCircle.style.strokeDashoffset = offset;
    }, 100);
    
    // Stats
    document.getElementById('correctAnswers').textContent = results.correct;
    document.getElementById('incorrectAnswers').textContent = results.incorrect;
    document.getElementById('unansweredCount').textContent = results.unanswered;
    
    const minutes = Math.floor(results.timeTaken / 60);
    const seconds = results.timeTaken % 60;
    document.getElementById('timeTaken').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Draw chart
    drawResultsChart(results);
    
    // Detailed answers
    displayDetailedAnswers(results.detailedAnswers);
}

function drawResultsChart(results) {
    const canvas = document.getElementById('resultsChart');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const data = [
        { label: "To'g'ri", value: results.correct, color: '#10B981' },
        { label: "Noto'g'ri", value: results.incorrect, color: '#EF4444' },
        { label: "Javobsiz", value: results.unanswered, color: '#6B7280' }
    ];
    
    const total = results.total;
    const barWidth = 80;
    const spacing = 60;
    const maxHeight = 150;
    const startX = (canvas.width - (data.length * barWidth + (data.length - 1) * spacing)) / 2;
    
    data.forEach((item, index) => {
        const x = startX + index * (barWidth + spacing);
        const height = (item.value / total) * maxHeight;
        const y = canvas.height - height - 30;
        
        // Draw bar
        ctx.fillStyle = item.color;
        ctx.fillRect(x, y, barWidth, height);
        
        // Draw value
        ctx.fillStyle = '#111827';
        ctx.font = 'bold 16px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(item.value, x + barWidth / 2, y - 10);
        
        // Draw label
        ctx.font = '14px sans-serif';
        ctx.fillText(item.label, x + barWidth / 2, canvas.height - 10);
    });
}

function displayDetailedAnswers(detailedAnswers) {
    const container = document.getElementById('detailedAnswers');
    container.innerHTML = detailedAnswers.map((item, index) => {
        const statusClass = item.isCorrect === null ? 'unanswered' : 
                           item.isCorrect ? 'correct' : 'incorrect';
        const statusText = item.isCorrect === null ? 'Javobsiz' :
                          item.isCorrect ? "To'g'ri" : "Noto'g'ri";
        
        return `
            <div class="answer-item ${statusClass}">
                <div class="answer-item-header">
                    <span class="answer-item-question">Savol ${index + 1}</span>
                    <span class="answer-badge ${statusClass}">${statusText}</span>
                </div>
                <div class="answer-details">
                    <p><strong>Savol:</strong> ${item.question.question}</p>
                    ${item.userAnswer !== null ? `
                        <p><strong>Sizning javobingiz:</strong> ${String.fromCharCode(65 + item.userAnswer)}) ${item.question.options[item.userAnswer]}</p>
                    ` : '<p><strong>Javob berilmagan</strong></p>'}
                    ${!item.isCorrect ? `
                        <p style="color: var(--success);"><strong>To'g'ri javob:</strong> ${String.fromCharCode(65 + item.correctAnswer)}) ${item.question.options[item.correctAnswer]}</p>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function reviewAnswers() {
    document.querySelector('.detailed-results').scrollIntoView({ behavior: 'smooth' });
}

function restartTest() {
    if (confirm("Testni qaytadan boshlashni xohlaysizmi?")) {
        location.reload();
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (document.getElementById('testScreen').classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            previousQuestion();
        } else if (e.key === 'ArrowRight') {
            nextQuestion();
        } else if (e.key >= '1' && e.key <= '4') {
            const optionIndex = parseInt(e.key) - 1;
            if (optionIndex < currentTest.questions[currentQuestionIndex].options.length) {
                selectAnswer(optionIndex);
            }
        } else if (e.key === 'f' || e.key === 'F') {
            toggleFlag();
        }
    }
});

// Prevent accidental page close
window.addEventListener('beforeunload', (e) => {
    if (document.getElementById('testScreen').classList.contains('active')) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// Auto-save to localStorage
function autoSave() {
    if (currentTest) {
        const saveData = {
            testType: currentTest === testData.ielts ? 'ielts' : 'it',
            currentQuestionIndex,
            userAnswers,
            flaggedQuestions: Array.from(flaggedQuestions),
            timeRemaining,
            userName,
            userEmail
        };
        localStorage.setItem('testProgress', JSON.stringify(saveData));
    }
}

// Load saved progress
function loadSavedProgress() {
    const saved = localStorage.getItem('testProgress');
    if (saved) {
        const data = JSON.parse(saved);
        if (confirm('Avvalgi testni davom ettirishni xohlaysizmi?')) {
            currentTest = testData[data.testType];
            currentQuestionIndex = data.currentQuestionIndex;
            userAnswers = data.userAnswers;
            flaggedQuestions = new Set(data.flaggedQuestions);
            timeRemaining = data.timeRemaining;
            userName = data.userName;
            userEmail = data.userEmail;
            
            // Resume test
            document.getElementById('testTitle').textContent = currentTest.title;
            document.getElementById('userNameDisplay').textContent = userName;
            document.getElementById('totalQuestions').textContent = currentTest.questions.length;
            
            buildQuestionNavigation();
            displayQuestion(currentQuestionIndex);
            startTimer();
            showScreen('testScreen');
        } else {
            localStorage.removeItem('testProgress');
        }
    }
}

// Auto-save every 10 seconds
setInterval(autoSave, 10000);

// Check for saved progress on load
window.addEventListener('load', loadSavedProgress);

// Clear saved progress on test completion
function clearSavedProgress() {
    localStorage.removeItem('testProgress');
}

// Add to submitTest function
const originalSubmitTest = submitTest;
submitTest = function() {
    originalSubmitTest();
    clearSavedProgress();
};
