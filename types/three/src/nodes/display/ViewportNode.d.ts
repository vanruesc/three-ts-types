import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export type ViewportNodeScope =
    | typeof ViewportNode.COORDINATE
    | typeof ViewportNode.RESOLUTION
    | typeof ViewportNode.TOP_LEFT
    | typeof ViewportNode.BOTTOM_LEFT
    | typeof ViewportNode.TOP_RIGHT
    | typeof ViewportNode.BOTTOM_RIGHT;

declare class ViewportNode extends Node {
    scope: ViewportNodeScope;

    readonly isViewportNode: true;

    constructor(scope: ViewportNodeScope);

    static COORDINATE: "coordinate";
    static RESOLUTION: "resolution";
    static TOP_LEFT: "topLeft";
    static BOTTOM_LEFT: "bottomLeft";
    static TOP_RIGHT: "topRight";
    static BOTTOM_RIGHT: "bottomRight";
}

export default ViewportNode;

export const viewportCoordinate: ShaderNodeObject<ViewportNode>;
export const viewportResolution: ShaderNodeObject<ViewportNode>;
export const viewport: ShaderNodeObject<ViewportNode>;
export const viewportUV: ShaderNodeObject<ViewportNode>;

/**
 * @deprecated "viewportTopLeft" is deprecated. Use "viewportUV" instead.
 */
export const viewportTopLeft: ShaderNodeObject<ViewportNode>;

/**
 * @deprecated "viewportBottomLeft" is deprecated. Use "viewportUV.flipY()" instead.
 */
export const viewportBottomLeft: ShaderNodeObject<ViewportNode>;
