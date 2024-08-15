document.addEventListener('DOMContentLoaded', () => {
    const correctAnswers = {
        'index.html': 'btn4',
        'mcq2.html': 'btn1',
        'mcq3.html': 'btn3',
        'mcq4.html': 'btn4',
        'mcq5.html': 'btn1' 
    };

    const buttons = document.querySelectorAll('.choices button');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const page = window.location.pathname.split('/').pop();
            const correctAnswer = correctAnswers[page];

            buttons.forEach(btn => {
                btn.classList.remove('correct', 'incorrect');
                btn.disabled = true;
            });

            if (button.classList.contains(correctAnswer)) {
                button.classList.add('correct');
            } else {
                button.classList.add('incorrect');
                document.querySelector(`.${correctAnswer}`).classList.add('correct');
            }
        });
    });
    prevButton.addEventListener('click', () => {
        navigate(-1);
    });

    nextButton.addEventListener('click', () => {
        navigate(1);
    });

    function navigate(direction) {
        const pages = ['index.html', 'mcq2.html', 'mcq3.html', 'mcq4.html', 'mcq5.html'];
        const currentPage = window.location.pathname.split('/').pop();
        const currentIndex = pages.indexOf(currentPage);

        if (currentIndex !== -1) {
            const nextIndex = currentIndex + direction;
            if (nextIndex >= 0 && nextIndex < pages.length) {
                window.location.href = pages[nextIndex];
            }
        }
    }
});
