import { serve } from "bun";
import index from "./ui/index.html";

const server = serve({
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
