document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    
    document.getElementById('coordenadasRaton').textContent = `X: ${x}, Y: ${y}`;
    
});