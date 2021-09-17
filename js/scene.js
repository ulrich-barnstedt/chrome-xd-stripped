import Engine from "../engine/src/engine.js"

const T = x => [ x, x, x ]

export default async (engine) => {

    // --------------------- Center cube

    await engine.addEntity(new Engine.Entity({
        transform : {
            position : [ 0, 0, -300, 0, 0 ],
            scale : [ 1, 1, 1, 1, 1 ].map(x => x * 28),
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

// --------------------- Side cubes

/*let spinVec = Array(10).fill(0).map(x => Math.random() * 0.2);

await engine.addEntity(new Engine.Entity({
    transform : {
        position : [ 800, 0, -300, 0, 0 ],
        scale : [ 1, 1, 1, 1, 1 ].map(x => x * 45),
    },
    renderer : {
        renderEdges : true,
        renderVertices : false
    },
    geometry : Engine.Components.Geometry.Hypercube(5),
    scripts : [
        {
            name : "spin",
            args : [ spinVec ]
        }
    ],
    shaders : {
        name : "parallel",
        args : [[0.5, 0.5, 0.5], undefined, undefined, [1, 1, 1]]
    }
}));*/

// --------------------- Center cube

/*await engine.addEntity(new Engine.Entity({
    transform : {
        position : [ 0, 0, -300, 0, 0 ],
        scale : [ 1, 1, 1, 1, 1 ].map(x => x * 20),
    },
    renderer : {
        renderFaces : true,
        renderVertices : false
    },
    geometry : Engine.Components.Geometry.Icosahedron,
    scripts : [
        {
            name : "spin",
            args : [ Array(3).fill(0).map(x => Math.random() * 0.3) ]
        }
    ],
    shaders : {
        //name : "parallel",
        //args : [[1, 1, 1]],
        //face : {
        //    name : "parallel",
        //    args : [[1, 1, 1]]
        //}

        vertex: { name: "rgb", args: [ T(1) ] },
        edge: { name: "rgb", args: [ T(1) ] },
        face: { name: "rgb", args: [ T(1), T(1) ] },
    }
}));*/