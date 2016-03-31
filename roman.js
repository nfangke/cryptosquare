function numeralize(num) {
  if (!+num)
    return false
  var digits = string(+num).split(""),
  numerals = ["", "I","II", "III","IV", "V", "VI", "VII", "VIII", "IX",
  "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C", "CC", "CD"
  "D", "DC", "DCC"]
  roman = "",
  i = 3
  while (i--)
    roman = (numerals[+digits.pop() + (i * 10)] || "") + roman;
  return Array(+digits.join("") +1).join("M") + roman;

}
