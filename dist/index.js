class __SVG {
    element;
    width;
    height;
    constructor(element) {
        if (typeof element === "string") {
            element = document.querySelector(element);
        }
        else if (element instanceof __SVG) {
            element = element.element;
        }
        this.element = element;
        this.width = Number(element.getAttribute("width"));
        this.height = Number(element.getAttribute("height"));
    }
    setAttributes(attributes) {
        for (let [key, value] of Object.entries(attributes)) {
            this.element.setAttribute(key, value);
        }
        return this;
    }
    appendChild(child) {
        if (typeof child === "string") {
            child = new __SVG(child).element;
        }
        else if (child instanceof __SVG) {
            child = child.element;
        }
        this.element.appendChild(child);
        return this;
    }
    removeChild(child) {
        if (typeof child === "string") {
            child = new __SVG(child).element;
        }
        else if (child instanceof __SVG) {
            child = child.element;
        }
        this.element.removeChild(child);
        return this;
    }
    replaceChild(oldChild, newChild) {
        if (typeof newChild === "string") {
            newChild = new __SVG(newChild).element;
        }
        else if (newChild instanceof __SVG) {
            newChild = newChild.element;
            ;
        }
        this.element.replaceChild(newChild, oldChild instanceof __SVG ? oldChild.element : oldChild);
        return this;
    }
    clearChildren() {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
        return this;
    }
    static create(name, attributes, children) {
        let element = document.createElementNS("http://www.w3.org/2000/svg", name);
        if (attributes) {
            for (let [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        if (children) {
            for (let child of children) {
                element.appendChild(child);
            }
        }
        return new __SVG(element);
    }
    static createCircle(cx, cy, r, attributes) {
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
    static createEllipse(cx, cy, rx, ry, attributes) {
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
    static createLine(x1, y1, x2, y2, attributes) {
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
    static createRect(x, y, width, height, attributes) {
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
    static createPolygon(points, attributes) {
        let element = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        element.setAttribute("points", points.join(" "));
        if (attributes) {
            for (let [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        return new __SVG(element);
    }
    static createPolyline(points, attributes) {
        let element = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        element.setAttribute("points", points.join(" "));
        if (attributes) {
            for (let [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        return new __SVG(element);
    }
    static createPath(d, attributes) {
        let element = document.createElementNS("http://www.w3.org/2000/svg", "path");
        element.setAttribute("d", d);
        if (attributes) {
            for (let [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        return new __SVG(element);
    }
    static createText(x, y, text, attributes) {
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
    static createTspan(x, y, text, attributes) {
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
    static createImage(x, y, width, height, href, attributes) {
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
export default function SVG(selector) {
    let svgO = null;
    if (typeof selector === "string") {
        svgO = new __SVG(document.querySelector(selector));
    }
    else {
        svgO = new __SVG(selector);
    }
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
