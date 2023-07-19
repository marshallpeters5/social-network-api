// Importing //
const router = require('express').Router();
const {
  createUser, getUsers, getSingleUser, updateUser, deleteUser, addFriend, removeFriend, } 
  = require('../../controllers/userController');

// Routes for getting all users and creating a new user. //
router.route('/')
.post(createUser) // Create //
.get(getUsers); // Get all //


// Routes for getting a single user, updating a user, and deleting a user. //
router.route('/:userId')
.put(updateUser) // Update //
.get(getSingleUser) // Get one //
.delete(deleteUser); // Delete // 

// Routes for adding and removing a friend for a specific user. //
router.route('/:userId/friends/:friendId')
.post(addFriend) // Post //
.delete(removeFriend); // Delete //

// Exporting //
module.exports = router;
