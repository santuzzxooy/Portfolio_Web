function typeWriterEffect(elementId, text, speed = 100, delay = 1500) {
    if (typeof document === "undefined") return;

    let i = 0;
    let isDeleting = false;
    const element = document.getElementById(elementId);
    if (!element) return;

    function type() {
        if (isDeleting) {
            element.innerHTML = text.substring(0, i - 1);
            i--;
        } else {
            element.innerHTML = text.substring(0, i + 1);
            i++;
        }

        let nextSpeed = speed;

        if (!isDeleting && i === text.length) {
            nextSpeed = delay; // Espera un poco antes de borrar
            isDeleting = true;
        } else if (isDeleting && i === 0) {
            isDeleting = false;
        }

        setTimeout(type, nextSpeed);
    }

    element.innerHTML = "";
    element.style.borderRight = "3px solid white"; // Simula un cursor
    type();
}

export default typeWriterEffect;