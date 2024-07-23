class Tab6Viz{

    static Tab6VizRootName
    static Tab6VizData

    constructor(sliderMin, sliderMax, rootName, selectedOptions, structureData, classNames){
        this.sliderMin = sliderMin
        this.sliderMax = sliderMax
        this.rootName = rootName
        this.selectedOptions = selectedOptions
        this.structureData = structureData
        this.classNames = classNames
        Tab6Viz.Tab6VizRootName = rootName
        // Tab1Viz.Tab1VizData = structureData
    }


    renderLegend(){
        let svg = d3.select(".dynamic-div-x" ).append("svg")
                    .attr("width", 2960)
                    .attr("height", 410)

        svg.append("text")
            .attr("x", 0)
            .attr("y", 50)
            .attr("font-size", "58")
            .attr("fill", "Black")
            .text("All Organisms Heatmap")

        svg.append("text")
            .attr("x", 542)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("Low Abundance of Organism"))

        const gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#0200b9")
            .attr("stop-opacity", 1);

        gradient.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#00fff3")
                .attr("stop-opacity", 1);

        // Append a rectangle to the SVG container and apply the gradient
        svg.append("rect")
            .attr("x", 552)    // x position of the rectangle
            .attr("y", 90)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "url(#gradient)") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
        .attr("x", 552)
        .attr("y", 150)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("0")

        svg.append("text")
        .attr("x", 952)
        .attr("y", 150)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .attr("text-anchor", "end")
        .text((this.sliderMin).toFixed(0))

        svg.append("text")
            .attr("x", 542)
            .attr("y", 190)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("Normal Abundance of Organism"))

        // Append a rectangle to the SVG container and apply the gradient
        svg.append("rect")
            .attr("x", 552)    // x position of the rectangle
            .attr("y", 160)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "purple") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 552)
            .attr("y", 220)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text((this.sliderMin).toFixed(0))
    
        svg.append("text")
            .attr("x", 952)
            .attr("y", 220)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text((this.sliderMax).toFixed(0))

        svg.append("text")
            .attr("x", 542)
            .attr("y", 260)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("High Abundance of Organism"))

        const gradient2 = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient2")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient2.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#ff0000")
            .attr("stop-opacity", 1);

        gradient2.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#7b0000")
                .attr("stop-opacity", 1);

        // Append a rectangle to the SVG container and apply the gradient
        svg.append("rect")
            .attr("x", 552)    // x position of the rectangle
            .attr("y", 230)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "url(#gradient2)") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 552)
            .attr("y", 290)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text((this.sliderMax).toFixed(0))
    
        svg.append("text")
            .attr("x", 952)
            .attr("y", 290)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("100")

        svg.append("text")
            .attr("x", 542)
            .attr("y", 330)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("Organism Absent"))

        svg.append("rect")
            .attr("x", 552)    // x position of the rectangle
            .attr("y", 300)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "white") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")


        svg.append("text")
            .attr("x", 1027)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            // .attr("text-anchor", "end")
            .text("Go Up Hierarchy")


        svg.append("circle")
            .attr("cx", 1342)    // x position of the rectangle
            .attr("cy", 105)    // y position of the rectangle
            .attr("r", 20) // width of the rectangle
            .attr("fill", "black") 

        svg.append("text")
            .attr("x", 1372)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Current Root")
        
        svg.append("text")
            .attr("x", 1027)
            .attr("y", 170)
            .attr("font-size", "38")
            .attr("fill", "Black")
            // .attr("text-anchor", "end")
            .text("Click on any node in graph to make that node root.")

        let renderVal = Tab6Viz.Tab6VizRootName.split('__')
        svg.append("text")
            .attr("x", 1027)
            .attr("y", 220)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Current Root = " + renderVal[1] + "[" + nameMapping(renderVal[0]) + "]")

        svg.append("text")
            .attr("x", 1027)
            .attr("y", 270)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Bacteria needs to be the root of the hierarchy for the checkboxes functionality to be used.")
    }


    reassignChildren(root, w, x) {
        root.each(node => {
            if (node.depth === x && node.children) {
                node.children.forEach(child => {
                    let ancestor = node.parent;
                    while (ancestor && ancestor.depth !== w) {
                        ancestor = ancestor.parent;
                    }
                    if (ancestor) {
                        ancestor.children = ancestor.children || [];
                        ancestor.children.push(child);
                        child.parent = ancestor;
                    }
                });
                if (node.parent) {
                    node.parent.children = node.parent.children.filter(n => n !== node);
                }
            }
        });
        root.eachBefore(node => {
            if (node.children && node.children.length === 0) {
                delete node.children;
            }
        });
        return root;
    }
    
    adjustDepths(root, removedDepth) {
        root.each(node => {
            if (node.depth > removedDepth) {
                node.depth -= 1;
            }
        });
        return root;
    }
    
    
    // Function to recalculate the values of the nodes
    // recalculateValues(root) {
    //     root.each(node => {
    //         node.value = node.children ? node.children.length : 0;
    //         // console.log(`Node: ${node.data.name}, Value: ${node.value}`); // Debugging line
    //     });
    //     // Ensure sum is recalculated based on updated values
    //     root.sum(d => d.value).sort((a, b) => b.value - a.value);
    //     console.log('X:', root)
    //     return root;
    // }

    assignValues(node) {
        if (!node.children || node.children.length === 0) {
          // Leaf node
          node.value = 1; // or another default value if necessary
        } else {
          // Non-leaf node
        //   node.value = node.children.length;
          // Recursively process children
          for (let child of node.children) {
            this.assignValues(child);
          }
        }
    }
    

    render(){
        // console.log(this.structureData)
        let sliderMin = this.sliderMin/100
        let sliderMax = this.sliderMax/100

        for (let i = 0; i < this.classNames.length; i++) {
            let data = this.structureData[0]

            let svg = d3.select(this.classNames[i]).append("svg")
                    .attr("width", 1150)
                    .attr("height", 1220)
                    .attr("viewBox", [0, 0, 1150, 1220])
                    .style("font", "30px sans-serif");
            
            let word = this.selectedOptions[i]
            // console.log(word)

            svg.append("text")
                .attr("x", 0)
                .attr("y", 25)
                .attr("font-size", "34")
                .attr("fill", "black")
                .text(word)

            if (Tab6Viz.Tab6VizRootName !== 'sk__Bacteria__2'){
                disableCheckboxes()
            }
            else{
                enableCheckboxes()
            }

            
            data = findChildByName(data, Tab6Viz.Tab6VizRootName)
            console.log(data)

            let that = this
            function processData(data) {
                if (data && typeof data === 'object' && data.children && Array.isArray(data.children)) {
                  that.assignValues(data);
                } else {
                  console.error("The data structure is not recognized or does not have a 'children' property.");
                }
              }
              
              // Start processing the data
            processData(data);
            console.log(data)


            // // let checkedLevels = []
            // // const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            // // checkboxes.forEach(function(checkbox) {
            // //     if (checkbox.checked) {
            // //         checkedLevels.push(parseInt(checkbox.value))
            // //     }
            // // });
            // // console.log(checkedLevels)
            let arr = [[1,2], [1,2], [1,2], [3,4]]

            // Create the initial hierarchy and pack layout
            let hierarchy = d3.hierarchy(data).sum(d => d.value).sort((a, b) => b.value - a.value);
            let pack = d3.pack()
                .size([1150, 1150])
                .padding(3);

            let root = pack(hierarchy);
            let finalRoot
            // Reassign children and remove nodes at depth x
            for (let i = 0; i < arr.length; i++){
                let numbers = arr[i]
                let w = numbers[0]
                let x = numbers[1]
                root = this.reassignChildren(root, w, x); // Modify hierarchy
                // console.log("Before recalculation:", root);
                // root = this.recalculateValues(root); // Update node values based on number of children
                // console.log("After recalculation:", root);
                root = this.adjustDepths(root, x); // Adjust depths if needed
                root = pack(root); // Reapply pack layout
            }
            
            

            // cons
            let colorScaleLow = d3.scaleLinear()
                       .domain([0, sliderMin])
                       .range(["#0200b9", "#00fff3"]);
    
            let colorScaleHigh = d3.scaleLinear()
                        .domain([sliderMax, 1])
                        .range(["#ff0000", "#7b0000"]);



            svg.selectAll("circle")
                .data(root.descendants().slice(1)) // Start from index 1 to skip the root node
                .join("circle")
                .classed("sunburst-path", true) // Add a class to each path
                .attr("id", (d, i) => "path-" + d.data.name) // Add a unique ID to each path
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("r", function(d){
                    return d.r
                })
                .attr("fill", function(d){
                    let nodeName = d.data.name
                    let lastIndex = nodeName.lastIndexOf('__')
                    let taxonID = nodeName.substring(lastIndex + 2)
                    let cdf = findTaxonCDFbyID(that.structureData[i+2], taxonID)
                    // console.log(cdf)
                    if (cdf === null){
                        // console.log('yes')
                        return "white"
                    }
                    else{
                        // console.log(cdf)
                        if (cdf < 0){
                            return colorScaleLow(0)
                        }
                        else if (cdf >= 0 && cdf < sliderMin){
                            return colorScaleLow(cdf)
                        }
                        else if (cdf >= sliderMax && cdf <= 1){
                            return colorScaleHigh(cdf)
                        }
                        else if (cdf > 1){
                            return colorScaleHigh(1)
                        }
                        else{
                            return "purple"
                        }
                    }
                })
                .attr("fill-opacity", 1)
                .attr("stroke", "black")
                // .on("mouseover", function (event, d){
                //     // console.log(d)
                //     // let nodeName = d.data.name
                //     // handleMouseOver(event, index, d, root, nodeName)
                //     handleMouseOver(event, d, csvData)
                // })
                // .on("mouseout", mouseout);
            
        }
    }



}