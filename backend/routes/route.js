import express from 'express';
import {addBlog, allblog} from '../controller/blog_controller.js';
import { homeBlog } from '../controller/blog_controller.js';
import { loadblog } from '../controller/blog_controller.js';
import {editblog} from '../controller/blog_controller.js';
import {deleteblog} from '../controller/blog_controller.js';
import {searchblog} from '../controller/blog_controller.js';
const router = express.Router(); 

router.post('/add', addBlog);
router.get('/all', homeBlog);
router.get('/blogs',allblog);
router.get('/:id',loadblog);
router.put('/:id',editblog);
router.delete('/:id',deleteblog);
router.get('/search',searchblog);

export default router;