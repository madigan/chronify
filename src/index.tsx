import { serve } from "bun";
import index from "./ui/index.html";

const server = serve({
  port: process.env.PORT || 3000,
  hostname: process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost", // Google OAuth doesn't like 0.0.0.0
  routes: {
    "/*": index,
    "/api/health": {
      async GET() {
        return Response.json({
          status: "Up",
        });
      },
    },
  },
  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
