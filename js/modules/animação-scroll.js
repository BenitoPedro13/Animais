export default function initScrollAnimation () {
  const sections = document.querySelectorAll('[data-anime="scroll"');
  if (sections.length) {
    sections[0].classList.add('ativo');
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach( (item, index) => {
        const heigth = item.getBoundingClientRect().top;
        const isSectionVisible = (heigth - windowMetade) < 0;
        if(isSectionVisible) 
          sections[index].classList.add('ativo');
        else 
          sections[index].classList.remove('ativo');
      })
    }

    window.addEventListener('scroll', animaScroll);
  }
  
};
