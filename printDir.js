const printDir = (dir, ext, callback) {
	fs.readdir(dir, (err, list) => {
  		list.forEach((file) => {
    		if (path.extname(file) === '.' + ext) {
      			console.log(file);
    		}
  		});
	});
}

