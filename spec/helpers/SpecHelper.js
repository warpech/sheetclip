import { readFile } from "node:fs/promises";

export async function loadText(url, callback)
{
  /*
  const response = await fetch(`${url}`);
  const result = await response.text();
  
  if (callback)
    callback(result);

  return result;
  */
 
  // Using Node to load the files. relative urls are failing in both the browser and command line test.
  // using the "file://" protocol yields a "Not Supported" Error.

  const file = await readFile(
    url,
    {
      encoding: "utf8"
    }
  );

  if (callback)
    callback(file);

  return file;
}

export async function loadFiles(filenames, files)
{
  for (const fileName in filenames) 
  {
    const file = filenames[fileName];
    const content = await loadText(file);
    files[fileName] = content;
  }
}

/*
async function filesLoaded(filenames, files) 
{
  await loadFiles(filenames, files);
  return function() {
    return (Object.keys(filenames).length === Object.keys(files).length);
  }
}
*/