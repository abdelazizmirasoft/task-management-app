import React from "react";
import user from "../../models/user";
import {Grid, Typography} from "@mui/material";
import MainLayout from "../MainLayout/MainLayout";
import MainTaskLayout from "../Task/MainTaskLayout";

function Dashboard() {
    return (
        <MainLayout title={"Dashboard Task Management App"}>
            <Grid container justifyContent={"center"}>
                <Grid item md={12}>
                    <Typography variant={"h5"}>
                        Logged in as: {user.email}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item md={12}>
                    <MainTaskLayout/>
                </Grid>
            </Grid>
        </MainLayout>
    )
}

export default Dashboard