document.addEventListener("DOMContentLoaded", function() {
    // Toggle FAQ answers when the title is clicked
    document.querySelectorAll('.faq h2').forEach(question => {
        question.addEventListener('click', function() {
            toggleAnswer(this);
        });
    });

    // Function to toggle the answer visibility
    function toggleAnswer(element) {
        var answer = element.nextElementSibling;
        if (answer.style.display === "none" || answer.style.display === "") {
            answer.style.display = "block";
        } else {
            answer.style.display = "none";
        }
    }
});
