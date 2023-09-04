const etiquetas = document.querySelectorAll('.control-formulario label')

etiquetas.forEach(etiqueta => {
    etiqueta.innerHTML = etiqueta.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})
