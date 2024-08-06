function openAndCloseText(e) {
    const answer = e.parentElement.parentElement.querySelector('.answer');
    const img = e.querySelector('img');

    if (answer.classList.contains('esconder-resposta') === true) {
        document.querySelectorAll(".answer").forEach(a => {
            a.classList.add('esconder-resposta')
        })
        document.querySelectorAll('.btn-expand').forEach(b => {
            b.querySelector('img').src = "assets/images/icon-plus.svg"
        })
        answer.classList.remove('esconder-resposta');
        img.src = "assets/images/icon-minus.svg";
    } else {
        answer.classList.add('esconder-resposta');
        img.src = "assets/images/icon-plus.svg";
    }
}