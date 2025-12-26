import type { AstroBuiltinAttributes } from "astro";

/**
 * Enable Tailwind CSS IntelliSense
 *
 * Note that this utility function is a no-op and requires:
 * - VS Code extension: bradlc.vscode-tailwindcss
 * - VS Code setting: "tailwindCSS.classFunctions": ["tw"]
 *
 * @example
 * ```ts
 * const button = tw([
 *   "text-sm text-amber-50 font-semibold",
 *   {
 *     primary: "bg-amber-500 hover:bg-amber-600",
 *     secondary: "bg-amber-100 text-amber-700 hover:bg-amber-200",
 *   },
 * ]);
 * ```
 */
export const tw = (classes: AstroBuiltinAttributes["class:list"]) => classes;
