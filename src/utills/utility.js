const getUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};

const convertNumberToBangla = (number) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return number
    .toString()
    .split("")
    .map((digit) => (isNaN(digit) ? digit : banglaDigits[digit]))
    .join("");
};

const convertDateTimeToBangla = (dateTimeString) => {
  // Parse the ISO date-time string
  const date = new Date(dateTimeString);

  // Extract components
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth(); // Month is 0-based
  const day = date.getUTCDate();
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

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

  // Determine AM/PM and adjust hours
  const period = hours >= 12 ? "পিএম" : "এএম";
  hours = hours % 12 || 12;

  // Convert components to Bangla
  const banglaYear = convertNumberToBangla(year);
  const banglaMonth = banglaMonths[month];
  const banglaDay = convertNumberToBangla(day);
  const banglaHours = convertNumberToBangla(hours);
  const banglaMinutes = convertNumberToBangla(minutes);
  const banglaSeconds = convertNumberToBangla(seconds);

  // Construct the Bangla date-time string
  return `${banglaDay} ${banglaMonth} ${banglaYear}, ${banglaHours}:${banglaMinutes}:${banglaSeconds} ${period}`;
};

export { convertDateTimeToBangla, convertNumberToBangla, getUrl };
