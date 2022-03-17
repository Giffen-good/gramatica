import React, { useState, useCallback, useEffect } from "react";
import { store, webrtcProvider } from "@/store";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import Icon from "@/components/IconBuilder";


const colors = ["#958DF1", "#F98181", "#FBBC88", "#FAF594", "#70CFF8", "#94FADB", "#B9F18D"];
const names = ["Lea Thompson", "Cyndi Lauper", "Tom Cruise", "Madonna"];

const getRandomElement = (list) => list[Math.floor(Math.random() * list.length)];
const getRandomColor = () => getRandomElement(colors);
const getRandomName = () => getRandomElement(names);

export default () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: "Write something …",
            }),
            Collaboration.configure({
                fragment: store.fragment,
            }),
            CollaborationCursor.configure({
                provider: webrtcProvider,
                user: { name: getRandomName(), color: getRandomColor() },
            }),
        ],
    });

    return (
        <div className='bg-zinc-200 w-full pt-28'>
            <MenuBar editor={editor} />
            <div className="editor wide-el  bg-white rounded py-10">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className={'flex fixed z-10 top-0 w-full menu-bar '}>
            <div className={'wide-el flex items-center text-xl'}>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive("bold") ? "is-active" : ""}
                >
                   <Icon name={'Bold'} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive("italic") ? "is-active" : ""}
                >
                    <Icon name={'Italic'} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive("strike") ? "is-active" : ""}
                >
                    <Icon name={'Strike'} />
                </button>
                {/*<button*/}
                {/*    onClick={() => editor.chain().focus().toggleCode().run()}*/}
                {/*    className={editor.isActive("code") ? "is-active" : ""}*/}
                {/*>*/}
                {/*    <Icon name={'code'}*/}
                {/*</button>*/}
                {/*<button onClick={() => editor.chain().focus().unsetAllMarks().run()}>clear marks</button>*/}
                {/*<button onClick={() => editor.chain().focus().clearNodes().run()}>clear nodes</button>*/}
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive("paragraph") ? "is-active" : ""}
                >
                   <Icon name={'Paragraph'} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
                >
                    H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
                >
                    H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
                >
                    H3
                </button>
                {/*<button*/}
                {/*    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}*/}
                {/*    className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}*/}
                {/*>*/}
                {/*    h4*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}*/}
                {/*    className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}*/}
                {/*>*/}
                {/*    h5*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}*/}
                {/*    className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}*/}
                {/*>*/}
                {/*    h6*/}
                {/*</button>*/}
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive("bulletList") ? "is-active" : ""}
                >
                   <Icon name={'Ul'} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive("orderedList") ? "is-active" : ""}
                >
                    <Icon name={'Ol'} />
                </button>
                {/*<button*/}
                {/*    onClick={() => editor.chain().focus().toggleCodeBlock().run()}*/}
                {/*    className={editor.isActive("codeBlock") ? "is-active" : ""}*/}
                {/*>*/}
                {/*    code block*/}
                {/*</button>*/}
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive("blockquote") ? "is-active" : ""}
                >
                   <Icon name={'Quote'} />
                </button>
                {/*<button onClick={() => editor.chain().focus().setHorizontalRule().run()}>horizontal rule</button>*/}
                {/*<button onClick={() => editor.chain().focus().setHardBreak().run()}>hard break</button>*/}
                <button onClick={() => editor.chain().focus().undo().run()}> <Icon name={'Undo'} /></button>
                <button onClick={() => editor.chain().focus().redo().run()}> <Icon name={'Redo'} /></button>
            </div>
        </div>

    );
};

import Bold from '@/assets/icons/bold.svg'
