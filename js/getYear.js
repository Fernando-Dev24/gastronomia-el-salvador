const getYear = () => {
   const year = document.getElementById('year');
   year.textContent = new Date().getFullYear();
};

window.onload = getYear();