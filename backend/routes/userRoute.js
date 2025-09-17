import express from 'express';
import { 
  loginUser, 
  registerUser, 
  loginAdmin, 
  getAllUsers,  
  getUserById   
} from '../controllers/userController.js';

const userRouter = express.Router();

// 🔹 Normal user routes
userRouter.post('/register', registerUser);   
userRouter.post('/login', loginUser);        

// 🔹 Admin login route
userRouter.post('/admin/login', loginAdmin);

// 🔹 Fetch users (GET requests)
userRouter.get('/all', getAllUsers);          
userRouter.get('/:id', getUserById);         

export default userRouter;

