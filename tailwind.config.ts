import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			textShadow: {
				logo: "1px 1px 0 white, -1px 1px 0 white, 1px -1px 0 white,-1px -1px 0 white",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"app-green": "#418727",
				"app-blue": "#0075FF",
				"app-black": "#0F0F0F",
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui(),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-shadow": value => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") },
			);
		}),
	],
};
export default config;
