import { build, analyzeMetafile } from "esbuild";

const go = async () => {
  let result = await build({
    entryPoints: ["./toBundle.js"],
    bundle: true,
    minify: true,
    sourcemap: false,
    outfile: "./bundled.js",
    sourceRoot: "./",
    platform: "node",
    metafile: true,
    external: ["ethers"], // Only ethers is provided by Lit Actions
    inject: ["./esbuild-shims.js"],
    treeShaking: true,
    define: {
      'global': 'globalThis'
    }
  });
  
  console.log("\nBundle created successfully for Deno environment!");
  console.log("Size:", (result.metafile.outputs['./bundled.js']?.bytes / 1024 / 1024)?.toFixed(2) + 'MB' || 'unknown');
};

go();