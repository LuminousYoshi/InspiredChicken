
class Main extends Phaser.Scene
{
	preload()
	{
		
	}
	create()
	{
		this.nodes = [];
		this.graph = this.createGraph();
		this.drawGraph(this.graph);
	}
	
	drawGraph(graph)
	{
		graph.adjArray.forEach( (value, index) => {
			let randomX = 50 + Math.random() * 100
			let randomY = 50 + Math.random() * 100
			var nodeSprite = this.add.sprite(randomX, randomY, '')
			nodeSprite.setDisplaySize(20, 20)
			this.nodes.push(nodeSprite);
		})
		
		graph.adjArray.forEach( (value, index) => {
			value.forEach( (value, index) => {
				let current = this.nodes[index];
				let next = this.nodes[value];
				
				var graphics = this.add.graphics();
				graphics.lineStyle(1, 0x00FF00, 1.0);
				graphics.beginPath();
				graphics.moveTo(current.x, current.y);
				graphics.lineTo(next.x, next.y);
				graphics.closePath();
				graphics.strokePath();
			})
		})
	}
	
	createGraph()
	{
		var graph = new Graph(4);
		graph.addEdge(0, 1)
		graph.addEdge(0, 2) 
		graph.addEdge(1, 2) 
		graph.addEdge(2, 0) 
		graph.addEdge(2, 3) 
		graph.addEdge(3, 3) 
		//this.graph.DFS(2);
		
		return graph;
	}
	
}

var gameConfig = {
	type: Phaser.WEBGL,
	pixelArt: true,
	backgroundColor: '0x000000',
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		parent: "thegame",
		width: 288, //256
		height: 162 , //144
		zoom: 1
	},
	scene: Main,
	   physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 800 }
		}
	}
};
	
function onDeviceReady()
{
    var game = new Phaser.Game(gameConfig);
	game.scene.game = game;
    window.focus();
}
//document.addEventListener("deviceready", onDeviceReady);
window.addEventListener('load', onDeviceReady);