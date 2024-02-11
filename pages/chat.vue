<template>
    <v-app-bar :elevation="1">
        <v-row class="pa-2 ma-2" justify="space-between">
            <v-avatar rounded="0">
                <v-img src="../public/applogo.png"></v-img>
            </v-avatar>
            <v-btn
                color="#5d3fd3"
                variant="outlined"
                @click="logout">Log out</v-btn>
        </v-row>
    </v-app-bar>
    <v-navigation-drawer :elevation="0" :width="300">
        <v-row class="mx-3 my-3">
            <v-card color="blue-darken-1" width="300" height="60" class="d-flex justify-center align-center justify-space-between">
                <h3 class="mx-5 my-5">Conversations</h3>
                <v-icon>mdi-plus</v-icon>
            </v-card>    
        </v-row>
    </v-navigation-drawer>
    <v-container fluid class="d-flex flex-column" style="height: 90vh;">
        <v-card :elevation="2" class="mx-3 my-3 flex-grow-1">
            <v-row>
                <v-col cols="12">
                    <v-toolbar color="blue-darken-1" height="60">
                        <v-row class="pa-2 ma-2 d-flex justify-center align-center justify-space-between">
                            <div>
                                <v-avatar>
                                    <v-img src="https://avatar.iran.liara.run/public/36"></v-img>
                                </v-avatar>
                            <v-btn>Chatbot</v-btn>
                            </div>
                            <div>
                                <v-icon class="d-flex d-sm-none">mdi-menu</v-icon>
                            </div>
                        </v-row>
                    </v-toolbar>
                </v-col>
                <v-col cols="12" class="mx-5 my-5">
                    <v-row class="ml-5 d-flex justify-left align-center">
                        <v-avatar size="50">
                            <v-img src="https://avatar.iran.liara.run/public/36"></v-img>
                        </v-avatar>
                        <v-card height="auto" color="blue-lighten-5" class="pa-5 ml-5 rounded-pill d-flex justify-left align-center" style="color: #5d3fd3 !important;">
                            How may I help you today?
                        </v-card>
                    </v-row>
                </v-col>
                <!-- SEND BELOW STUFF TO BOTTOM -->
                <v-col cols="12">
                    <v-row class="pa-3 ma-3 rounded-pill d-flex justify-center align-center">
                        <v-card
                            height="auto"
                            variant="outlined"
                            @click="changeBackgroundColor = !changeBackgroundColor"
                            :style="{
                                background: changeBackgroundColor ? '#5d3fd3 !important' : 'white',
                                color: changeBackgroundColor ? 'white !important' : '#5d3fd3'
                                }" class="pa-3 ma-3 rounded-pill"
                        >Option A</v-card>
                        <v-card height="auto" variant="outlined" color="#5d3fd3" class="pa-3 ma-3 rounded-pill">Option B</v-card>
                        <v-card height="auto" variant="outlined" color="#5d3fd3" class="pa-3 ma-3 rounded-pill">Option C</v-card>
                        <v-card height="auto" variant="outlined" color="#5d3fd3" class="pa-3 ma-3 rounded-pill">Option D</v-card>
                    </v-row>
                </v-col>
            </v-row>
        </v-card>
        <v-card max-height="70" variant="outlined" class="pa-5 ml-3 mr-3 rounded-pill d-flex justify-left align-center justify-space-between">
            <v-text-field variant="plain" placeholder="Reply to Chatbot" class="ml-5 mt-5 mb-3"></v-text-field>
            <v-btn icon="mdi-send" size="large" color="#5d3fd3" class="mt-3 mb-3"></v-btn>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            changeBackgroundColor: false
        }
    },
    methods: {
        logout() {
            this.$router.push("/login")
        }
    }
}
</script>