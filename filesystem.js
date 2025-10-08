// the code for function fontSize(size) is borrowed from
// https://github.com/mburakerman/file-system-access-api-demo/

let fileHandle;
let file;

// file picker
async function getFileHandle() {
	const options = {
		types: [
			{
				description: "Text Files",
				accept: {
					"text/plain": [".txt"]
				}
			}
		]
	};
	[fileHandle] = await window.showOpenFilePicker(options);
	file = await fileHandle.getFile();
	//fileName.innerHTML = 'Now you can edit ' + file.name + ' and save it to disk.';
	contents = await file.text();
    const codeView = document.getElementById('code-view');
	codeView.value = contents;
	editor.innerHTML = codeView.value;
}

// write file
async function writeFile(fileHandle, newcontents) {
	// Create a FileSystemWritableFileStream to write to.
	const writable = await fileHandle.createWritable();
	// Write the contents of the file to the stream.
	await writable.write(newcontents);
	// Close the file and write the contents to disk.
	await writable.close();
}


// button clicks
getFileHandleButton.addEventListener("click", getFileHandle);
writeFileButton.addEventListener("click", _ => {
	writeFile(fileHandle, editor.innerHTML).
		then(function () {
			alert("Successfully saved to disk!")
			//info.textContent = "Successfully saved to disk!"
		})
});
