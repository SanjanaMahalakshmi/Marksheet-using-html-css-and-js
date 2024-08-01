// document.addEventListener("DOMContentLoaded", function() {
//     const theoryInputs = [
//         document.getElementById("theory1"),
//         document.getElementById("theory2"),
//         document.getElementById("theory3"),
//         document.getElementById("theory4"),
//         document.getElementById("theory5"),
//         document.getElementById("theory6")
//     ];
    
//     const practicalInputs = [
//         document.getElementById("practical1"),
//         document.getElementById("practical2"),
//         document.getElementById("practical3"),
//         document.getElementById("practical4"),
//         document.getElementById("practical5"),
//         document.getElementById("practical6")
//     ];
    
//     const totalInputs = [
//         document.getElementById("total1"),
//         document.getElementById("total2"),
//         document.getElementById("total3"),
//         document.getElementById("total4"),
//         document.getElementById("total5"),
//         document.getElementById("total6")
//     ];
    
//     const gradeInputs = [
//         document.getElementById("grade1"),
//         document.getElementById("grade2"),
//         document.getElementById("grade3"),
//         document.getElementById("grade4"),
//         document.getElementById("grade5"),
//         document.getElementById("grade6")
//     ];

//     const gradeMapping = (total) => {
//         if (total >= 90) return "Grade:A";
//         if (total >= 80) return "Grade:B";
//         if (total >= 70) return "Grade:C";
//         if (total >= 60) return "Grade:D";
//         if (total >= 50) return "Grade:E";
//         return "Grade:F";
//     };

//     theoryInputs.forEach((input, index) => {
//         input.addEventListener("input", () => {
//             const theory = parseInt(theoryInputs[index].value) || 0;
//             const practical = parseInt(practicalInputs[index].value) || 0;
//             const total = theory + practical;
//             totalInputs[index].value = total;
//             gradeInputs[index].value = gradeMapping(total);
//         });
//     });

//     practicalInputs.forEach((input, index) => {
//         input.addEventListener("input", () => {
//             const theory = parseInt(theoryInputs[index].value) || 0;
//             const practical = parseInt(practicalInputs[index].value) || 0;
//             const total = theory + practical;
//             totalInputs[index].value = total;
//             gradeInputs[index].value = gradeMapping(total);
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const theoryInputs = [
        document.getElementById("theory1"),
        document.getElementById("theory2"),
        document.getElementById("theory3"),
        document.getElementById("theory4"),
        document.getElementById("theory5"),
        document.getElementById("theory6")
    ];
    
    const practicalInputs = [
        document.getElementById("practical1"),
        document.getElementById("practical2"),
        document.getElementById("practical3"),
        document.getElementById("practical4"),
        document.getElementById("practical5"),
        document.getElementById("practical6")
    ];
    
    const totalInputs = [
        document.getElementById("total1"),
        document.getElementById("total2"),
        document.getElementById("total3"),
        document.getElementById("total4"),
        document.getElementById("total5"),
        document.getElementById("total6")
    ];
    
    const gradeInputs = [
        document.getElementById("grade1"),
        document.getElementById("grade2"),
        document.getElementById("grade3"),
        document.getElementById("grade4"),
        document.getElementById("grade5"),
        document.getElementById("grade6")
    ];

    const gradeMapping = (total) => {
        if (total >= 90) return "A";
        if (total >= 80) return "B";
        if (total >= 70) return "C";
        if (total >= 60) return "D";
        if (total >= 50) return "E";
        return "F";
    };

    const calculateGrandTotal = () => {
        let grandTotal = 0;
        totalInputs.forEach(input => {
            grandTotal += parseInt(input.value) || 0;
        });
        document.getElementById("total").textContent = grandTotal;
        return grandTotal;
    };

    const calculatePercentage = (grandTotal, maxMarks) => {
        const percentage = (grandTotal / maxMarks) * 100;
        document.getElementById("percentage").textContent = percentage.toFixed(2) + '%';
    };

    const calculateGrade = (grandTotal, totalSubjects) => {
        const average = grandTotal / totalSubjects;
        const overallGrade = gradeMapping(average);
        document.getElementById("grade").textContent = overallGrade;
        return overallGrade;
    };

    const calculateAll = () => {
        const grandTotal = calculateGrandTotal();
        calculatePercentage(grandTotal, totalInputs.length * 100);
        calculateGrade(grandTotal, totalInputs.length);
    };

    theoryInputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            const theory = parseInt(theoryInputs[index].value) || 0;
            const practical = parseInt(practicalInputs[index].value) || 0;
            const total = theory + practical;
            totalInputs[index].value = total;
            gradeInputs[index].value = gradeMapping(total);
            calculateAll();
        });
    });

    practicalInputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            const theory = parseInt(theoryInputs[index].value) || 0;
            const practical = parseInt(practicalInputs[index].value) || 0;
            const total = theory + practical;
            totalInputs[index].value = total;
            gradeInputs[index].value = gradeMapping(total);
            calculateAll();
        });
    });

    calculateAll(); // Initial calculation to set the values when the page loads
});
