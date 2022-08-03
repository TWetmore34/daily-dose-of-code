// Copied from https://github.com/luvuong-le/code-editor-tutorial/blob/configuring-ace/lib/js/editor.js

// Retrieve Elements
const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');
// const consoleBox = document.querySelector('#console');

// Setup Ace
let codeEditor = ace.edit("editorCode");
let defaultCode = '';
let result = ace.edit("console");
let consoleMessages = [];

let editorLib = {
    init() {
        // Configure Ace

        // Theme
        codeEditor.setTheme("ace/theme/dreamweaver");

        // Set language
        codeEditor.session.setMode("ace/mode/javascript");

        // Set Options
        codeEditor.setOptions({
            fontFamily: 'Inconsolata',
            fontSize: '12pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        });

        // Set Default Code
        codeEditor.setValue(defaultCode);
    }
}

// Events
executeCodeBtn.addEventListener('click', () => {
    // Get input from the code editor
    const userCode = codeEditor.getValue();

    // Run the user code
    try {
        // Display result in the browser console
        new Function(userCode)();

        // result.setValue(resetCodeBtn);
    } catch (err) {
        console.error(err);
    }

    // print to console
});

resetCodeBtn.addEventListener('click', () => {
    // Clear ace editor
    codeEditor.setValue(defaultCode);

    // clear console
})

editorLib.init();