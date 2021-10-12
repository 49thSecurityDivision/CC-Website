import { AsciiEffect } from './AsciiEffect.js';

let camera, scene, renderer, effect;
let geometry, material, mesh;

var loader = new THREE.STLLoader();
loader.load( './assets/octo1.stl', function ( geometry ) { init( geometry);} );

function init(stlgeometry) {
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 500;

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0, 0, 0 );

    const pointLight1 = new THREE.PointLight( 0xffffff, 1,0,2);
    pointLight1.position.set( 300, 300, 300 );
    scene.add( pointLight1 );

    const pointLight2 = new THREE.PointLight( 0xffffff, 1,0,2);
    pointLight2.position.set( -300, -300, 200 );
    scene.add( pointLight2 );

    //geometry = new THREE.OctahedronGeometry(200,1);
    //material = new THREE.MeshPhongMaterial( { flatShading: true, color: 0xffffff } );
    //mesh = new THREE.Mesh( geometry, material );
    //scene.add( mesh );

    material = new THREE.MeshPhongMaterial( { flatShading: true, color: 0xffffff } );
    mesh = new THREE.Mesh( stlgeometry, material );
    mesh.scale.set( 100, 100, 100 );
    mesh.rotation.set( -0.9, 0, 0 );
    mesh.position.set( 0, -50, 0);

    mesh.receiveShadow = true;
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.clientWidth / window.clientHeight );
    renderer.setAnimationLoop( animation );

    effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
    effect.setSize( window.innerWidth, window.innerHeight -50);
    effect.domElement.style.color = '#18f018';
    effect.domElement.style.backgroundColor = 'black';

    // Special case: append effect.domElement, instead of renderer.domElement.
    // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.

    document.getElementById("octoBox").appendChild( effect.domElement );
    window.addEventListener( 'resize', onWindowResize );
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    effect.setSize( window.innerWidth, window.innerHeight );
}

function animation( time ) {

    mesh.rotation.x = (Math.sin( time /2000)/3) - 14;
    //mesh.rotation.y = time / 3000;
    mesh.rotation.z = time / 1000;

    effect.render( scene, camera );

}