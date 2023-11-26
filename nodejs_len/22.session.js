const express = require('express')
const app =express()
const session = require('express-session')
app.use(
    session({
    secret:'随便写',
    resave:false,
    saveUninitialized:true,
    })
)

