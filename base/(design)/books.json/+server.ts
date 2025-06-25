import { type RequestHandler } from "@sveltejs/kit";
import { createServerGET } from "bookemoji";

export const GET: RequestHandler = createServerGET();

export const prerender = true;
