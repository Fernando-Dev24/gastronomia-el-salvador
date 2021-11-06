const stepsAnimation = () => {
   const stepsItems = [...document.querySelectorAll('.step')];
   stepsItems.forEach((step) => {
      step.addEventListener('mouseenter', (e) => {
         const restOfSteps = stepsItems.filter((step) => step !== e.target);
         restOfSteps.forEach((step) => step.style.opacity = '.3');
      });

      step.addEventListener('mouseleave', (e) => {
         const restOfSteps = stepsItems.filter((step) => step !== e.target);
         restOfSteps.forEach((step) => step.style.opacity = '1');
      });
   });
};

window.onload = stepsAnimation();