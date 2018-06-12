(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.cloudmove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],0,52,0,-50).s().p("AFlHLQhSgngqgSQhIggg3gLQhEgOhsAGQiaAKgZgBQhhgBiYgiQjGgrgxgHQhngPiFABQg9ABixAIQkyAPilgkIPGiUQBhgPA1gEQBTgHBDAJQBKAKALABQAwABAegTQAQgKAggjQAcgfAWgIQAlgPA3AYQAfAOA8AgQA6AWA/gUQA/gUAjgyQAIgLANgZQANgVANgLQAkgfA5ANQAyAMAsAnQAaAXAzAvQAuAnArAJQBFAOBCg1QA5guAghMQAIgUAnh8QAbhXAhgxQBSh2CkgLQCfgLB0BgQBtBZAuCYQArCMgWCYIAIAoQAoBZg/BfQg8BbhlAaQhYAVhtgYQhOgRhygwQglgQgSgGQgfgLgbgDQhNgHhyBGIhdA3Qg1AdgsAJQgYAFgbAAQhWAAhygyg");
	this.shape.setTransform(169.1,132.2,0.539,0.539);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloudmove, new cjs.Rectangle(77.9,104.8,182.4,54.9), null);


(lib.c2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-0.4,50.8,0.2,-35.9).s().p("AplGRQmOgDk8gkQgngFgWgFQghgIgVgQQgZgTgIgdQgHggATgUQASgTAwgHQBHgLDIAIQCygEA2hTQAKgOAHgUIAMgkIAkh7QAhhuAig8QAyhYBOghQCzhMCaCDQBsBdBXC5QALAXAJANQAOARARAHQAlAOAqgiQAwgtAYgTQA1gpBNAPQBOAPAgA6QAJAQAQAhQARAcAYAGQAbAGAigZQAlggAUgLQA2gdBNAkQAaANBnBGQCABYDHATQCCAMDmgSQAVANgTAXQgSAWgcAHQkeBGlxAdQjfASm7AMQmeALjoAAIhFAAg");
	this.shape.setTransform(147.8,40.1,0.762,0.762);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.c2, new cjs.Rectangle(35.2,9.6,225.2,61.1), null);


(lib.cloud1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.c2();
	this.instance.parent = this;
	this.instance.setTransform(147.8,40.1,1,1,0,0,0,147.8,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:26.2},15).to({y:40.1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.2,9.6,225.2,61.1);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cloudmove();
	this.instance.parent = this;
	this.instance.setTransform(169.1,50.9,1,1,0,0,0,169.1,50.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:71.9},26).to({y:50.9},31).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(77.9,104.8,182.4,54.9);


// stage content:
(lib.clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OBJECTS
	this.instance = new lib.cloud1();
	this.instance.parent = this;
	this.instance.setTransform(116.6,296.2,0.493,0.493,0,0,0,147.8,40.1);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:460.5,alpha:0},357).wait(1));

	// OBJECTS
	this.instance_1 = new lib.cloud1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-175.9,141.7,1,1,0,0,0,147.8,40.1);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:755.9,alpha:0.129},357).wait(1));

	// OBJECTS
	this.instance_2 = new lib.cloud();
	this.instance_2.parent = this;
	this.instance_2.setTransform(705.7,265,1,1,0,0,0,169.1,50.9);
	this.instance_2.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-268.2,alpha:1},357).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(117,63,102,0)").ss(0.1,1,1).p("EgwHgj0MBgPAAAIAAGAMAAABBpMhgPAAAg");
	this.shape.setTransform(279.9,218.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#753F66").s().p("EgwHAj1MAAAhHpMBgPAAAIAAGAMAAABBpg");
	this.shape_1.setTransform(279.9,218.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(117,63,102,0)").s().p("EgF8Ag1MAAAhBpIL5AAMAAABBpg");
	this.shape_2.setTransform(626,237.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(358));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,188.1,1085.4,460.7);
// library properties:
lib.properties = {
	id: '24961A59E424624CB5FB9B27591E7913',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['24961A59E424624CB5FB9B27591E7913'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(lib_clouds = lib_clouds||{}, createjs_clouds = createjs_clouds||{}, AdobeAn = AdobeAn||{});
var createjs_clouds, AdobeAn;
var libs_clouds;