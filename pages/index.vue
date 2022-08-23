<script>
import TiptapEditor from '~/components/Editor.vue'
export default {
    head() {
        return {
            bodyAttrs: {
                class: "reset-body",
            },
        };
    },
    components: {
        TiptapEditor
    }
};
</script>

<template>
    <div class="dashboardContainer">
        <div class="dashboard">
            <client-only>
                <tiptap-editor class="editorPanel" />
            </client-only>
            <div class="navigationPanel">
                <div class="navButtons">
                    <button class="navIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-journals navSvg"
                            viewBox="0 0 16 16">
                            <path
                                d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                            <path
                                d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                        </svg>
                    </button>
                    <button class="navIcon inactive">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-tags navSvg "
                            viewBox="0 0 16 16">
                            <path
                                d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
                            <path
                                d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
                        </svg>
                    </button>
                    <button class="navIcon inactive">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search navSvg "
                            viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                    <button class="navIcon inactive">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-gear-fill navSvg "
                            viewBox="0 0 16 16">
                            <path
                                d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                    </button>
                </div>
                <div class="navFilter">
                    Sort
                </div>
                <div class="navContent">
                    Notebooks
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.dashboardContainer {
    background: #171722;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 0.5fr 1.9fr 0.6fr;
    grid-template-rows: 0.1fr 2.8fr 0.1fr;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". . ."
        ". dashboard ."
        ". . .";
}

.dashboard {
    background: #9ba8d1;
    border: 1px solid #7df9ff;
    display: grid;
    grid-template-columns: 0.4fr 1.6fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        "navigationPanel editorPanel";
    grid-area: dashboard;
}

.navigationPanel {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.3fr 0.2fr 2.5fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        "navButtons"
        "navFilter"
        "navContent";
    grid-area: navigationPanel;
}

.navButtons {
    cursor: pointer;
    display: flex;
    grid-area: navButtons;
    background: #9ba8d1;
}

.navFilter {
    grid-area: navFilter;
}

.navContent {
    background: #9ba8d1;
    border-top: solid 1px plum;
    grid-area: navContent;
}

.editorPanel {
    background: #27293e;
    grid-area: editorPanel;
}

.reset-body {
    margin: 0 !important;
    padding: 0 !important;
}

.navIcon {
    width: 100%;
    height: 100%;
    padding: 7%;
    margin: 0;
    border-style: none;
    background: #9ba8d1;
}

.inactive {
    background: #9CC3F6 !important;
}

.navSvg {
    width: 100%;
    height: 100%;
    fill: black;
}
</style>
