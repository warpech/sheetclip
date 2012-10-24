describe('SheetClip.parse', function () {
  it('should parse array of numeric strings', function () {
    var str = '1\t2\t3\n4\t5\t6\n';

    var expected = [
      ['1', '2', '3'],
      ['4', '5', '6']
    ];

    var arr = SheetClip.parse(str);

    expect(arr).toEqual(expected);
  });

  it('should parse array of strings', function () {
    var str = 'A\tB\tC\nD\tE\tF\nG\tH\tI\n';

    var expected = [
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
      ['G', 'H', 'I']
    ];

    var arr = SheetClip.parse(str);

    expect(arr).toEqual(expected);
  });

  it('should parse array of strings with new line', function () {
    var str = 'A\tB\tC\nD\t"E1\nE2"\tF\nG\tH\tI\n';

    var expected = [
      ['A', 'B', 'C'],
      ['D', 'E1\nE2', 'F'],
      ['G', 'H', 'I']
    ];

    var arr = SheetClip.parse(str);

    expect(arr).toEqual(expected);
  });

  it('should parse array of strings with quotes', function () {
    var str = 'A\tB\tC\nD\t"E"\tF "effie" F\nG\tH\tI\n';

    var expected = [
      ['A', 'B', 'C'],
      ['D', '"E"', 'F "effie" F'],
      ['G', 'H', 'I']
    ];

    var arr = SheetClip.parse(str);

    expect(arr).toEqual(expected);
  });

  it('should parse array of strings with quotes and new line', function () {
    var str = 'A\t"B"\tC\nD\t"""E\nE"""\t"F ""effie\n finnie"" F"\nG\tH\tI\n';

    var expected = [
      ['A', '"B"', 'C'],
      ['D', '"E\nE"', 'F "effie\n finnie" F'],
      ['G', 'H', 'I']
    ];

    var arr = SheetClip.parse(str);

    expect(arr).toEqual(expected);
  });

  it('should parse one column with multiple quotes and new lines', function () {
    var str = '"""A\nBC\nD"""\n"""E\n"""\n"F\nG\nH"""\n"""I\n"\nJ\n';

    var expected = [
      ['"A\nBC\nD"'],
      ['"E\n"'],
      ['F\nG\nH"'],
      ['"I\n'],
      ['J']
    ];

    var arr = SheetClip.parse(str);

    expect(arr).toEqual(expected);
  });

  it('should parse three columns with multiple quotes and new lines', function () {
    var str = '\t"""A\nBC\nD"""\tE\n"""F\n"""\t"""G\n"""\tH\n"I\nJ\nK"""\t"L\nM\nN"""\t\n"""O\n"\t"""P\n"\t\nR\tS\tT\n';

    var expected = [
      ['', '"A\nBC\nD"', 'E'],
      ['"F\n"', '"G\n"', 'H'],
      ['I\nJ\nK"', 'L\nM\nN"', ''],
      ['"O\n', '"P\n', ''],
      ['R', 'S', 'T']
    ];

    var arr = SheetClip.parse(str);

    expect(arr).toEqual(expected);
  });
});