function highlight() {
	const boldWords = document.querySelectorAll('strong');
  for (const word of boldWords) {
    word.style.color = 'green';
  }
}


function return_normal() {
   const boldWords = document.querySelectorAll('strong');
  for (const word of boldWords) {
    word.style.color = 'black';
  }
}