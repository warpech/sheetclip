function loadText(url, callback) {
  var req = new XMLHttpRequest();
  req.addEventListener('load', function (event) {
    callback(event.target.response);
  }, false);
  req.open("GET", url, true);
  req.send();
}

function loadFiles(filenames, files) {
  for (var i in filenames) {
    if (filenames.hasOwnProperty(i)) {
      loadText(filenames[i], (function (i) {
        return function (text) {
          files[i] = text;
        }
      })(i));
    }
  }
}

function filesLoaded(filenames, files) {
  loadFiles(filenames, files);
  return function() {
    return (Object.keys(filenames).length === Object.keys(files).length);
  }
}