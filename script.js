document.getElementById("pythagoras-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        document.getElementById("result").innerText = "Palun sisesta kehtivad väärtused!";
        return;
    }

    const c = Math.sqrt(a * a + b * b).toFixed(2);
    document.getElementById("result").innerText = `Hüpotenuus c = ${c}`;
});
