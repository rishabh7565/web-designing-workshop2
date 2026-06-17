
        function calculate() {
        const n = parseInt(document.getElementById('userInput').value);
        const display = document.getElementById('result');

        // Clear previous styling
        display.classList.remove('error');
        display.style.display = 'none';

        if (isNaN(n) || n < 0) {
            display.innerText = "Please enter a non-negative integer.";
            display.classList.add('error');
            display.style.display = 'block';
            return;
        }

        let factorial = 1;
        // Loop to calculate factorial
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }

        display.innerText = n + "! = " + factorial;
        display.style.display = 'block';
    }