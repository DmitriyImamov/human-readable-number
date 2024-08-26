module.exports = function toReadable (number) {
  let obj = {
    units : [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine'
    ],

    ten : [
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen'
    ],

    ty : [
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety'
    ]
  };

  let str = String(number);
  let res = '';

  if (str.length == 1) {
    if (str == 0) {
      res = 'zero'
    } else {
      res = obj.units[str];
    }
  } else if (str.length == 2) {

    if (str[0] == 1) {
      res = obj.ten[str[1]];
    } else {
      res = obj.ty[str[0] - 2] + ' ' + obj.units[str[1]];
    }

  } else if (str.length == 3) {

    if (str[1] == 0) {
      res = obj.units[str[0]] + ' ' + 'hundred' + ' ' + obj.units[str[2]];
    } else if (str[1] == 1) {
      res = obj.units[str[0]] + ' ' + 'hundred' + ' ' + obj.ten[str[2]];
    } else {
      res = obj.units[str[0]] + ' ' + 'hundred' + ' ' + obj.ty[str[1] - 2] + ' ' + obj.units[str[2]];
    }
  }

  if (res[res.length - 1] == ' ') {
    res = res.slice(0, -1);
  }

  return res;
}