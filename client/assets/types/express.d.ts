import { Request } from "@/assets/types/express";

declare global {
    namespace Express {
        interface Request {
            user?: any;
            auth?: any;
        }
    }
}
