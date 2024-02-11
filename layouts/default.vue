<template>
    <v-locale-provider>
        <v-app full-height>
            <v-main>
                <RouterView />
            </v-main>
        </v-app>
    </v-locale-provider>
</template>

<style>
html, body {
    overflow-y: hidden;
}
</style>