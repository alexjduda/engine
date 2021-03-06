/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";
var gEngine = gEngine || {};

gEngine.Core = (function() {
    var mGL = null;
    
    var getGL = function() {
        return mGL; 
    };
    
    var inheritPrototype = function(superClass, subClass) {
        var prototype = Object.create(superClass.prototype);
        prototype.constructor = subClass;
        subClass.prototype = prototype;
    };
    
    var _initializeWebGL = function(htmlCanvasId) {
        var canvas = document.getElementById(htmlCanvasId);

        var args = {
            alpha: false,
            depth: true,
            stencil: true,
        };
        mGL = canvas.getContext("webgl", args)
                || canvas.getContext("experimental-webgl", args);

        mGL.blendFunc(mGL.SRC_ALPHA, mGL.ONE_MINUS_SRC_ALPHA);
        mGL.enable(mGL.BLEND);

        mGL.depthFunc(mGL.LEQUAL);
        mGL.enable(mGL.DEPTH_TEST);

        mGL.pixelStorei(mGL.UNPACK_FLIP_Y_WEBGL, true);
        
        if (mGL === null) {
            document.write("<br/><b> WebGL is not supported. </b>");
            return;
        }
    };
    
    var initializeEngineCore = function(htmlCanvasID, myGame) {
        _initializeWebGL(htmlCanvasID);
        gEngine.VertexBuffer.initialize();
        gEngine.Input.initialize(htmlCanvasID);
        gEngine.AudioClips.initAudioContext();
        
        gEngine.DefaultResources.initialize(function() { startScene(myGame); });
    }
    
    var startScene = function(myGame) {
        myGame.loadScene.call(myGame);
        gEngine.GameLoop.start(myGame);
    }
    
    var clearCanvas = function(color) {
        mGL.clearColor(color[0], color[1], color[2], color[3]);
        mGL.clear(mGL.COLOR_BUFFER_BIT | mGL.DEPTH_BUFFER_BIT | mGL.STENCIL_BUFFER_BIT);
    };
    
    var mPublic = {
        getGL: getGL,
        inheritPrototype: inheritPrototype,
        initializeEngineCore: initializeEngineCore,
        startScene: startScene,
        clearCanvas: clearCanvas,
    };
    
    return mPublic;
}());