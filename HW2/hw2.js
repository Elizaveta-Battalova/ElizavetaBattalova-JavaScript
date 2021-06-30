let question = prompt("Напишите что-нибудь");
getVowels(question);

function getVowels(question) {
  let vowelsCount = 0;

  question.toLowerCase();

  for (let i = 0; i <= question.length; i++) {
    if (
        question.charAt(i) == "а" ||
        question.charAt(i) == "е" ||
        question.charAt(i) == "ё" ||
        question.charAt(i) == "у" ||
        question.charAt(i) == "и" ||
        question.charAt(i) == "ы" ||
        question.charAt(i) == "э" ||
        question.charAt(i) == "ю" ||
        question.charAt(i) == "я"
    ) {
      vowelsCount += 1;
    }
  }
  console.log(vowelsCount);
}
