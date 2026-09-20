import { EditorContent, useEditor } from "@tiptap/react";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";

interface NoteEditorProps {
  content?: string;
  onChange?: (content: string) => void;
}

export default function NoteEditor({
  content = "",
  onChange,
}: NoteEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content,
    immediatelyRender: false,

    onUpdate: ({ editor }: { editor: Editor }) => {
      onChange?.(editor.getHTML());
    }
  });

  if (!editor) {
    return null;
  }


  return (
    <div className="w-full max-w-4xl mx-auto">
      <EditorContent editor={editor} />
    </div>
  )
}