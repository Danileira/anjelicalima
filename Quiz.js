function nextQuestion(current) {
    const currentQuestion = document.getElementById(`question${current}`);
    const nextQuestion = document.getElementById(`question${current + 1}`);
    
    // Oculta a pergunta atual e exibe a próxima
    currentQuestion.style.display = "none";
    if (nextQuestion) {
        nextQuestion.style.display = "block";
    } else {
        // Se for a última pergunta, exibe o resultado
        document.getElementById("result").style.display = "block";
    }
}