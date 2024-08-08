document.addEventListener('DOMContentLoaded', function() {
    const themes = Object.keys(questionsData.themes);
    const themeSelect = document.getElementById('theme');
    themes.forEach(theme => {
        const option = document.createElement('option');
        option.value = theme;
        option.textContent = theme;
        themeSelect.appendChild(option);
    });

    const startButton = document.getElementById('startButton');
    const quizDiv = document.getElementById('quiz');
    const resultsDiv = document.getElementById('results');
    const configDiv = document.getElementById('config');
    const feedback = document.getElementById('feedback');
    const pointsDisplay = document.getElementById('points');
    const playerNameInput = document.getElementById('playerName');
    let playerName = '';
    let score = 0;
    let questions = [];
    let currentQuestionIndex = 0;

    startButton.addEventListener('click', function() {
        playerName = playerNameInput.value || 'Jugador';
        score = 0;
        const selectedTheme = themeSelect.value;
        questions = questionsData.themes[selectedTheme];
        shuffleArray(questions);
        currentQuestionIndex = 0;
        configDiv.style.display = 'none';
        quizDiv.style.display = 'block';
        feedback.textContent = '';
        pointsDisplay.textContent = `Puntos: ${score}`;
        applyTeamStyles(selectedTheme);
        showQuestion();
    });

    function showQuestion() {
        const questionCount = document.getElementById('questionCount');
        const questionText = document.getElementById('questionText');
        const optionsDiv = document.getElementById('options');
        const question = questions[currentQuestionIndex];
        questionCount.textContent = `Pregunta ${currentQuestionIndex + 1} / ${questions.length}`;
        questionText.textContent = question.text;
        optionsDiv.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(index));
            optionsDiv.appendChild(button);
        });
    }

    function checkAnswer(selectedIndex) {
        const question = questions[currentQuestionIndex];
        if (selectedIndex === question.correct) {
            feedback.textContent = '¡Correcto!';
            score += 100;
        } else {
            feedback.textContent = 'Incorrecto.';
        }
        pointsDisplay.textContent = `Puntos: ${score}`;
        currentQuestionIndex++;
        setTimeout(() => {
            if (currentQuestionIndex < questions.length) {
                feedback.textContent = '';
                showQuestion();
            } else {
                showResults();
            }
        }, 1000);
    }

    function showResults() {
        quizDiv.style.display = 'none';
        resultsDiv.style.display = 'block';
        const scoreList = document.getElementById('scoreList');
        scoreList.innerHTML = '';
        const li = document.createElement('li');
        li.textContent = `${playerName}: ${score} puntos`;
        scoreList.appendChild(li);
    }

    const shareButton = document.getElementById('shareButton');
    shareButton.addEventListener('click', function() {
        const scoreMessage = `${playerName}: ${score} puntos`;
        const whatsappLink = `https://wa.me/?text=${encodeURIComponent(scoreMessage)}`;
        window.open(whatsappLink, '_blank');
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function applyTeamStyles(team) {
        document.body.className = ''; // reset any existing classes
        switch(team) {
            case 'Boca Juniors':
                document.body.classList.add('boca-juniors');
                break;
            case 'River Plate':
                document.body.classList.add('river-plate');
                break;
            case 'Independiente':
                document.body.classList.add('independiente');
                break;
            case 'Racing Club':
                document.body.classList.add('racing-club');
                break;
            default:
                break;
        }
    }
});
