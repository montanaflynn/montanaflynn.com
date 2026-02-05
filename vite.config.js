import { defineConfig } from "vite";
import { execSync } from "child_process";

const commit = execSync("git rev-parse HEAD").toString().trim();

export default defineConfig({
  plugins: [
    {
      name: "inject-commit",
      transformIndexHtml(html) {
        return html.replace('content=""', `content="${commit}"`);
      },
    },
  ],
});
