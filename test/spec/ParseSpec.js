describe('SheetClip.parse', function () {
  describe('TSV specific - line endings', function () {
    /*it('should parse \\r\\n', function () {
     var str = '1\t2\t3\r\n4\t5\t6\r\n';

     var expected = [
     ['1', '2', '3'],
     ['4', '5', '6']
     ];

     var arr = SheetClip.parse(str);

     expect(arr).toEqual(expected);
     });*/

    it('should parse \\n', function () {
      var str = '1\t2\t3\n4\t5\t6\n';

      var expected = [
        ['1', '2', '3'],
        ['4', '5', '6']
      ];

      var arr = SheetClip.parse(str);

      expect(arr).toEqual(expected);
    });
  });

  describe('test files', function () {

    it('should parse plain text values (01_simple.txt - output from Excel Starter 2010)', function () {
      var test = {
        tsv: 'spec/01_simple.txt',
        json: 'spec/01_simple.json'
      };
      var files = {};

      waitsFor(filesLoaded(test, files));

      runs(function () {
        var parsedTsv = SheetClip.parse(files.tsv);
        var parsedJson = JSON.parse(files.json);
        expect(parsedTsv).toEqual(parsedJson);
      });
    });

    it('should parse fully quoted cell (02_quoted_cell.txt - output from Excel Starter 2010)', function () {
      var test = {
        tsv: 'spec/02_quoted_cell.txt',
        json: 'spec/02_quoted_cell.json'
      };
      var files = {};

      waitsFor(filesLoaded(test, files));

      runs(function () {
        var parsedTsv = SheetClip.parse(files.tsv);
        var parsedJson = JSON.parse(files.json);
        expect(parsedTsv).toEqual(parsedJson);
      });
    });

    it('should parse cell with a quoted word (03_quoted_word.txt - output from Excel Starter 2010)', function () {
      var test = {
        tsv: 'spec/03_quoted_word.txt',
        json: 'spec/03_quoted_word.json'
      };
      var files = {};

      waitsFor(filesLoaded(test, files));

      runs(function () {
        var parsedTsv = SheetClip.parse(files.tsv);
        var parsedJson = JSON.parse(files.json);
        expect(parsedTsv).toEqual(parsedJson);
      });
    });

    it('should parse a multiline cell (04_multiline.txt - output from Excel Starter 2010)', function () {
      var test = {
        tsv: 'spec/04_multiline.txt',
        json: 'spec/04_multiline.json'
      };
      var files = {};

      waitsFor(filesLoaded(test, files));

      runs(function () {
        var parsedTsv = SheetClip.parse(files.tsv);
        var parsedJson = JSON.parse(files.json);
        expect(parsedTsv).toEqual(parsedJson);
      });
    });

    it('should parse a multiline cell with a quoted word (05_quoted_multiline.txt - output from Excel Starter 2010)', function () {
      var test = {
        tsv: 'spec/05_quoted_multiline.txt',
        json: 'spec/05_quoted_multiline.json'
      };
      var files = {};

      waitsFor(filesLoaded(test, files));

      runs(function () {
        var parsedTsv = SheetClip.parse(files.tsv);
        var parsedJson = JSON.parse(files.json);
        expect(parsedTsv).toEqual(parsedJson);
      });
    });

    it('should parse a cell that starts with a quote (06_quote_beginning.txt - output from Excel Starter 2010)', function () {
      var test = {
        tsv: 'spec/06_quote_beginning.txt',
        json: 'spec/06_quote_beginning.json'
      };
      var files = {};

      waitsFor(filesLoaded(test, files));

      runs(function () {
        var parsedTsv = SheetClip.parse(files.tsv);
        var parsedJson = JSON.parse(files.json);
        expect(parsedTsv).toEqual(parsedJson);
      });
    });

    it('should parse a cell that ends with a quote (07_quote_ending.txt - output from Excel Starter 2010)', function () {
      var test = {
        tsv: 'spec/07_quote_ending.txt',
        json: 'spec/07_quote_ending.json'
      };
      var files = {};

      waitsFor(filesLoaded(test, files));

      runs(function () {
        var parsedTsv = SheetClip.parse(files.tsv);
        var parsedJson = JSON.parse(files.json);
        expect(parsedTsv).toEqual(parsedJson);
      });
    });

    it('should parse a single column, where one of the cells is a quoted word (08_quoted_word_single_column.txt - output from Excel for Mac 2011)', function () {
      var test = {
        tsv: 'spec/08_quoted_word_single_column.txt',
        json: 'spec/08_quoted_word_single_column.json'
      };
      var files = {};

      waitsFor(filesLoaded(test, files));

      runs(function () {
        var parsedTsv = SheetClip.parse(files.tsv);
        var parsedJson = JSON.parse(files.json);
        expect(parsedTsv).toEqual(parsedJson);
      });
    });

  });
});