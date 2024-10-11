const express = require('express');
const router = express.Router();

const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobs')

router.post('/api/v1/jobs', createJob);
router.get('/api/v1/jobs', getAllJobs);
router.get('/api/v1/jobs/:id', getJob);
router.delete('/api/v1/jobs/:id', deleteJob);
router.patch('/api/v1/jobs/:id', updateJob);

module.exports = router;
