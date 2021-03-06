import express, { Request, Response } from "express";
import { LoginService } from "../services";
import { User } from "../types";

interface LoginCred {
	email: string;
	password: string;
}

const loginRouter = express.Router();

loginRouter.post("/", async (req: Request, res: Response) => {
	console.log("debug: aa: ", req.body);

	try {
		const loginCred: LoginCred = req.body;
		const user: User = await LoginService.findUserByEmail(loginCred.email);
		if (user) {
			return res.status(201).send(user);
		}

		res.status(204).send("No Content");
	} catch (e: any) {
		console.log("debug: e: ", e.message);

		res.status(500).send(e.message);
	}
});

export { loginRouter };
