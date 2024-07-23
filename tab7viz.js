class Tab7Viz{

    static Tab7VizRootName
    static Tab7VizData

    constructor(rootName, selectedOptions, structureData, classNames){
        this.rootName = rootName
        this.selectedOptions = selectedOptions
        this.structureData = structureData
        this.classNames = classNames
        Tab7Viz.Tab7VizRootName = rootName
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
            .text("Indicator Organisms Heatmap")

        svg.append("text")
            .attr("x", 612)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("Low Abundance Indicator Organism"))

        // Append a rectangle to the SVG container and apply the gradient
        svg.append("rect")
            .attr("x", 622)    // x position of the rectangle
            .attr("y", 90)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "blue") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")


        svg.append("text")
            .attr("x", 612)
            .attr("y", 160)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("High Abundance Indicator Organism")

        // Append a rectangle to the SVG container and apply the gradient
        svg.append("rect")
            .attr("x", 622)    // x position of the rectangle
            .attr("y", 130)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "red") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")


        svg.append("text")
            .attr("x", 612)
            .attr("y", 200)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("Non-Indicator Organism")

        // Append a rectangle to the SVG container and apply the gradient
        svg.append("rect")
            .attr("x", 622)    // x position of the rectangle
            .attr("y", 170)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "white") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        

        svg.append("text")
            .attr("x", 1047)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            // .attr("text-anchor", "end")
            .text("Go Up Hierarchy")


        svg.append("circle")
            .attr("cx", 1362)    // x position of the rectangle
            .attr("cy", 105)    // y position of the rectangle
            .attr("r", 20) // width of the rectangle
            .attr("fill", "black") 

        svg.append("text")
            .attr("x", 1392)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Current Root")
        
        svg.append("text")
            .attr("x", 1047)
            .attr("y", 170)
            .attr("font-size", "38")
            .attr("fill", "Black")
            // .attr("text-anchor", "end")
            .text("Click on any node in graph to make that node root.")

        // console.log(Tab7Viz.Tab7VizRootName)
        let renderVal = Tab7Viz.Tab7VizRootName.split('__')
        console.log(renderVal)
        svg.append("text")
            .attr("x", 1047)
            .attr("y", 220)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Current Root = " + renderVal[1] + "[" + nameMapping(renderVal[0]) + "]")

        svg.append("text")
            .attr("x", 1047)
            .attr("y", 270)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Bacteria needs to be the root of the hierarchy for the checkboxes functionality to be used.")
    }

    fillDropDown(){
        let diseaseNames = this.structureData[1].map(item => item.Name)
        const selectBox = document.getElementById('selectBox-T5');
        // console.log(document.getElementById('selectInput-T2').value)
        let val = document.getElementById('selectInput-T5').value
        if (val === ''){
            selectBox.innerHTML = ''; // Clear any existing options
            let selectedValue = ''
            let that = this
            diseaseNames.forEach(option => {
                let div = document.createElement('div');
                div.textContent = option;
                div.addEventListener('click', function() {
                    document.getElementById('selectInput-T5').value = this.innerText;
                    selectedValue = this.innerText;
                    selectBox.style.display = 'none';
                    // console.log(selectedValue)
                    removeVizDivs()
                    renderVizDivs(that.selectedOptions.length, 'tab5')
                    that.render(selectedValue)
                });
                selectBox.appendChild(div);
            });
        }
        else{
            removeVizDivs()
            renderVizDivs(this.selectedOptions.length,'tab5')
            this.render(val)
        }


        document.getElementById('selectInput-T5').addEventListener('keyup', function() {
            let filter = this.value.toUpperCase();
            let selectBox = document.getElementById('selectBox-T5');
            let options = selectBox.getElementsByTagName('div');
            
            for (let i = 0; i < options.length; i++) {
                let txtValue = options[i].textContent || options[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    options[i].style.display = "";
                } else {
                    options[i].style.display = "none";
                }
            }
        });

        document.getElementById('selectInput-T5').addEventListener('focus', function() {
            document.getElementById('selectBox-T5').style.display = 'block';
        });

        document.addEventListener('click', function(event) {
            if (!event.target.matches('#selectInput-T5')) {
                document.getElementById('selectBox-T5').style.display = 'none';
            }
        });

        // this.render(diseaseNames)
    }

    transformObject(obj) {
        const transformedObjects = [];
        Object.keys(obj).forEach((key, index) => {
            if (index > 1){
                let value = obj[key]

                const firstCloseBracketIndex = value.indexOf(']')
                const firstOpenParenIndex = value.indexOf('(');
                const result = value.substring(firstCloseBracketIndex+1, firstOpenParenIndex).trim();

                let match2 = value.match(/\[(\d+)\]/);
                let number = match2 ? match2[1] : null;
                if (number === null){
                    number = '620'
                }

                let match3 = value.match(/\((-?\d+(?:\.\d+)?)\)/);
                let number2 = match3 ? match3[1] : null;


                const transformedObj = {};
                transformedObj.organism = result; // Example transformation
                transformedObj.ncbi_taxon_id = number; // Example transformation for key2
                transformedObj.weight = number2; // Example transformation for key3
                transformedObjects.push(transformedObj);
            }
        });
        return transformedObjects;
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


    render(diseaseName){
        // console.log(diseaseName)
        // console.log(this.structureData)
        let csvData = this.structureData[1]
        let myRow
        for (const row in csvData){
            if (csvData[row].Name === diseaseName){
                myRow = csvData[row]
            }
        }
        // console.log(myRow)

        let transformedData = this.transformObject(myRow);
        // console.log(transformedData)


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

            if (Tab7Viz.Tab7VizRootName !== 'sk__Bacteria__2'){
                disableCheckboxes()
            }
            else{
                enableCheckboxes()
            }

            data = findChildByName(data, Tab7Viz.Tab7VizRootName)
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

            // let arr = [[1,2], [1,2], [1,2], [3,4]]

            // Create the initial hierarchy and pack layout
            let hierarchy = d3.hierarchy(data).sum(d => d.value).sort((a, b) => b.value - a.value);
            let pack = d3.pack()
                .size([1150, 1150])
                .padding(3);

            let root = pack(hierarchy);
            // let finalRoot


            // for (let i = 0; i < arr.length; i++){
            //     let numbers = arr[i]
            //     let w = numbers[0]
            //     let x = numbers[1]
            //     root = this.reassignChildren(root, w, x); // Modify hierarchy
            //     // console.log("Before recalculation:", root);
            //     // root = this.recalculateValues(root); // Update node values based on number of children
            //     // console.log("After recalculation:", root);
            //     root = this.adjustDepths(root, x); // Adjust depths if needed
            //     root = pack(root); // Reapply pack layout
            // }
            
            
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
                    let myWeight = findTaxonWeightbyID(transformedData, taxonID)
                    if (myWeight === null){
                        return "white"
                    }
                    else{
                        let cdf = findTaxonCDFbyID(that.structureData[i+2], taxonID)

                        if (cdf === null){
                            return "white"
                        }
                        else{
                            if (myWeight > 0){
                                return "red"
                            }
                            else{
                                return "blue"
                            }
                        }
                    }
                })
                .attr("fill-opacity", 1)
                .attr("stroke", "black")

            
        }
    }
}