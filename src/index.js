module.exports = function makeExchange(currency) {
  var fullCash = currency;

  var h = 0; var q = 0; var d = 0; var n = 0; var p = 0;
  if (fullCash < 0 || fullCash == 0)
      {
        return {};
      }

      else if (fullCash > 10000)
        {return {
          error: "You are rich, my friend! We don't have so much coins for exchange"
          };
        }

      else {
        var obj = {};

        while (fullCash > 49 ) {
          fullCash -= 50;
          h++;
        }

        while (fullCash > 24 ) {
          fullCash -= 25;
          q++;
        }

        while (fullCash > 9 ) {
          fullCash -= 10;
          d++;
        }

        while (fullCash > 4 ) {
          fullCash -= 5;
          n++;
        }

        while (fullCash > 0 ) {
          fullCash -= 1;
          p++;
        }

        if (h > 0) { obj.H = h; }
        if (q > 0) { obj.Q = q; }
        if (d > 0) { obj.D = d; }
        if (n > 0) { obj.N = n; }
        if (p > 0) { obj.P = p; }

        return obj;
      }
}
