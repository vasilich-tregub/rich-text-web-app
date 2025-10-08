# Custom Rich Text Editor
Original [README by Sundeep (sanpops)](https://github.com/sanpops/custom-rich-text-editor)

```
This project is a lightweight and customizable rich text editor built using **HTML**, **CSS**, and **JavaScript**. It demonstrates how to create an editor from scratch with commonly used features like:

- Bold, Italic, Underline, and Strikethrough text formatting.
- Font family and color selection.
- Text alignment options (left, center, right, justify).
- Insert links and images.
- **Code View**: Edit the raw HTML content.
- **Live Preview**: Render the content dynamically.

## Features
- Full customization of design and features.
- Works across modern browsers.
- Simple and clean code for easy integration into your projects.

## Folder Structure
/project-folder

├── index.html

├── editor.css

└── editor.js

## Usage
1. Clone this repository:

   git clone https://github.com/sanpops/custom-rich-text-editor

2. Open `index.html` in your browser.
3. Use the editor toolbar to format text, edit raw HTML, or preview the content.

## Future Enhancements
- Add undo/redo functionality.
- Implement keyboard shortcuts (e.g., `Ctrl+B` for bold).
- Sanitize user input with libraries like [DOMPurify](https://github.com/cure53/DOMPurify).
- Make it responsive for mobile devices.
- Add custom plugins for inserting tables, emojis, and charts.

## Contribution
Feel free to fork, explore, and contribute to the project. Suggestions and pull requests are welcome!

## Demo
![image](https://github.com/user-attachments/assets/b7d73510-33fb-4668-a952-7ffbfca0f56d)
```
# This repo's enhancements to the original Custom Rich Text Editor
To the original code, I added a font size control inspired by the SO post 
[Document edecCommand fontSize in pixels](https://stackoverflow.com/questions/5868295/document-execcommand-fontsize-in-pixels#56103356)

and 

the ability to save the rich text to a text file using the File System API. The code is borrowed from
[File System API demo by Mehmet Burak Erman](https://github.com/mburakerman/file-system-access-api-demo).
