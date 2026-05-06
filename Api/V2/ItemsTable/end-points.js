import express from 'express';

import { filterColumnsFunc } from "./FilterColumns/controller.js";
import { postFunc } from "./Insert/controller.js";
import { deleteFunc } from "./Delete/controller.js";

const tableName = "ItemsTable";

const router = express.Router();
router.delete('/Delete/:pk', (req, res) => deleteFunc({ req, res, inTableName: tableName }));

router.post('/Insert', express.json(), (req, res) => postFunc({ req, res, inTableName: tableName }));
router.get('/FilterColumns', (req, res) => filterColumnsFunc({ req, res, inTableName: tableName }));

export { router };