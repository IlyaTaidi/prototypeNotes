<script>
export default {
    head() {
        return {
            bodyAttrs: {
                class: "reset-body",
            },
        };
    },
};
</script>

<template>
    <div class="dashboardContainer">
        <div class="dashboard">
            <div class="navigationPanel"></div>
            <div class="Editor-Panel"></div>
        </div>
    </div>
</template>

<style lang="scss">
.dashboardContainer {
    background: #292a3b;
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
    display: grid;
    grid-template-columns: 0.4fr 1.6fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "navigationPanel EditorPanel";
    grid-area: dashboard;
}

.navigationPanel {
    grid-area: navigationPanel;
}

.EditorPanel {
    grid-area: EditorPanel;
}

.reset-body {
    margin: 0 !important;
    padding: 0 !important;
}
</style>
