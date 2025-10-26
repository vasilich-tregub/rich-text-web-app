# Rich Text Web Application

Despite the first impression that can be incurred from the caption, this repository is about the path leading to 
a successful solution of the underlying task which the application is supposed to serve. The journey starts from 
questioning whether you really need a full-fledged tool for fancy formatting and text decoration. It may happen 
that the decision is outside your control. The following story is about how code development challenges can 
direct you to better understanding of project requirements.

Embarking on development of a WYSIWYG tool (tools) for on-screen text generation, why not to attempt re-use of 
html5 rich text editor based on the textarea control? A beautifully authored 
['custom rich text editor'](https://github.com/sanpops/custom-rich-text-editor) by Sundeep (sanpops) is a pure 
html5 implementation of rich text editor with a toolbar and without dependenices on external libraries or 
frameworks.

Sundeep's editor toolbar has a typical set of richtext editor controls with a noticeable omission of those that 
set a font size. I added a font size control as per the SO post 
[Document execCommand fontSize in pixels](https://stackoverflow.com/questions/5868295#56103356).
In testing this feature, I learnt that execCommand is scheduled for deprecation and what it means, see 
[What's the alternative](https://stackoverflow.com/questions/60581285),
esp. answers [Year 2022-2015 answer](https://stackoverflow.com/questions/60581285#70831583) and 
[2024 answer](https://stackoverflow.com/questions/60581285#78427138).

Rather then dismiss the web application approach (or at least the use of 'deprecated' execCommand) straightaway, 
I examined what execCommand with a 'fontSize' parameter does; this and similar exercises convinced me that 
the 'correct' approach to rich text formatting required the use of styles. The decision of a creative typesetter 
user to apply the font size to a word, a text run, a paragraph is regular and systematic; haphazard font size 
changes produce sloppy visuals.

What the user might need is a WYSIWYG **CSS** editor. You need not use this tool as often as you use the rich 
text editor tool, but it is the right tool to enable the designer to use the font size suitable for various 
occasions. Finally, the font and layout controls will be replaced to the WYSIWYG **CSS** editor
page; the rich text editor page will retain only the style selection control.

WYSIWYG **CSS** editor for this project is work-in-progress. There are few WYSIWYG CSS editor on github, 
but this project approach is to implement features without dependenices on external libraries or frameworks.

## Other features

To save the rich text to a text file using the File System API implemented with the code borrowed from
[File System API demo by Mehmet Burak Erman](https://github.com/mburakerman/file-system-access-api-demo).


The webpage 'canvas.html' demonstrates how to draw glyph outlines with stroke width and opacity set in UI. 
The canvas content, transformed to image (canvas.toBlob()), can be downloaded to a local filesystem.

