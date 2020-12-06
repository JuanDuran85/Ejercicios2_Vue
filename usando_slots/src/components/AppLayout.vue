<template>
    <div class="layout">
        <header>
            <slot name="header"/>
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <slot name="footer">
                <h1>Titulo de footer con Slot</h1>
            </slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'AppLayout',
}
</script>

<style>
    .layout {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .layout header,
    .layout footer {
        background: #41b883;
        color: white;
        padding: 3rem;
        flex: 0 0 auto;
    }
    .layout main {
        flex: 1 1 auto;
    }
</style>