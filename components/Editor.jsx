import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

export default function CodeEditor() {
  // State to store the code
  const [code, setCode] = useState('// Write your code here\nconsole.log("Hello World!");');
  
  // State to store selected language
  const [language, setLanguage] = useState('javascript');

  // Handle code changes
  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header/Toolbar */}
      <div className="bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700">
        <h1 className="text-white text-xl font-bold">Real-Time Code Editor</h1>
        
        {/* Language Selector */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="typescript">TypeScript</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
      </div>

      {/* Monaco Editor */}
      <div className="flex-1">
        <Editor
          height="100%"
          language={language}
          value={code}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: true },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            wordWrap: 'on',
            lineNumbers: 'on',
            renderWhitespace: 'selection',
            bracketPairColorization: {
              enabled: true
            }
          }}
        />
      </div>
    </div>
  );
}