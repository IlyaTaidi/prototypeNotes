<template>
    <div class="richText">
        <div v-if="editor" class="richText__header">
            <button @click="editor.chain().focus().toggleBold().run()" :class="{
                'richText__menu-item': true,
                active: editor.isActive('bold'),
            }">
                B
            </button>
            <button @click="editor.chain().focus().toggleItalic().run()" :class="{
                'richText__menu-item': true,
                active: editor.isActive('italic'),
            }">
                I
            </button>
        </div>
        <div class="richText__content">
            <editor-content :editor="editor" />
        </div>
    </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Italic from "@tiptap/extension-italic";
import Bold from "@tiptap/extension-bold";
import Text from "@tiptap/extension-text";

export default {
    components: {
        EditorContent,
    },

    props: {
        value: {
            type: String,
            default: "",
        },
    },

    data() {
        return {
            editor: null,
            html: "",
        };
    },

    watch: {
        richText: {
            immediate: true,
            deep: true,
            handler(value) {
                console.log(JSON.stringify(value));
                this.$emit("input", value);
            },
        },
        value(value) {
            const isSame = this.richText === value;
            if (isSame) {
                return;
            }
            this.editor.commands.setContent(value, false);
        },
    },
    computed: {
        replacementTags() {
            return {
                strong: "b",
                em: "i",
            };
        },
        richText() {
            let richText = this.html
                .replaceAll("<p>", "")
                .replaceAll("</p>", "\n\n")
                .replaceAll("<br>", "\n");
            Object.entries(this.replacementTags).forEach((tag) => {
                const oldTag = tag[0];
                const newTag = tag[1];
                richText = richText
                    .replaceAll(`<${oldTag}>`, `<${newTag}>`)
                    .replaceAll(`</${oldTag}>`, `</${newTag}>`);
            });
            richText = richText.replace(/^\s+|\s+$/g, ""); // Trim to remove lasts \n
            return richText;
        },
    },
    methods: {
        updateHtml() {
            this.html = this.editor.getHTML();
        },
    },
    mounted() {
        this.editor = new Editor({
            parseOptions: {
                preserveWhitespace: "full",
            },
            enablePasteRules: false,
            injectCSS: false,
            enableInputRules: false,
            extensions: [Document, Paragraph, Text, Italic, Bold],
            content: this.value,
            onCreate: () => this.updateHtml(),
            onUpdate: () => this.updateHtml(),
        });
    },

    beforeUnmount() {
        this.editor.destroy();
    },
};
</script>
<style>
.richText {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: white;
    background-color: #fff;
    border: 3px solid white;
    border-radius: 0.75rem;
    color: white;
}

.richText__header {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    flex-wrap: wrap;
    padding: 0.25rem;
    color: white;
    border-bottom: 3px solid white;
}

.richText__content {
    padding: 1.25rem 1rem;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}

.richText__footer {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border-top: 3px solid white;
    font-size: 12px;
    font-weight: 600;
    color: white;
    white-space: nowrap;
    padding: 0.25rem 0.75rem;
}

.richText__menu-item {
    width: 1.75rem;
    height: 1.75rem;
    color: white;
    border: none;
    background-color: transparent;
    border-radius: 0.4rem;
    padding: 0.25rem;
    margin-right: 0.25rem;
    font-weight: bold;
    cursor: pointer;
    font-family: Georgia, serif;
}

.richText__menu-item.active,
.richText__menu-item:hover {
    color: #fff;
    background-color: #0d0d0d;
}

.richText__content :focus-visible {
    outline: none;
}
</style>
