recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  
  listFiles: function listFiles(data, dirName) {
    //  function listFiles(data, dirName) {
    // if(fileList!=[]){
      // var fileList = [];
    // }
    // var listOfFiles = [];
    var listOfFiles = [];
    var dirs = [];
    function processDir(dir) {
      var i;
      var len;
      var file;
      var files = dir.files;
      dirs.push( dir.dir );
      for (i = 0, len = files.length; i < len; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }
      dirs.pop();
    }
    processDir(data);
    return listOfFiles;
 // }
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    if (n < 2) {
      return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
  },
};
