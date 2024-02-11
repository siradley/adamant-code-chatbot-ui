<template>
    <v-row>
        <v-col cols="3.5" class="ml-10 mr-10">
            <v-col class="d-flex justify-center align-center">
                <v-avatar size="100" rounded="0">
                    <v-img src="../public/applogo.png"></v-img>
                </v-avatar>
            </v-col>
            <v-col class="d-flex justify-center" align-self="center">
                <h2>Sign Up</h2>
            </v-col>
            <v-col>
                <label>Email</label>
                <v-text-field
                    variant="solo"
                    density="compact"
                    ></v-text-field>
                <label>Name</label>
                <v-text-field
                    variant="solo"
                    density="compact"></v-text-field>
                <label>Password</label>
                <v-text-field
                    variant="solo"
                    density="compact"></v-text-field>
                <label>Confirm Password</label>
                <v-text-field
                    variant="solo"
                    density="compact"></v-text-field>
                <label>Forgot Password?</label>
                <v-btn block height="50" color="blue-darken-1">Sign Up</v-btn>
            </v-col>
            <v-col>
                <label>Already have an account? <a href="/login">Log In</a></label>
            </v-col> 
        </v-col>
        <v-col cols="8" class="d-flex justify-center align-center">
            <v-img
                cover
                src="../public/robotlookingatipad.png"></v-img>
        </v-col>
    </v-row>
</template>