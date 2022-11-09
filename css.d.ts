/**
 * Used to convert:
 *
 * ```js
 * { backgroundColor: "white"}
 * ```
 * to
 *
 * ```css
 * { background-color: "white"}
 * ```
 *
 * @param v
 * @returns
 */
export declare function cssConvertCase(v: string): string;
/**
 *
 * @param s
 * @returns
 */
export declare function cssDeclarationToString(s: Partial<CSSStyleDeclaration>): string;
