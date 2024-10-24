"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/example.ts
const express_1 = require("express");
const exampleRouter = (0, express_1.Router)();
/**
 * @swagger
 * /example:
 *   get:
 *     summary: Get an example message
 *     responses:
 *       200:
 *         description: Returns an example message
 */
exampleRouter.get('/', (req, res) => {
    res.json({ message: 'This is an example response!' });
});
exports.default = exampleRouter;
//# sourceMappingURL=example.js.map