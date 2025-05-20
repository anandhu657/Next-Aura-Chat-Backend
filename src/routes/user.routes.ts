import express from 'express';

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 */
router.post('/', (req, res) => {
  res.status(201).json({ id: 2, name: req.body.name });
});

export default router;
