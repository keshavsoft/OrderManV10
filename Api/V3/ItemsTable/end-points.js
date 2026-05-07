import express from 'express';
import { deleteFunc } from "./Delete/controller.js";
import { deleteByColumnFunc } from "./DeleteByColumn/controller.js";

const tableName = "ItemsTable";

const router = express.Router();

router.delete('/DeleteByColumn', express.json(), (req, res) => deleteByColumnFunc({ req, res, inTableName: tableName }));
router.delete('/Delete/:pk', (req, res) => deleteFunc({ req, res, inTableName: tableName }));

export { router };