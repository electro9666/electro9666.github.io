	var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);
	function zoom() {
		svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
	}
	
	var validCheckLink = function(){
		// 초기화
		myLink2 = [];
		for(var i = 0 ; i<myLink.length; i++){
			var f1=false, f2=false;
			for(var j = 0 ; j<myNode.length; j++){
				if(myLink[i].from == myNode[j].pk){
					f1 = true;
					break;
				}
			}
			for(var j = 0 ; j<myNode.length; j++){
				if(myLink[i].to == myNode[j].pk){
					f2 = true;
					break;
				}
			}
			if(f1 && f2){
				myLink2.push(myLink[i]);
			}
		}
	}
	var getXY = function(pk){
		for(var z = 0 ; z<myNode.length; z++){
			if(pk === myNode[z].pk){
				return {"x":myNode[z].y, "y":myNode[z].x};
			}
		}
	}
	//var myNode = [{"name":"AgglomerativeCluster", "x":0, "y":0}, {"name":"and", "x":0, "y":0}, {"name":"Easing", "x":0, "y":0}, {"name":"DataUtil", "x":0, "y":0}, {"name":"add", "x":0, "y":0}, {"name":"Converters", "x":0, "y":0}, {"name":"JSONConverter", "x":0, "y":0}];
	//var myNode;
	// scirpt로 주입
	//var myLink = [{"from":"AgglomerativeCluster", "to":"Easing"}, {"from":"AgglomerativeCluster", "to":"add"}, {"from":"DataUtil", "to":"add"}, {"from":"Converters", "to":"JSONConverter"}];
	var myLink2;
	//var myLink = [{"from":"AgglomerativeCluster", "to":"Easing"}];
	var margin = {top: 20, right: 120, bottom: 20, left: 50},
	    width = w - margin.right - margin.left,
	    height = h - margin.top - margin.bottom;
		
	var i = 0, duration = 750;
	
	var tree = d3.layout.tree()
	    .size([height, width]);
	
	var diagonal = d3.svg.diagonal()
	    .projection(function(d) { return [d.y, d.x]; });
	
	var svgBase = d3.select("body").append("svg")
	    .attr("width", width + margin.right + margin.left)
	    .attr("height", height + margin.top + margin.bottom)
	//    .call(zoomListener)
			    
	var svg =
		svgBase.append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
	;
	
//	d3.json(jsonFile, function(error, flare) {
//		if (error) throw error;
//			root = flare;
			
		root.x0 = height / 2;
		root.y0 = 0;
		function collapse(d) {
		  if (d.children) {
		    d._children = d.children;
		    d._children.forEach(collapse);
//		    d.children = null;	/C/ 주석처리하면, 전부나온다. , 주석 해제하면 0,1단계만 나온다. <주석1>
		  }
		}
		root.children.forEach(collapse);
		update(root);
//	});
	
		d3.select(self.frameElement).style("height", "800px");
	
		function update(source) {
//			console.log(source);
			
			// Compute the new tree layout.
			var nodes = tree.nodes(root).reverse(),
			    links = tree.links(nodes);
			
			// Normalize for fixed-depth.
//			nodes.forEach(function(d) {
//				d.y = d.depth * 180;
//				// TODO 라인이 겹치는 문제 일시적인 해결
//				if(d.pk.indexOf("SampleDAO>") != -1){
//					d.y += 100;	
//				}
//			});
			// ->
			_injectionFn(nodes);	// 외부에서 예외처리 하기 위해 주입함.
			
			// Update the nodes…
			var node = svg.selectAll("g.node")
			    .data(nodes, function(d) { return d.id || (d.id = ++i); });
			
			// Enter any new nodes at the parent's previous position.
			var nodeEnter = node.enter().append("g")
			    .attr("class", "node")
			    .attr("pk", function(d){
			    	return d.pk;
			    })
			    .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
			    .on("click", click);	// 클릭이벤트 주석처리 <주석1>
			
			nodeEnter.append("circle")
				.attr("class", function(d){
					if(d.kind == "package"){
						return "circle_p";
					}else if(d.kind == "clazz"){
						return "circle_c";
					}else if(d.kind == "method"){
						return "circle_m";
					}
				})
			    .attr("r", 1e-6)
			    .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });
			
			nodeEnter.append("text")
			    .attr("x", function(d) { 
			    	if(d.children){
			    		if(d.children.length>0) return -10;
			    	}
			    	if(d._children){
			    		if(d._children.length>0) return -10;
			    	}
			    	return 10;			    	
			    })
			    .attr("dy", ".35em")
			    .attr("class", "text1")
			    .attr("text-anchor", function(d) {
			    	if(d.children){
			    		if(d.children.length>0) return "end";
			    	}
			    	if(d._children){
			    		if(d._children.length>0) return "end";
			    	}
			    	return "start"; 
			    })
			    .text(function(d) { return d.name; })
			    .style("fill-opacity", 1e-6);
			
			// Transition nodes to their new position.
			var nodeUpdate = node.transition()
			    .duration(duration)
			    .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });
			
			nodeUpdate.select("circle")
			    .attr("r", 4.5)
			    .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });
			
			nodeUpdate.select("text")
			    .style("fill-opacity", 1);
			
			// Transition exiting nodes to the parent's new position.
			var nodeExit = node.exit().transition()
			    .duration(duration)
			    .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
			    .remove();
			
			nodeExit.select("circle")
			    .attr("r", 1e-6);
			
			nodeExit.select("text")
			    .style("fill-opacity", 1e-6);
			
			// Update the links…
			var link = svg.selectAll("path.link")
			    .data(links, function(d) { return d.target.id; });
			
			// Enter any new links at the parent's previous position.
			link.enter().insert("path", "g")
			    .attr("class", "link")
			    .attr("d", function(d) {
			      var o = {x: source.x0, y: source.y0};
			      return diagonal({source: o, target: o});
			    });
			
			// Transition links to their new position.
			link.transition()
			    .duration(duration)
			    .attr("d", diagonal);
			
			// Transition exiting nodes to the parent's new position.
			link.exit().transition()
			    .duration(duration)
			    .attr("d", function(d) {
			      var o = {x: source.x, y: source.y};
			      return diagonal({source: o, target: o});
			    })
			    .remove();
			
			// Stash the old positions for transition.
			nodes.forEach(function(d) {
				d.x0 = d.x;
				d.y0 = d.y;
			});
			
			// 특정 Node의 위치 확인
			myNode = [];
			nodes.forEach(function(d) {
				myNode.push({"pk":d.pk, "name":d.name, "x":d.x, "y":d.y});	// 일단 다 수집
			});	

			// 라인 추가1 (노드당 1개씩만)
