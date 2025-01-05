export const drawRect = (detection, ctx) => {
    detection.forEach(predition => {
        const [x, y, width, height] = predition['bbox'];
        const text = predition['class'];

        const color = "red";
        ctx.strokeStyle = color;
        ctx.font = '18px Arial';
        ctx.fillStyle = color;

        ctx.beginPath();
        ctx.fillText(text, x, y);
        ctx.rect(x, y, width, height);
        ctx.stroke();
    });
}