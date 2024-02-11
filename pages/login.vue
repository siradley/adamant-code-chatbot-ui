<template>
    <v-row>
        <v-col cols="3.5" class="mt-10 ml-10 mr-10">
            <v-col class="d-flex justify-center align-center">
                <v-avatar size="100" rounded="0">
                    <v-img src="../public/applogo.png"></v-img>
                </v-avatar>
            </v-col>
            <v-col class="d-flex justify-center align-center">
                <h1>Log In</h1>
            </v-col>
            <v-col>
                <label style="color: red;">Email</label>
                <v-text-field variant="solo" v-model="enteredEmail"></v-text-field>
                <label style="color: red;">Password</label>
                <v-text-field variant="solo" v-model="enteredPassword"></v-text-field>
            </v-col>
            <label class="d-flex flex-row-reverse" style="color:#1E88E5;">Forgot Password?</label> <!-- MAKE IT GO RIGHT -->
            <v-col>
                <v-btn block height="50" color="blue-darken-1" @click="login">Log In</v-btn>
            </v-col>
            <v-col>
                <label style="color:#1E88E5;">Don't have an account? <a href="/register" style="color:#1E88E5;">Sign Up</a></label>
            </v-col> 
        </v-col>
        <v-col cols="8" class="d-flex justify-center align-center">
            <v-img cover src="../public/robotlookingatipad.png"></v-img>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            enteredEmail: 'adamantcode',
            enteredPassword: 'password123!',
            correctEmail: 'adamantcode',
            correctPassword: 'password123!'
        }
    },

    methods: {
        login() {
            if (this.enteredEmail === this.correctEmail && this.enteredPassword === this.correctPassword) {
                this.$router.push("/chat")
            } else {
                alert('wrong lol')
            }
        }
    }
}
</script>