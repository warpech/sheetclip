describe('SheetClip.stringify', function () {
  var UNDEFINED = (function () {
  }());

  it('should stringify array of numbers', function () {
    var arr = [
      [1, 2, 3],
      [4, 5, 6]
    ];

    var str = SheetClip.stringify(arr);

    var expected = '1\t2\t3\n4\t5\t6\n';

    expect(str).toEqual(expected);
  });

  it('should stringify array of strings', function () {
    var arr = [
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
      ['G', 'H', 'I']
    ];

    var str = SheetClip.stringify(arr);

    var expected = 'A\tB\tC\nD\tE\tF\nG\tH\tI\n';

    expect(str).toEqual(expected);
  });

  it('should stringify array of strings with new line', function () {
    var arr = [
      ['A', 'B', 'C'],
      ['D', 'E\nE', 'F'],
      ['G', 'H', 'I']
    ];

    var str = SheetClip.stringify(arr);

    var expected = 'A\tB\tC\nD\t"E\nE"\tF\nG\tH\tI\n';

    expect(str).toEqual(expected);
  });

  it('should stringify array of strings with quotes', function () {
    var arr = [
      ['A', 'B', 'C'],
      ['D', '"E"', 'F "effie" F'],
      ['G', 'H', 'I']
    ];

    var str = SheetClip.stringify(arr);

    var expected = 'A\tB\tC\nD\t"E"\tF "effie" F\nG\tH\tI\n';

    expect(str).toEqual(expected);
  });

  it('should stringify array of strings with quotes and new line', function () {
    var arr = [
      ['A', '"B"', 'C'],
      ['D', '"E\nE"', 'F "effie\n finnie" F'],
      ['G', 'H', 'I']
    ];

    var str = SheetClip.stringify(arr);

    var expected = 'A\t"B"\tC\nD\t"""E\nE"""\t"F ""effie\n finnie"" F"\nG\tH\tI\n';

    expect(str).toEqual(expected);
  });

  it('should treat null as empty string', function () {
    var arr = [
      [1, null, 3],
      [4, 5, 6]
    ];

    var str = SheetClip.stringify(arr);

    var expected = '1\t\t3\n4\t5\t6\n';

    expect(str).toEqual(expected);
  });

  it('should treat undefined as empty string', function () {
    var arr = [
      [1, UNDEFINED, 3],
      [4, 5, 6]
    ];

    var str = SheetClip.stringify(arr);

    var expected = '1\t\t3\n4\t5\t6\n';

    expect(str).toEqual(expected);
  });
});