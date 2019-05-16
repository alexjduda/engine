/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Brain(spriteTexture) {
    this.kDeltaDegrees = 1;
    this.kDeltaRads = this.kDeltaDegrees * (Math.PI / 180);
    this.kDeltaSpeed = 0.01;

    this.mBrain = new SpriteRenderable(spriteTexture);
    this.mBrain.setColor([1, 1, 1, 0]);
    this.mBrain.getXform().setPosition(50, 10);
    this.mBrain.getXform().setSize(3, 5.4);
    this.mBrain.setElementPixelCoordinates(600, 700, 0, 180);
    GameObject.call(this, this.mBrain);
    this.setSpeed(0.05);
}
gEngine.Core.inheritPrototype(GameObject, Brain);

Brain.prototype.update = function () {
//    GameObject.prototype.update.call(this);
//    var xform = this.getXform();
//    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Left)) {
//        xform.incRotationInRads(this.kDeltaRads);
//        vec2.rotate(this.mCurrentFrontDir, this.mCurrentFrontDir, vec2.fromValues(0, 0), this.kDeltaRads);
//    }
//    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Right)) {
//        xform.incRotationInRads(-this.kDeltaRads);
//        vec2.rotate(this.mCurrentFrontDir, this.mCurrentFrontDir, vec2.fromValues(0, 0), -this.kDeltaRads);
//    }
//    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Up)) {
//        this.incSpeedBy(this.kDeltaSpeed);
//    }
//    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Down)) {
//        this.incSpeedBy(-this.kDeltaSpeed);
//    }
};