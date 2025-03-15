export default function lightningEffect(canvasRef, bannerRef) {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;

    if (!canvas || !banner) {
        return;
    }


    const ctx = canvas.getContext("2d");
    canvas.width = banner.clientWidth;
    canvas.height = banner.clientHeight;

    function resizeCanvas() {
        canvas.width = banner.clientWidth;
        canvas.height = banner.clientHeight;
    }

    function drawMiniLightning(x, y) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let j = 0; j < 2; j++) {
            ctx.beginPath();
            ctx.moveTo(x, y);

            let lastX = x;
            let lastY = y;
            let segments = 6;

            for (let i = 0; i < segments; i++) {
                let newX = lastX + (Math.random() * 40 - 20);
                let newY = lastY + (Math.random() * 40 - 20); 
                ctx.lineTo(newX, newY);
                lastX = newX;
                lastY = newY;
            }

            let colors = ["rgba(255, 255, 255, 0.7)", "rgba(173, 216, 230, 0.7)"];
            ctx.strokeStyle = colors[j % colors.length];
            ctx.lineWidth = 2;
            ctx.shadowBlur = 15;
            ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
            ctx.stroke();
        }

        setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 100);
    }

    function mouseMoveHandler(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        drawMiniLightning(x, y);
    }

    banner.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("resize", resizeCanvas);
}
