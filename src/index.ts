class __SVG {

    element: SVGElement;
    width: number;
    height: number;

    constructor(element: SVGElement | string | any) {
        if (typeof element === "string") {
            element = document.querySelector(element);
        } else if (element instanceof __SVG) {
            element = (element as any).element;
        }
        this.element = element;
        this.width = Number(element.getAttribute("width"));
        this.height = Number(element.getAttribute("height"));
    }

    setAttributes(attributes: object): any {
        for (let [key, value] of Object.entries(attributes)) {
            this.element.setAttribute(key, value);
        }
        return this;
    }
    appendChild(child: SVGElement | any | string): any {
        if (typeof child === "string") {
            child = new __SVG(child).element;
        } else if (child instanceof __SVG) {
            child = (child as any).element;
        }
        this.element.appendChild(child);
        return this;
    }

    removeChild(child: SVGElement | any | string): any {
        if (typeof child === "string") {
            child = new __SVG(child).element;
        } else if (child instanceof __SVG) {
            child = (child as any).element;
        }
        this.element.removeChild(child);
        return this;
    }

    replaceChild(oldChild: any | SVGElement, newChild: any | SVGElement | string): any {
        if (typeof newChild === "string") {
            newChild = new __SVG(newChild).element;
        } else if (newChild instanceof __SVG) {
            newChild = (newChild as any).element;;
        }
        this.element.replaceChild(newChild, oldChild instanceof __SVG ? (oldChild as any).element : oldChild);
        return this;
    }

    clearChildren(): any {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
        return this;
    }

    static create(name: string, attributes?: object, children?: object[]): any {
        let element = document.createElementNS("http://www.w3.org/2000/svg", name);
        if (attributes) {
            for (let [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        if (children) {
            for (let child of children) {
                element.appendChild(child as SVGElement);
            }
        }
        return new __SVG(element);
    }

    static createCircle(cx: number, cy: number, r: number, attributes?: object): any {
        let element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        element.setAttribute("cx", cx.toString());
        element.setAttribute("cy", cy.toString());
        element.setAttribute("r", r.toString());
        if (attributes) {
            for (let [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        return new __SVG(element);
    }

    static createEllipse(cx: number, cy: number, rx: number, ry: number, attributes?: object): any {
        let element = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        element.setAttribute("cx", cx.toString());
        element.setAttribute("cy", cy.toString());
        element.setAttribute("rx", rx.toString());
        element.setAttribute("ry", ry.toString());
        if (attributes) {
            for (let [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        return new __SVG(element);
    }

    static createLine(x1: number, y1: number, x2: number, y2: number, attributes?: object): any {
        let element = document.createElementNS("http://www.w3.org/2000/svg", "line");
        element.setAttribute("x1", x1.toString());
        element.setAttribute("y1", y1.toString());
        element.setAttribute("x2", x2.toString());
        element.setAttribute("y2", y2.toString());
        if (attributes) {
            for (let [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        return new __SVG(element);
    }

    static createRect(x: number, y: number, width: number, height: number, attributes?: object): any {
        let element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        element.setAttribute("x", x.toString());
        element.setAttribute("y", y.toString());
        element.setAttribute("width", width.toString());
        element.setAttribute("height", height.toString());
        if (attributes) {
            for (let [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        return new __SVG(element);
    }

    static createPolygon(points: number[], attributes?: object): any {
        let element = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        element.setAttribute("points", points.join(" "));
        if (attributes) {
            for (let [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        return new __SVG(element);
    }

    static createPolyline(points: number[], attributes?: object): any {
        let element = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        element.setAttribute("points", points.join(" "));
        if (attributes) {
            for (let [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        return new __SVG(element);
    }

    static createPath(d: string, attributes?: object): any {
        let element = document.createElementNS("http://www.w3.org/2000/svg", "path");
        element.setAttribute("d", d);
        if (attributes) {
            for (let [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        return new __SVG(element);
    }

    static createText(x: number, y: number, text: string, attributes?: object): any {
        let element = document.createElementNS("http://www.w3.org/2000/svg", "text");
        element.setAttribute("x", x.toString());
        element.setAttribute("y", y.toString());
        element.textContent = text;
        if (attributes) {
            for (let [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        return new __SVG(element);
    }

    static createTspan(x: number, y: number, text: string, attributes?: object): any {
        let element = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        element.setAttribute("x", x.toString());
        element.setAttribute("y", y.toString());
        element.textContent = text;
        if (attributes) {
            for (let [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        return new __SVG(element);
    }

    static createImage(x: number, y: number, width: number, height: number, href: string, attributes?: object): any {
        let element = document.createElementNS("http://www.w3.org/2000/svg", "image");
        element.setAttribute("x", x.toString());
        element.setAttribute("y", y.toString());
        element.setAttribute("width", width.toString());
        element.setAttribute("height", height.toString());
        element.setAttribute("href", href);
        if (attributes) {
            for (let [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        return new __SVG(element);
    }
}


export default function SVG(selector: SVGElement | string | any): any {

    let svgO: any = null;
    if (typeof selector === "string") {
        svgO = new __SVG(document.querySelector(selector));
    } else { svgO = new __SVG(selector); }
    return svgO;

}
SVG.create = __SVG.create;
SVG.createCircle = __SVG.createCircle;
SVG.createEllipse = __SVG.createEllipse;
SVG.createLine = __SVG.createLine;
SVG.createRect = __SVG.createRect;
SVG.createPolygon = __SVG.createPolygon;
SVG.createPolyline = __SVG.createPolyline;
SVG.createPath = __SVG.createPath;
SVG.createText = __SVG.createText;
SVG.createTspan = __SVG.createTspan;
SVG.createImage = __SVG.createImage;