// 			nodeEnter.filter(function(d){
// 				for(var z = 0 ; z<myLink.length; z++){
// 					if(d.name === myLink[z].from){
// 						return true;
// 					}
// 				}
// 				return false;
// 			})
// 			.append("path")
// 			.attr("class", "link2")
// 			.attr("d", function(d){
// 				return d3.svg.diagonal()
// 						.source( {x: 0, y: 0} )
// 					    .target( getDiff(d.name) )()
// 			});			
			
			// 라인 추가2 (자유자재로)
// 			svg
// 			.selectAll("path.link2")
// 			.data(myLink)
// 			.enter()
// 			.append("path", "g")
// 			.attr("class", "link2")
// 			.attr("d", function(d){
// 				console.log(getXY(d.from), getXY(d.to), d3.svg.diagonal()
// 						.source( getXY(d.from) )
// 					    .target( getXY(d.to) )());
// 				return d3.svg.diagonal()
// 						.source( getXY(d.from) )
// 					    .target( getXY(d.to) )()
// 			});
			
			svg.append("svg:defs").selectAll("marker")
			  .data(["end"]) // Different link/path types can be defined here
			  .enter().append("svg:marker") // This section adds in the arrows
			  .attr("id", String)
			  .attr("viewBox", "0 -5 10 10")
			  .attr("refX", 10)
			  .attr("refY", 0)
			  .attr("markerWidth", 4)
			  .attr("markerHeight", 4)
			  .attr("orient", 0)
			  .append("svg:path")
			  .attr("d", "M0,-5L10,0L0,5");
			
			validCheckLink();
			// 라인 추가3 - 커브곡선을 마음대로
			$("path.link2").remove();		//기존의 것 지우고 다시 그리기
			var link2Node = svg
			.selectAll("path.link2")
			.data(myLink2)
			.enter()
			.append("path", "g")
			.attr("from", function(d){
				return d.from;
			})
			.attr("to", function(d){
				return d.to;
			})
			.attr("class", "link2")
			.attr("stroke", "#fff")
			.attr("d", function(d){
				// 일단 기본형으로
//				return d3.svg.diagonal()
//				.source( getXY(d.from) )
//			    .target( getXY(d.to) )();
				// 기본 diagnoal
// 				return "M"+getXY(d.from).x+","+getXY(d.from).y+"C"+getXY(d.from).x+",81.97260273972603 "+getXY(d.to).x+",81.97260273972603 "+getXY(d.to).x+"," + getXY(d.to).y
//					console.log(getXY(d.from), getXY(d.to), d3.svg.diagonal()
//							.source( getXY(d.from) )
//						    .target( getXY(d.to) )());
				var pathString = "";
				if(Math.abs(getXY(d.from).x - getXY(d.to).x) < 20){
					pathString = "M"+getXY(d.from).x+","+getXY(d.from).y+"C"+(getXY(d.from).x-30)+","+(getXY(d.from).y+30)+" "+(getXY(d.to).x-30)+","+(getXY(d.to).y-30)+" "+getXY(d.to).x+"," + getXY(d.to).y;
				}else if(Math.abs(getXY(d.from).y - getXY(d.to).y) < 20){
					pathString = "M"+getXY(d.from).x+","+getXY(d.from).y+"C"+(getXY(d.from).x+30)+","+(getXY(d.from).y-30)+" "+(getXY(d.to).x-30)+","+(getXY(d.to).y-30)+" "+getXY(d.to).x+"," + getXY(d.to).y;
				}else{
					pathString = d3.svg.diagonal().source( getXY(d.from)).target( getXY(d.to))();					
				}
				return pathString;
			})
			.attr("marker-end", "url(#end)")
			;	
			
			// 링크는 시간 지연으로 보여주기
			d3.selectAll("path.link2").transition().duration(3000)
			.attr("stroke", "#1DDB16");
			
			/**
			 * path mouse over event1
			 */ 
			svg.selectAll("path.link2")
            .on("mouseover", function () {
            	var mo = d3.select(this);
            	mo.style("stroke", "red");
            	
//     			nodeEnter.filter(function(d) {
//     				if(mo.attr("from") == d.pk || mo.attr("to") == d.pk){
//     					return true;
//     				}
//     				return false;
//     			})
//     			.selectAll("text")
//     			.attr("class", "text2");

            	// nodeEnter를 사용하지 않고, 사전에 <g>에 pk attr를 넣고 가져다 사용하자 
				$("svg g.node").each(function(i, d){
					if(mo.attr("from") == $(d).attr("pk") || mo.attr("to") == $(d).attr("pk")){
						$(d).find("text").removeClass("text1");
    					$(d).find("text").addClass("text2");
    				}
				})

            });
        	svg.selectAll("path.link2")
            .on("mouseout", function () {
            	d3.select(this).style("stroke", "#1DDB16");
            	
            	$("svg g.node text").each(function(i, d){
					$(d).removeClass("text2");
					$(d).addClass("text1");
            	});
            });
        	
			/**
			 * node mouse over event2
			 */ 
			svg.selectAll("g.node")
            .on("mouseover", function () {
            	var mo = d3.select(this);
            	
            	for (var j = 0; j < myLink2.length; j++) {
            		if(mo.attr("pk") == myLink2[j].from || mo.attr("pk") == myLink2[j].to){
            			$("path.link2").each(function(i, d){
            				var from = $(d).attr("from");
            				var to = $(d).attr("to");
            				if(from == myLink2[j].from && to == myLink2[j].to){	// 완전히 일치
		            			// highlight path
            					$(d).css("stroke", "red");
		            			
            					// highlight node
            					$("svg g.node").each(function(i2, d2){
									if($(d2).attr("pk") == from || $(d2).attr("pk") == to){
										$(d2).find("text").removeClass("text1");
				    					$(d2).find("text").addClass("text2");
									}
								}) 
            				}
            			});
            		}
				}
            });
			svg.selectAll("g.node")
            .on("mouseout", function () {
            	// 해제
            	$("path.link2").each(function(i, d){
            		$(d).css("stroke", "#1DDB16");
            	});
            	// 해제
            	$("svg g.node text").each(function(i, d){
					$(d).removeClass("text2");
					$(d).addClass("text1");
            	});
            });        	
		}
		
		// Toggle children on click.
		function click(d) {
			if (d.children) {
				d._children = d.children;
				d.children = null;
			} else {
				d.children = d._children;
				d._children = null;
			}
			update(d);
		}
		
		// TODO 추후 리팩토링을 위해 일단 이렇게
		// legend - circle
		d3.select("body").select("svg")
		.append("circle")
		.attr("r", 5)
		.attr("cx", 50)
		.attr("cy", 50)
		.attr("stroke", "red")
		.attr("stroke-width", "1.5px")
	    .style("fill", "#fff");
		d3.select("body").select("svg")
		.append("circle")
		.attr("r", 5)
		.attr("cx", 50)
		.attr("cy", 80)
		.attr("stroke", "green")
		.attr("stroke-width", "1.5px")
	    .style("fill", "#fff");
		d3.select("body").select("svg")
		.append("circle")
		.attr("r", 5)
		.attr("cx", 50)
		.attr("cy", 110)
		.attr("stroke", "steelblue")
		.attr("stroke-width", "1.5px")
	    .style("fill", "#fff");
		// legend -text
		d3.select("body").select("svg")		
		.append("text")
	    .attr("x", 60)
	    .attr("y", 50)
	    .text("package");
		d3.select("body").select("svg")		
		.append("text")
	    .attr("x", 60)
	    .attr("y", 80)
	    .text("class");
		d3.select("body").select("svg")		
		.append("text")
	    .attr("x", 60)
	    .attr("y", 110)
	    .text("method");