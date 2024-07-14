function calculateGrade() {
    const subject1 = parseFloat(document.getElementById('subject1').value) || 0;
    const subject2 = parseFloat(document.getElementById('subject2').value) || 0;
    const subject3 = parseFloat(document.getElementById('subject3').value) || 0;
    const subject4 = parseFloat(document.getElementById('subject4').value) || 0;
    const subject5 = parseFloat(document.getElementById('subject5').value) || 0;

    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const averageMarks = totalMarks / 5;
    let grade;

    if (averageMarks >= 90) {
        grade = 'A';
    } else if (averageMarks >= 80) {
        grade = 'B';
    } else if (averageMarks >= 70) {
        grade = 'C';
    } else if (averageMarks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    const result = document.getElementById('result');
    result.textContent = `Total Marks: ${totalMarks}, Average Marks: ${averageMarks.toFixed(2)}, Grade: ${grade}`;
    result.style.opacity = 1;

    // Clear the form and result after 10 seconds
    setTimeout(() => {
        document.getElementById('subject1').value = '';
        document.getElementById('subject2').value = '';
        document.getElementById('subject3').value = '';
        document.getElementById('subject4').value = '';
        document.getElementById('subject5').value = '';
        result.style.opacity = 0;
    }, 10000);
}