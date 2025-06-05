import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function GET(
  request: VercelRequest,
  response: VercelResponse,
) {
  response.status(200).json({
    status: "Healthy",
  });
}
