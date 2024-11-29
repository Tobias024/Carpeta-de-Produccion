window.addEventListener('DOMContentLoaded', function() {
    var cuadrado = document.querySelector('.cuadrado-transparente');

    var margin = '5px';
    cuadrado.style.margin = margin;
    cuadrado.style.width = 'calc(100% - 10px)';
    cuadrado.style.height = 'calc(100% - 10px)';
    cuadrado.style.position = 'absolute';
    cuadrado.style.top = '50%';
    cuadrado.style.left = '50%';
    cuadrado.style.transform = 'translate(-50%, -50%)';
    cuadrado.style.boxSizing = 'border-box';
});
