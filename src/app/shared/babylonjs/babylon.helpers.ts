import * as BABYLON from 'babylonjs';

let animationsGLB: any[] = [];

export function importAnimations(meshName: string, scene: BABYLON.Scene) {
  return BABYLON.SceneLoader.ImportMeshAsync(null, meshName, undefined, scene)
    .then((result) => {
      result.meshes.forEach(element => {
        if (element)
          element.dispose();
      });
      animationsGLB.push(result.animationGroups[0]);
    });
}

// Import Model
function importModel(meshName: string, scene: BABYLON.Scene) {

  return BABYLON.SceneLoader.ImportMeshAsync(null, meshName, undefined, scene)
    .then((result) => {

      const player = result.meshes[0];

      var modelTransformNodes = player.getChildTransformNodes();

      animationsGLB.forEach((animation) => {
        animation.clone(meshName.replace('.glb', '_') + animation.name, (oldTarget: any) => {
          return modelTransformNodes.find((node) => node.name === oldTarget.name);
        });
        animation.dispose();
      });
      animationsGLB = [];
      scene.animationGroups[0].play(true);

    });
}

export async function importAnimationsAndModel(meshName: string, version = 1, scene: BABYLON.Scene) {
  await importAnimations(`babylon/${meshName}-${version}-animation.glb`, scene);
  await importModel(`babylon/${meshName}-${version}.glb`, scene);
}
