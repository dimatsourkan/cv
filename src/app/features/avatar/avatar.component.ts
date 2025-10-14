import { AfterViewInit, Component, type ElementRef, HostListener, viewChild } from '@angular/core';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import { importAnimationsAndModel } from '../../shared/babylonjs/babylon.helpers';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent implements AfterViewInit {

  mouseX: number = window.innerWidth / 2;
  mouseY: number = window.innerHeight / 2;

  canvas = viewChild<ElementRef<HTMLCanvasElement>>('canvas');

  get xRotationRadians(): number {
    return 0.1 * (this.mouseX / window.innerWidth);
  }

  ngAfterViewInit(): void {
    this.buildAvatar();
  }

  @HostListener('window:mousemove', [ '$event' ])
  onWindowScroll(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  async buildAvatar(): Promise<void> {
    const headMeshNames = ['Wolf3D_Head', 'EyeLeft', 'EyeRight', 'Wolf3D_Teeth', 'Wolf3D_Hair'];
    const canvas = this.canvas()?.nativeElement as HTMLCanvasElement;
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    const rotateHuman = () => {
      const human = scene.meshes[0];
      human.position = new BABYLON.Vector3(0, -0.75, -2.4);
      human.rotation = new BABYLON.Vector3(0, 0, 0);
    }

    const rotateHead = () => {
      const rotationX = this.xRotationRadians;
      headMeshNames.forEach(meshName => {
        const mesh = scene.getMeshByName(meshName) as any;
        mesh.rotation = new BABYLON.Vector3(0, rotationX, 0)
      });
    }

    const renderScene = () => {
      scene.render();
    }

    await importAnimationsAndModel("avatar", 3, scene);

    scene.createDefaultCameraOrLight(true, false, false);

    engine.runRenderLoop(() => {
      rotateHuman();
      rotateHead();
      renderScene();
    });
  }
}
