import React from "react";
import user from "../../models/user";
import {Grid, Typography} from "@mui/material";
import MainLayout from "../MainLayout/MainLayout";

function Dashboard() {
    return (
        <MainLayout title={"Dashboard Task Management App"}>
            <Grid container justifyContent={"center"}>
                <Grid item md={12}>
                    <Typography variant={"h5"}>
                        Hello {user.email}, you're logged in!
                    </Typography>
                </Grid>
            </Grid>
        </MainLayout>
    )
}

export default Dashboard