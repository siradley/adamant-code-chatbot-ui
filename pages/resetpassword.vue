<template>
    <v-row>
        <v-col cols="3.5" class="pt-12 ma-12">
            <v-col class="d-flex justify-center align-center">
                <v-avatar size="100" rounded="0">
                    <v-img src="../public/applogo.png"></v-img>
                </v-avatar>
            </v-col>
            <v-col class="d-flex justify-center" align-self="center">
                <h2>Reset Password</h2>
            </v-col>
            <v-col>
                <label>Password</label>
                <v-text-field
                    variant="solo"></v-text-field>
                <label>Confirm Password</label>
                <v-text-field
                    variant="solo"></v-text-field>
                <v-btn block height="50" color="blue-darken-1">Reset Password</v-btn>
            </v-col> 
        </v-col>
        <v-col cols="8" class="d-flex justify-center align-center">
            <v-img
                cover 
                src="../public/robotlookingatipad.png"></v-img>
        </v-col>
    </v-row>
</template>