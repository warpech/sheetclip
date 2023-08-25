import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import del from "rollup-plugin-delete";

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: "dist/index.esm.js",
				format: "es"
			},
			{
				file: "dist/index.cjs.js",
				format: "cjs",
				name: "puremvc"
			}
		],
		plugins: [
			typescript({
				sourceMap: false
			}),
			//terser(), terser currently has a bug with modules: https://github.com/rollup/plugins/issues/1366
			del({
				targets: [
					"dist"
				],
				hook: "buildStart"
			})
		]
	},
	{
		input: "dist/dts/index.d.ts",
		output: {
			file: "dist/index.d.ts",
			format: "es"
		},
		plugins: [
			dts({
				compilerOptions: {
					paths: {
						"*": [
							"dts/*"
						]
					}
				}
			}),
			del({
				targets: "dist/dts/",
				hook: "buildEnd"
			})
		]
	}
];