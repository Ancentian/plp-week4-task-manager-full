const express = require('express')
const {createTask, getMyTasks, getAllTasks} = require('../controllers/taskController')

const router = express.Router()



module.exports = router