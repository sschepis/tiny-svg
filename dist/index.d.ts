declare class __SVG {
    element: SVGElement;
    width: number;
    height: number;
    constructor(element: SVGElement | string | any);
    setAttributes(attributes: object): any;
    appendChild(child: SVGElement | any | string): any;
    removeChild(child: SVGElement | any | string): any;
    replaceChild(oldChild: any | SVGElement, newChild: any | SVGElement | string): any;
    clearChildren(): any;
    static create(name: string, attributes?: object, children?: object[]): any;
    static createCircle(cx: number, cy: number, r: number, attributes?: object): any;
    static createEllipse(cx: number, cy: number, rx: number, ry: number, attributes?: object): any;
    static createLine(x1: number, y1: number, x2: number, y2: number, attributes?: object): any;
    static createRect(x: number, y: number, width: number, height: number, attributes?: object): any;
    static createPolygon(points: number[], attributes?: object): any;
    static createPolyline(points: number[], attributes?: object): any;
    static createPath(d: string, attributes?: object): any;
    static createText(x: number, y: number, text: string, attributes?: object): any;
    static createTspan(x: number, y: number, text: string, attributes?: object): any;
    static createImage(x: number, y: number, width: number, height: number, href: string, attributes?: object): any;
}
declare function SVG(selector: SVGElement | string | any): any;
declare namespace SVG {
    var create: typeof __SVG.create;
    var createCircle: typeof __SVG.createCircle;
    var createEllipse: typeof __SVG.createEllipse;
    var createLine: typeof __SVG.createLine;
    var createRect: typeof __SVG.createRect;
    var createPolygon: typeof __SVG.createPolygon;
    var createPolyline: typeof __SVG.createPolyline;
    var createPath: typeof __SVG.createPath;
    var createText: typeof __SVG.createText;
    var createTspan: typeof __SVG.createTspan;
    var createImage: typeof __SVG.createImage;
}
export default SVG;
