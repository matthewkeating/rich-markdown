import { EditorState } from '@codemirror/state'
import { keymap, EditorView, drawSelection } from '@codemirror/view'
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands'
import { defaultHighlightStyle, syntaxHighlighting, indentOnInput } from '@codemirror/language'
import { languages } from '@codemirror/language-data';

import richEditor from '../components/rich-markdown';
import './style.css';

// @ts-expect-error
import doc from './example.md?raw';

const state = EditorState.create({
  doc,
  extensions: [
    richEditor({
      markdoc: { },
      lezer: {
        codeLanguages: languages,
      }
    }),
    EditorView.lineWrapping,
    history(),
    drawSelection(),
    indentOnInput(),
    syntaxHighlighting(defaultHighlightStyle),
    keymap.of([indentWithTab, ...defaultKeymap, ...historyKeymap]),
  ],
});

const parent = document.getElementById('app') as Element;
const view = new EditorView({ state, parent });