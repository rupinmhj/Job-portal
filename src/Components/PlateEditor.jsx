// src/components/PlateEditor.jsx
import React from 'react';
import {
  createPlateEditor,
  createPlugins,
  Plate
} from '@udecode/plate-headless';  // Changed from '@udecode/plate'
import {
  createBoldPlugin,
  createItalicPlugin,
  createUnderlinePlugin,
  createLinkPlugin,
} from '@udecode/plate-basic-marks';
import {
  createBulletListPlugin,
  createNumberedListPlugin,
} from '@udecode/plate-basic-elements';

const plugins = createPlugins(
  [
    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createLinkPlugin(),
    createBulletListPlugin(),
    createNumberedListPlugin(),
  ],
  {
    components: {},
  }
);

export const PlateEditor = ({ value, onChange, theme }) => {
  const editor = createPlateEditor({ plugins });

  return (
    <div className={`rounded border ${
      theme === 'dark' ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-white'
    }`}>
      <Plate
        editor={editor}
        initialValue={value || [{ type: 'p', children: [{ text: '' }] }]}
        onChange={onChange}
        editableProps={{
          className: `min-h-[200px] p-2 focus:outline-none ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
          }`,
          style: {
            fontFamily: "'Urbanist', sans-serif",
            fontSize: '14px',
          },
        }}
      />
    </div>
  );
};