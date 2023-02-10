import { IconChangePassword, IconEditProfile, IconHistory, IconSignOut } from "../../assets";
import React from "react";
import { Alert } from "react-native";

export const dummyMenu = [
    {
        id:1,
        nama: 'Edit Profile',
        gambar: <IconEditProfile/>,
        halaman: 'EditProfile'
    },
    {
        id:2,
        nama: 'Change Password',
        gambar: <IconChangePassword/>,
        halaman: 'ChangePassword'
    },
    // {
    //     id:3,
    //     nama: 'History Pemesanan',
    //     gambar: <IconHistory/>,
    //     halaman: 'History'
    // },
    {
        id:4,
        nama: 'Sign Out',
        gambar: <IconSignOut/>,
        halaman: 'Login',
     
    },
];  