


class Graph 
{
	constructor(vertexCount)
	{
		this.adjArray = [];
		
		for( let i = 0; i < vertexCount; i++ )
		{
			this.adjArray.push([]);
		}
	}
	
	addEdge(start, end)
	{
		this.adjArray[start].push(end);
	}
	
	BFS(start)
	{
		let visited = [];
		this.adjArray.forEach((value, index) => { visited[index] = false })
		
		let queue = [];
		visited[start] = true;
		queue.push(start);
		
		while( queue.length != 0 )
		{
			start = queue.shift()
			console.log(start);
			
	 		this.adjArray[start].forEach((value) => {
				if( visited[value] == false )
				{
					queue.push(value);
					visited[value] = true;
				}
			}) 
		}
	}
	
	DFS(start)
	{
		let visited = [];
		this.adjArray.forEach((value, index) => { visited[index] = false })
		
		this.DFSUtil(start, visited)
	}
	
	DFSUtil(start, visited)
	{
		visited[start] = true;
		console.log(start);
		
		this.adjArray[start].forEach((value, index) => {
			if( visited[value]  == false )
			{
				this.DFSUtil(value, visited);
			}
				
		})
	}
	
	outputGraph()
	{
		this.adjArray.forEach((value, index) => {
			console.log(value)
		})
	}
	
}