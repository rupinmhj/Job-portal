// src/components/TiptapEditor.js
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";

export const TiptapEditor = ({ value, onChange, theme }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      TextStyle,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: `prose prose-sm dark:prose-invert focus:outline-none max-w-none ${theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
          } p-2 rounded border border-gray-300 focus:border-gray-600 min-h-[200px]`,
      },
    },
  });

  return (
    <div
      className={`rounded border ${theme === "dark"
        ? "border-gray-600 bg-gray-800"
        : "border-gray-300 bg-white"
        }`}
    >
      <MenuBar editor={editor} theme={theme} />
      <EditorContent editor={editor} />
    </div>
  );
};

// Optional: Add a menu bar similar to TinyMCE's toolbar
const MenuBar = ({ editor, theme }) => {
  if (!editor) return null;

  return (
    <div
      className={`flex flex-wrap gap-1 p-1 ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"
        }`}
    >
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-1 rounded ${editor.isActive("bold")
          ? "bg-blue-500 text-white"
          : theme === "dark"
            ? "hover:bg-gray-600 text-gray-200"
            : "hover:bg-gray-200 text-gray-700"
          }`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-1 rounded ${editor.isActive("italic")
          ? "bg-blue-500 text-white"
          : theme === "dark"
            ? "hover:bg-gray-600 text-gray-200"
            : "hover:bg-gray-200 text-gray-700"
          }`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-1 rounded ${editor.isActive("underline")
          ? "bg-blue-500 text-white"
          : theme === "dark"
            ? "hover:bg-gray-600 text-gray-200"
            : "hover:bg-gray-200 text-gray-700"
          }`}
      >
        Underline
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-1 rounded ${editor.isActive("bulletList")
          ? "bg-blue-500 text-white"
          : theme === "dark"
            ? "hover:bg-gray-600 text-gray-200"
            : "hover:bg-gray-200 text-gray-700"
          }`}
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-1 rounded ${editor.isActive("orderedList")
          ? "bg-blue-500 text-white"
          : theme === "dark"
            ? "hover:bg-gray-600 text-gray-200"
            : "hover:bg-gray-200 text-gray-700"
          }`}
      >
        Numbered List
      </button>
      <button
        onClick={() => {
          const previousUrl = editor.getAttributes("link").href;
          const url = window.prompt("URL", previousUrl);

          if (url === null) return;
          if (url === "") {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
          }

          editor
            .chain()
            .focus()
            .extendMarkRange("link")
            .setLink({ href: url })
            .run();
        }}
        className={`p-1 rounded ${editor.isActive("link")
          ? "bg-blue-500 text-white"
          : theme === "dark"
            ? "hover:bg-gray-600 text-gray-200"
            : "hover:bg-gray-200 text-gray-700"
          }`}
      >
        Link
      </button>
    </div>
  );
};