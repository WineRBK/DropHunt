import React, { FC, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import s from './Editor.module.scss';

interface EditorProps {
  handle: (html: string) => {};
}

const TextEditor: FC<EditorProps> = ({ handle }) => {
  const [editorContent, setEditorContent] = useState<string>('');

  const handleEditorChange = (content, delta, source, editor) => {
    setEditorContent(content);
    handle(content);
  };

  return (
    <div className={s.editor}>
      <ReactQuill
        value={editorContent}
        onChange={handleEditorChange}
        modules={{
          toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            ['clean'],
          ],
          clipboard: {
            matchVisual: false,
          },
        }}
        formats={[
          'header',
          'font',
          'size',
          'bold',
          'italic',
          'underline',
          'strike',
          'blockquote',
          'list',
          'bullet',
          'link',
          'image',
          'video',
        ]}
      />
    </div>
  );
};

export default TextEditor;
