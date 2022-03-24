const menu = document.getElementById('menu');
const indicador = document.getElementById('indicador');
const sections = document.querySelectorAll('.section');

let tamIndicador = menu.querySelector('a').offsetWidth;
indicador.style.width = tamIndicador + 'px';

let indexSectionActiva;

/* Observador*/
const observer = new IntersectionObserver((entradas, observer) => {
	entradas.forEach(entrada => {
		if(entrada.isIntersecting){
			indexSectionActiva = [...sections].indexOf(entrada.target);
			indicador.style.transform = `translateX(${tamIndicador * indexSectionActiva}px)`;
		}
	});
}, {
	rootMargin: '-80px 0px 0px 0px',
	threshold: 0.1
});

observer.observe(document.getElementById('menu'));
sections.forEach(section => observer.observe(section));

/* pantalla cambio de tamaño*/
const onResize = () => {

	tamIndicador = menu.querySelector('a').offsetWidth;
	indicador.style.width = `${tamIndicador}px`;
	indicador.style.transform = `translateX(${tamIndicador * indexSectionActiva}px)`;
}

window.addEventListener('resize', onResize);