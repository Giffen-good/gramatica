// import * as Y from 'yjs'
// import { WebsocketProvider } from 'y-websocket'
//
// import { QuillBinding } from 'y-quill'
// import Quill from 'quill'
// import QuillCursors from 'quill-cursors'
// import ReactQuill from 'react-quill';
// import React, { useEffect } from 'react';
//
// Quill.register('modules/cursors', QuillCursors)
//
// class YjsQuill extends React.Component {
//     constructor(props) {
//         super(props)
//         this.ydoc = new Y.Doc()
//         this.provider = new WebsocketProvider('ws://localhost:1234', 'test-1', this.ydoc)
//         // this.persistence = new LeveldbPersistence('./dbDir')
//         this.ytext = this.ydoc.getText('quill')
//         this.quillRef = null;      // Quill instance
//         this.reactQuillRef = null; // ReactQuill component
//         this.binding = null
//         this.editor = null
//
//     }
//     async componentDidMount() {
//
//         this.attachQuillRefs()
//         // this.persistence.storeUpdate('level-db', Y.encodeStateAsUpdate(this.ydoc))
//         // this.persistence.getYDoc('test-1').then(function(e) {
//         //     console.log(e.getArray('arr'))
//         // })
//         // this.persistence.getYDoc('level-db').then(function(e) {
//         //     console.log(e.getArray('arr').toArray())
//         //     e.getText('quill').then(function(e) {
//         //         console.log(e)
//         //     })
//         // })
//         // console.log(await (this.persistence.getYDoc('level-db').toJSON()) // [1, 2, 3]
//         // this.persistence.getAllDocNames().then(function(e) {
//         //     console.log(e);
//         // })
//         this.binding = new QuillBinding(this.ytext, this.quillRef, this.provider.awareness)
//     }
//     componentWillUnmount() {
//         this.provider.disconnect()
//     }
//
//     componentDidUpdate() {
//         this.attachQuillRefs()
//     }
//
//
//     insertText = () => {
//         var range = this.quillRef.getSelection();
//         let position = range ? range.index : 0;
//         this.quillRef.insertText(position, 'Hello, World! ')
//     }
//     attachQuillRefs = () => {
//         if (typeof this.reactQuillRef.getEditor !== 'function') return;
//         this.quillRef = this.reactQuillRef.getEditor();
//     }
//     render() {
//         return (
//             <section className='quill-editor'>
//                 <ReactQuill
//                             ref={(el) => { this.reactQuillRef = el }}
//                             />
//             </section>
//         )
//     }
// }
//
//
//
// export default YjsQuill;
//
