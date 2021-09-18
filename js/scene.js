import Engine from "../engine/src/engine.js"

const T = x => [ x, x, x ];

export default async (engine) => {


    engine.rendererHandler.defaultVertexSize = 4;

    // --------------------- Center cube

    await engine.addEntity(new Engine.Entity({
        transform : {
            position : [ 0, 0, -300, 0, 0 ],
            scale : [ 1, 1, 1, 1, 1 ].map(x => x * 35),
        },
        renderer : {
            renderEdges : true,
            renderVertices : false
        },
        geometry : Engine.Components.Geometry.Hypercube(5),
        scripts : [
            {
                name : "spin",
                args : [ Array(10).fill(0).map(x => Math.random() * 0.2) ]
            }
        ],
        shaders : {
            name : "parallel",
            args : [T(1), undefined, undefined, [1, 1.5, 2]]
        }
    }));

    // --------------------- Particles

    await engine.addEntity(new Engine.Entity({
        transform : {
            position : [ 0, 0, -300, 0, 0, 0, 0 ],
            scale : [ 1, 1, 1, 1, 1, 1, 1 ].map(x => x * 250),
        },
        renderer : {
            renderEdges : false
        },
        geometry : Engine.Components.Geometry.Hypercube(5),
        scripts : [
            {
                name : "spin",
                args : [ Array(10).fill(0).map(x => Math.random() * 0.15) ]
            }
        ],
        shaders : {
            name : "rgb",
            args : [T(0.5), undefined, undefined, T(Math.PI)]
        }
    }));

    await engine.addEntity(new Engine.Entity({
        transform : {
            position : [ 0, 0, -300, 0, 0, 0, 0 ],
            scale : [ 1, 1, 1, 1, 1, 1, 1 ].map(x => x * 250),
        },
        renderer : {
            renderEdges : false
        },
        geometry : Engine.Components.Geometry.Hypercube(5),
        scripts : [
            {
                name : "spin",
                args : [ Array(10).fill(0).map(x => Math.random() * 0.15) ]
            }
        ],
        shaders : {
            name : "rgb",
            args : [T(0.5), undefined, undefined, T(0)]
        }
    }));
}