import express from 'express'
import { addTransaction, getAlltransaction } from '../controllers/transactionController';
const router=express.Router();




// Add transacton
router.post('/add-transaction',addTransaction);


// Grt transaction
router.get('/get-transaction',getAlltransaction);

export default router;
