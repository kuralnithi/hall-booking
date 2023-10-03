import express from 'express'
import { BookARoom, BookedRooms, FindCustomerDetails } from '../Controller/Hall.Controller.js';

const router = express.Router();



router.post('/hall/book', BookARoom)
router.get('/hall/bookedrooms', BookedRooms)
router.get('/hall/customerdetails', FindCustomerDetails)



export default router;