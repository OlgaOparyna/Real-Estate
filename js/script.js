const swiper = new Swiper('.slider-main-block', {
	
	loop: true,
	navigation: {
	  nextEl: '.body-main-block__arrow.swiper-button-next',
	  prevEl: '.body-main-block__arrow.swiper-button-prev',
	},
 });

 // tabs 

const tabNavItems = document.querySelectorAll('.tabs-deals__button')
const tabItems = document.querySelectorAll('.item-tabs')

document.addEventListener('click', function(e){
	const targetElement = e.target;
	let currentActiveIndex = null;
	let newActiveIndex = null;
	if(targetElement.closest('.tabs-deals__button')){
		tabNavItems.forEach((item, index)=>{
			if(item.classList.contains('active')){
				currentActiveIndex = index;
				item.classList.remove('active')
			}
			if(item === targetElement){
				newActiveIndex = index;
			}
		})
		targetElement.classList.add('active')
		tabItems[currentActiveIndex].classList.remove('active')
		tabItems[newActiveIndex].classList.add('active')
	}
})