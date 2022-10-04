import { IncomingMessage, ServerResponse } from "http"
export interface CrossOriginResourcePolicyOptions {
	policy?: "same-origin" | "same-site" | "cross-origin"
}
declare function crossOriginResourcePolicy(options?: Readonly<CrossOriginResourcePolicyOptions>): (_req: IncomingMessage, res: ServerResponse, next: () => void) => void
export default crossOriginResourcePolicy
