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

const convertDateTimeToBangla = (dateTimeString) => {
  const [datePart, timePart] = dateTimeString.split(" ");
  const [year, month, day] = datePart.split("-");
  let [hours, minutes, seconds] = timePart.split(":");

  const banglaMonths = [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];

  const period = hours >= 12 ? "এএম" : "পিএম";
  hours = hours % 12 || 12;

  // Convert components to Bangla
  const banglaYear = convertNumberToBangla(year);
  const banglaMonth = banglaMonths[parseInt(month, 10) - 1];
  const banglaDay = convertNumberToBangla(day);
  const banglaHours = convertNumberToBangla(hours);
  const banglaMinutes = convertNumberToBangla(minutes);
  const banglaSeconds = convertNumberToBangla(seconds);

  // Construct the Bangla date-time string
  return `${banglaDay} ${banglaMonth} ${banglaYear}, ${banglaHours}:${banglaMinutes}:${banglaSeconds} ${period}`;
};

export { convertDateTimeToBangla, convertNumberToBangla, getUrl };
