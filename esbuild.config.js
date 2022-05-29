import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    entryPoints: ["src/index.tsx"],
    minify: true,
    sourcemap: true,
    bundle: true,
    define: {
      "process.env.NODE_ENV": '"production"',
      "process.env.DEBUG": "false",
    },
    outfile: "public/bundle.js",
  },
  {
    // serve options (optional)
    port: 7000,
    root: ".",
    live: true,
  }
);
