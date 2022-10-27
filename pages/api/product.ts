import type { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "../../models";
import productSchema from "../../models/productSchema";

async function getAllProducts(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();
    productSchema.find({}, (err: Error, data: any) => {
        if (err) {
            res.status(500).json({status: "ERROR", message: err.message});
        } else {
            res.status(200).json({status: "SUCCESS", message: "Fetch Success", data: data});
        }
    });
}

async function insertProduct(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();
    const {  name, status, price, rating, img, desc } = req.body;
    productSchema.create({ name: name, status: status, price: price, rating: rating, img: img, desc: desc }, (err: Error, data: any) => {
        if (!err) {
            res.status(200).json({status: "SUCCESS", message: "INSERT SUCCESS"});
        }else {
            res.status(500).json({status: "ERROR", message: err.message});
        }
    });
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "GET":
            await getAllProducts(req, res);
            return;
        case "POST":
            await insertProduct(req, res);
            return;
        default:
            res.redirect("/");
            return;
    }
}