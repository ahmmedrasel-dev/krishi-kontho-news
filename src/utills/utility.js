const getUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};

const convertNumberToBangla = (number) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return number
    .toString()
    .split("")
    .map((digit) =>
      /\d/.test(digit) ? banglaDigits[parseInt(digit, 10)] : digit
    )
    .join("");
};

export { convertNumberToBangla, getUrl };
