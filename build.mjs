import { build } from "esbuild";
import * as fs from "fs";

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

await build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: false,
  sourcemap: false,
  platform: "node",
  target: "esnext",
  format: "esm",
  outfile: pkg.module,
});

await build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: false,
  sourcemap: false,
  platform: "node",
  target: "esnext",
  format: "cjs",
  outfile: pkg.main,
});
