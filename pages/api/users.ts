import type { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "../../models";
import userSchema from  "../../models/userSchema";

async function getAllUser(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();
    userSchema.find({}, (err: Error, data: any) => {
        if (err) {
            res.status(500).json({ status: "ERROR", message: err.message });
        } else {
            res.status(200).json({ status: "SUCCESS", message: "Fetch Success", users: data });
        }
    })
}

async function insertUser(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();
    const { username, email, address, password } = req.body

    // userSchema.create({

    // }, (err: Error, data: any) => {

    // })
}


export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch(req.method) {
        case "GET":
            await getAllUser(req, res);
            return;
        default:
            res.redirect("/");
            return;
    }
}