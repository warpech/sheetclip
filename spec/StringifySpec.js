import { SheetClip as SheetClipType } from "../dist/index.esm.js";
import { loadFiles } from "./helpers/SpecHelper.js";

describe('SheetClip.stringify', function () {
  const SheetClip = new SheetClipType();

  var UNDEFINED = (function () {
  }());

  describe('JSON specific - data types', function () {
    it('should treat undefined as empty string', function () {
      var arr = [
        [1, UNDEFINED, 3],
        [4, 5, 6]
      ];

      var str = SheetClip.stringify(arr);

      var expected = '1\t\t3\n4\t5\t6\n';

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
  });



  describe('test files', function () {

    it('should stringify plain text values (01_simple.json - output from Excel Starter 2010)', async function () {
      var test = {
        tsv: 'spec/01_simple.txt',
        json: 'spec/01_simple.json'
      };
      var files = {};

      await loadFiles(test, files);

      
      var parsedJson = JSON.parse(files.json);
      var stringifiedJson = SheetClip.stringify(parsedJson);
      expect(stringifiedJson).toEqual(files.tsv);
    });

    it('should stringify fully quoted cell (02_quoted_cell.json - output from Excel Starter 2010)', async function () {
      var test = {
        tsv: 'spec/02_quoted_cell.txt',
        json: 'spec/02_quoted_cell.json'
      };
      var files = {};

      await loadFiles(test, files);

      
      var parsedJson = JSON.parse(files.json);
      var stringifiedJson = SheetClip.stringify(parsedJson);
      expect(stringifiedJson).toEqual(files.tsv);
    });

    it('should stringify cell with a quoted word (03_quoted_word.json - output from Excel Starter 2010)', async function () {
      var test = {
        tsv: 'spec/03_quoted_word.txt',
        json: 'spec/03_quoted_word.json'
      };
      var files = {};

      await loadFiles(test, files);

      
      var parsedJson = JSON.parse(files.json);
      var stringifiedJson = SheetClip.stringify(parsedJson);
      expect(stringifiedJson).toEqual(files.tsv);
    });

    it('should stringify a multiline cell (04_multiline.json - output from Excel Starter 2010)', async function () {
      var test = {
        tsv: 'spec/04_multiline.txt',
        json: 'spec/04_multiline.json'
      };
      var files = {};

      await loadFiles(test, files);

      
      var parsedJson = JSON.parse(files.json);
      var stringifiedJson = SheetClip.stringify(parsedJson);
      expect(stringifiedJson).toEqual(files.tsv);
    });

    it('should stringify a multiline cell with a quoted word (05_quoted_multiline.json - output from Excel Starter 2010)', async function () {
      var test = {
        tsv: 'spec/05_quoted_multiline.txt',
        json: 'spec/05_quoted_multiline.json'
      };
      var files = {};

      await loadFiles(test, files);

      
      var parsedJson = JSON.parse(files.json);
      var stringifiedJson = SheetClip.stringify(parsedJson);
      expect(stringifiedJson).toEqual(files.tsv);
    });

    it('should stringify a cell that starts with a quote (06_quote_beginning.json - output from Excel Starter 2010)', async function () {
      var test = {
        tsv: 'spec/06_quote_beginning.txt',
        json: 'spec/06_quote_beginning.json'
      };
      var files = {};

      await loadFiles(test, files);

      
      var parsedJson = JSON.parse(files.json);
      var stringifiedJson = SheetClip.stringify(parsedJson);
      expect(stringifiedJson).toEqual(files.tsv);
    });

    it('should stringify a cell that ends with a quote (07_quote_ending.json - output from Excel Starter 2010)', async function () {
      var test = {
        tsv: 'spec/07_quote_ending.txt',
        json: 'spec/07_quote_ending.json'
      };
      var files = {};

      await loadFiles(test, files);

      
      var parsedJson = JSON.parse(files.json);
      var stringifiedJson = SheetClip.stringify(parsedJson);
      expect(stringifiedJson).toEqual(files.tsv);
    });
  });
});