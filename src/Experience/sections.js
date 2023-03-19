import * as THREE from "three";
import Experience from "./Experience.js";

export default class Sections {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sphere = this.experience.sphere;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.camera = this.experience.camera;
    this.config = this.experience.config;

    const material = new THREE.MeshToonMaterial({
      color: parameters.materialColor,
      gradientMap: gradientTexture,
    });

    const objectsDistance = 2;

    const mesh1 = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.4, 16, 50),
      material
    );

    mesh1.position.y = -objectsDistance * 0;

    mesh1.position.x = 2;

    this.scene.add(mesh1);

    const sectionMeshes = [mesh1];
  }

  update() {}
}
