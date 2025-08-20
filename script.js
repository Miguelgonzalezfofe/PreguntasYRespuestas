// Clase principal para el juego de preguntas
class QuizGame {
    constructor(questionsData) {
        this.questionsData = questionsData;
        this.themeSelect = document.getElementById('theme');
        this.startButton = document.getElementById('startButton');
        this.quizDiv = document.getElementById('quiz');
        this.resultsDiv = document.getElementById('results');
        this.configDiv = document.getElementById('config');
        this.feedback = document.getElementById('feedback');
        this.pointsDisplay = document.getElementById('points');
        this.playerNameInput = document.getElementById('playerName');
        this.shareButton = document.getElementById('shareButton');
        this.scoreList = document.getElementById('scoreList');
        this.playerName = '';
        this.score = 0;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.init();
    }

    // Inicializa el juego y los eventos
    init() {
        this.loadThemes();
        this.startButton.addEventListener('click', () => this.startGame());
        this.shareButton.addEventListener('click', () => this.shareScore());
    }

    // Carga los temas en el select
    loadThemes() {
        const themes = Object.keys(this.questionsData.themes);
        themes.forEach(theme => {
            const option = document.createElement('option');
            option.value = theme;
            option.textContent = theme;
            this.themeSelect.appendChild(option);
        });
    }

    // Inicia el juego
    startGame() {
        const playerName = this.playerNameInput.value.trim();
        const selectedTheme = this.themeSelect.value;
        const difficultySelect = document.getElementById('difficulty');
        const selectedDifficulty = difficultySelect ? difficultySelect.value : '';

        const formError = document.getElementById('formError');
        formError.textContent = '';
        if (!playerName) {
            formError.textContent = 'Debes ingresar tu nombre.';
            return;
        }
        if (!selectedTheme) {
            formError.textContent = 'Debes seleccionar un equipo.';
            return;
        }
        if (!selectedDifficulty) {
            formError.textContent = 'Debes seleccionar la dificultad.';
            return;
        }

        this.playerName = playerName;
        this.score = 0;
        this.questions = [...this.questionsData.themes[selectedTheme]];
        this.shuffleArray(this.questions);
        this.currentQuestionIndex = 0;
        this.configDiv.style.display = 'none';
        this.quizDiv.style.display = 'block';
        this.feedback.textContent = '';
        this.feedback.style.color = '';
        this.pointsDisplay.textContent = `Puntos: ${this.score}`;
        this.applyTeamStyles(selectedTheme);
        this.showQuestion();
    }

    // Muestra la pregunta actual
    showQuestion() {
        const questionCount = document.getElementById('questionCount');
        const questionText = document.getElementById('questionText');
        const optionsDiv = document.getElementById('options');
        const question = this.questions[this.currentQuestionIndex];
        questionCount.textContent = `Pregunta ${this.currentQuestionIndex + 1} / ${this.questions.length}`;
        questionText.textContent = question.text;
        optionsDiv.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => this.checkAnswer(index));
            optionsDiv.appendChild(button);
        });
    }

    // Verifica la respuesta seleccionada
    checkAnswer(selectedIndex) {
        const question = this.questions[this.currentQuestionIndex];
        if (selectedIndex === question.correct) {
            this.feedback.textContent = '¡Correcto!';
            this.score += 100;
        } else {
            this.feedback.textContent = 'Incorrecto.';
        }
        this.pointsDisplay.textContent = `Puntos: ${this.score}`;
        this.currentQuestionIndex++;
        setTimeout(() => {
            if (this.currentQuestionIndex < this.questions.length) {
                this.feedback.textContent = '';
                this.showQuestion();
            } else {
                this.showResults();
            }
        }, 1000);
    }

    // Muestra los resultados finales
    showResults() {
        this.quizDiv.style.display = 'none';
        this.resultsDiv.style.display = 'block';
        this.scoreList.innerHTML = '';
        const maxScore = this.questions.length * 100;
        const li = document.createElement('li');
        li.textContent = `${this.playerName}: ${this.score} de ${maxScore} puntos`;
        this.scoreList.appendChild(li);
    }

    // Comparte el puntaje por WhatsApp con mensaje personalizado
    shareScore() {
        const selectedTeam = this.themeSelect.value;
        const maxScore = this.questions.length * 100;
        const scoreMessage = `¡Mira este juego! Jugué con el equipo ${selectedTeam} y obtuve ${this.score} de ${maxScore} puntos. Pruébalo y vamos a ver cuánto sabes de tu equipo. https://preguntas-y-respuestas.vercel.app/`;
        const whatsappLink = `https://wa.me/?text=${encodeURIComponent(scoreMessage)}`;
        window.open(whatsappLink, '_blank');
    }

    // Mezcla el array de preguntas
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Aplica estilos según el equipo seleccionado
    applyTeamStyles(team) {
        document.body.className = '';
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
}

// Inicializa el juego cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    if (typeof questionsData !== 'undefined') {
        new QuizGame(questionsData);
    } else {
        console.error('questionsData no está definido');
    }
});
