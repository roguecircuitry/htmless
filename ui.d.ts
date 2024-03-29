export interface StyleKeyFrameDef {
    from: Partial<CSSStyleDeclaration>;
    to: Partial<CSSStyleDeclaration>;
    [key: string]: Partial<CSSStyleDeclaration>;
}
export interface StyleDef {
    [key: string]: Partial<CSSStyleDeclaration> | StyleKeyFrameDef;
}
export interface DefaultCallback {
    (ui: UIBuilder<any>): void;
}
export interface TagNameCSSClassMap {
    [key: string]: string[];
}
export interface AttributeMap {
    [key: string]: string;
}
export declare const ExponentCSSClassMap: TagNameCSSClassMap;
export declare function exponent(ui: UIBuilder<any>): void;
export declare type InputType = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
export interface DOMRectLike {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare type EvtListenerOptions = boolean | AddEventListenerOptions;
export declare class UIBuilder<T extends HTMLElement> {
    /**the document being used for creating elements*/
    _doc: Document;
    /**a list of elements being created*/
    elements: Array<HTMLElement>;
    defaultCallbacks: Set<DefaultCallback>;
    default(cb: DefaultCallback): this;
    defaultOff(cb: DefaultCallback): this;
    /**the current element being created*/
    get e(): T;
    /**Create a UI builder
     * optionally provide the document used to create elements, default is window.document
     * @param d
     */
    constructor(d?: Document);
    /**set the document used to create elements*/
    doc(d: Document): this;
    /**document.create, but less wordy, and you can provide an ID*/
    create<K extends keyof HTMLElementTagNameMap>(type: K, id?: string, ...classNames: string[]): UIBuilder<HTMLElementTagNameMap[K]>;
    /**
     * Set the input type and value
     * Does nothing if current element is not an input
     */
    input(type: InputType, value?: string): this;
    /**
     * Set the individual styling for an element
     *
     * Or if the element is a <style> tag, sets its textContent
     *
     * Example:
     *
     * ```ts
     * .create("style")
     * .style({
     *   ".bg": {
     *     backgroundColor: "gray",
     *   }
     * })
     * .mount(document.head)
     *
     * //or for a non-style element:
     *
     * .create("div", "content")
     * .style({
     *   color: "white",
     *   height: "100px"
     * })
     * .mount(document.body)
     * ```
     */
    style(s: Partial<CSSStyleDeclaration> | StyleDef): this;
    /**add CSS classes*/
    classes(...classes: string[]): this;
    hasClass(c: string): boolean;
    /**remove CSS classes*/
    classesRemove(...classes: string[]): this;
    /**set the ID*/
    id(id: string): this;
    /**set the textContent*/
    textContent(s: string): this;
    /**assign attributes*/
    attrs(attrs: AttributeMap): this;
    hasAttr(attrName: string): boolean;
    removeAttr(attrName: string): this;
    /**console.log(element, ...msgs)*/
    log(...msgs: string[]): this;
    /**Append as a child to `p`
     * Where p is an HTMLElement or an index into previous created elements
     */
    mount(p?: HTMLElement | number): this;
    /**Remove from a parent element
     *
     * If `p` is provided, will do nothing if p is not the parent
     * If no parent element exists, will do nothing
     * @param p
     * @returns
     */
    unmount(p?: HTMLElement): this;
    /**Alias to `<HTMLElement>.addEventListener`*/
    on<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: EvtListenerOptions): this;
    ref(e: HTMLElement): this;
    deref(): this;
    /**Alias to `<HTMLElement>.removeEventListener`*/
    off(type: keyof HTMLElementEventMap, listener: (this: HTMLElement, ev: Event) => any): this;
    /**Alias to `<HTMLElement>.getBoundingClientRect`*/
    getRect(): DOMRect;
    /**Same as getRect, but output is saved to a provided `out: DOMRectLike`, this method is still chainable*/
    rect(out: DOMRectLike): this;
}
