function getSelectedOptions() {
    const selectElement = document.getElementById('multiSelect');
    const selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);
    // console.log(selectedOptions)
    if (selectedOptions.length === 0){
        removeCheckBoxes()
        removeLegendDivs()
        removeT1Slider()
        removeT2Dropdown()
        removeT3Dropdown()
        removeT4Dropdown()
        removeT5Slider()
        removeT6Slider()
        removeT7Dropdown()
        removeVizDivs()
        removeTabs()
        alert('Select at least one sample')
    }
    else{
        removeCheckBoxes()
        renderCheckboxes(selectedOptions) 
        removeLegendDivs()
        renderLegendDivs()

        const tabsContainer = document.getElementById('tabs-container');
        const activeTab = tabsContainer.querySelector('.tab.active');
        let activeTabID
        if (activeTab) {
            activeTabID = activeTab.getAttribute('data-tab')
        }
        else{
            activeTabID = 'tab1'
        }

        if (activeTabID === 'tab1'){
            removeT1Slider()
            renderT1Slider(selectedOptions)
            //depopulate T2dropdown here
            removeT2Dropdown()
            removeT3Dropdown()
            removeT4Dropdown()
            removeT5Slider()
            removeT6Slider()
            removeT7Dropdown()
        }
        if (activeTabID === 'tab2'){
            removeT1Slider()
            //depopulate T2dropdown here
            removeT2Dropdown()
            renderT2Dropdown()
            removeT3Dropdown()
            removeT4Dropdown()
            removeT5Slider()
            removeT6Slider()
            removeT7Dropdown()
        }
        if (activeTabID === 'tab3'){
            removeT1Slider()
            //depopulate T2dropdown here
            removeT2Dropdown()
            removeT3Dropdown()
            renderT3Dropdown()
            removeT4Dropdown()
            removeT5Slider()
            removeT6Slider()
            removeT7Dropdown()
        }
        if (activeTabID === 'tab4'){
            removeT1Slider()
            //depopulate T2dropdown here
            removeT2Dropdown()
            removeT3Dropdown()
            removeT4Dropdown()
            renderT4Dropdown()
            removeT5Slider()
            removeT6Slider()
            removeT7Dropdown()
        }

        if (activeTabID === 'tab5'){
            removeT1Slider()
            //depopulate T2dropdown here
            removeT2Dropdown()
            removeT3Dropdown()
            removeT4Dropdown()
            removeT5Slider()
            renderT5Slider(selectedOptions)
            removeT6Slider()
            removeT7Dropdown()
        }

        if (activeTabID === 'tab6'){
            removeT1Slider()
            //depopulate T2dropdown here
            removeT2Dropdown()
            removeT3Dropdown()
            removeT4Dropdown()
            removeT5Slider()
            removeT6Slider()
            renderT6Slider(selectedOptions)
            removeT7Dropdown()
        }

        if (activeTabID === 'tab7'){
            removeT1Slider()
            //depopulate T2dropdown here
            removeT2Dropdown()
            removeT3Dropdown()
            removeT4Dropdown()
            removeT5Slider()
            removeT6Slider()
            removeT7Dropdown()
            renderT7Dropdown()
        }

        removeVizDivs()
        renderVizDivs(selectedOptions.length, activeTabID)

        removeTabs()
        renderTabs(selectedOptions, activeTabID)
        let sunburst = new Sunburst(35, 65, activeTabID, "sk__Bacteria__2", selectedOptions)
        sunburst.getData(selectedOptions, activeTabID)
    }
}


function removeTabs(){
    const tabs = document.getElementById('tabs')
    tabs.innerHTML = ''
}

function renderTabs(selectedOptions, activeTabID){
    const tabsData = [
        { id: 'tab1', label: 'All Organisms Heatmap -- Sunburst -- Sample Dependent'},
        { id: 'tab2', label: 'Indicator Organisms for Diseases Heatmap -- Sunburst -- Sample Dependent'},
        { id: 'tab3', label: 'Changes in Organism Abundance given Actions Heatmap -- Qualitative -- Sunburst -- Sample Dependent'},
        { id: 'tab4', label: 'Changes in Organism Abundance given Actions Heatmap -- Quantitative -- Sunburst -- Sample Dependent'},
        { id: 'tab5', label: 'Aggregate Organisms -- Sunburst -- All Samples Aggregated'},
        { id: 'tab6', label: 'All Organisms Heatmap -- Circular Treemap -- Sample Dependent'},
        { id: 'tab7', label: 'Indicator Organisms for Diseases Heatmap -- Circular Treemap -- Sample Dependent'},
    ];

    let tabValue
    if (activeTabID === 'tab1'){
        tabValue = 0
    }
    if (activeTabID === 'tab2'){
        tabValue = 1
    }
    if (activeTabID === 'tab3'){
        tabValue = 2
    }
    if (activeTabID === 'tab4'){
        tabValue = 3
    }
    if (activeTabID === 'tab5'){
        tabValue = 4
    }
    if (activeTabID === 'tab6'){
        tabValue = 5
    }
    if (activeTabID === 'tab7'){
        tabValue = 6
    }

    const tabsContainer = d3.select('#tabs');

    tabsData.forEach((tab, i) => {
        // Create tab buttons
        tabsContainer.append('div')
            .attr('class', 'tab')
            .attr('data-tab', tab.id)
            .classed('active', i === tabValue) 
            .text(tab.label)
            .on('click', function() {
                const clickedTab = d3.select(this);
                d3.selectAll('.tab').classed('active', false);
                d3.selectAll('.tab-content').classed('active', false);
                clickedTab.classed('active', true);
                d3.select(`#${clickedTab.attr('data-tab')}-content`).classed('active', true);
    
                let tabValue = clickedTab.attr('data-tab')
                if (tabValue === 'tab1'){
                    removeT1Slider()
                    renderT1Slider(selectedOptions)
                    //depopulate T2dropdown here
                    removeT2Dropdown()
                    removeT3Dropdown()
                    removeT4Dropdown()
                    removeT5Slider()
                    removeT6Slider()
                    removeT7Dropdown()
                    removeCheckBoxes()
                    renderCheckboxes(selectedOptions)
                    removeLegendDivs()
                    renderLegendDivs()
                    removeVizDivs()
                    renderVizDivs(selectedOptions.length, 'tab1')
                    let sunburst = new Sunburst(35, 65, 'tab1', "sk__Bacteria__2", selectedOptions)
                    sunburst.getData(selectedOptions, 'tab1')
                }
                else if (tabValue === 'tab2'){
                    removeT1Slider()
                    //depopulate T2dropdown here
                    removeT2Dropdown()
                    renderT2Dropdown()
                    removeT3Dropdown()
                    removeT4Dropdown()
                    removeT5Slider()
                    removeT6Slider()
                    removeT7Dropdown()
                    removeCheckBoxes()
                    renderCheckboxes(selectedOptions)
                    removeLegendDivs()
                    renderLegendDivs()
                    removeVizDivs()
                    renderVizDivs(selectedOptions.length, 'tab2')
                    let sunburst = new Sunburst(35, 65, 'tab2', "sk__Bacteria__2", selectedOptions)
                    sunburst.getData(selectedOptions, 'tab2')
                }
                else if (tabValue === 'tab3'){
                    removeT1Slider()
                    //depopulate T2dropdown here
                    removeT2Dropdown()
                    removeT3Dropdown()
                    renderT3Dropdown()
                    removeT4Dropdown()
                    removeT5Slider()
                    removeT6Slider()
                    removeT7Dropdown()
                    removeCheckBoxes()
                    renderCheckboxes(selectedOptions)
                    removeLegendDivs()
                    renderLegendDivs()
                    removeVizDivs()
                    renderVizDivs(selectedOptions.length, 'tab3')
                    let sunburst = new Sunburst(35, 65, 'tab3', "sk__Bacteria__2", selectedOptions)
                    sunburst.getData(selectedOptions, 'tab3')
                }   
                else if (tabValue === 'tab4'){
                    removeT1Slider()
                    //depopulate T2dropdown here
                    removeT2Dropdown()
                    removeT3Dropdown()
                    removeT4Dropdown()
                    renderT4Dropdown()
                    removeT5Slider()
                    removeT6Slider()
                    removeT7Dropdown()
                    removeCheckBoxes()
                    renderCheckboxes(selectedOptions)
                    removeLegendDivs()
                    renderLegendDivs()
                    removeVizDivs()
                    renderVizDivs(selectedOptions.length, 'tab4')
                    let sunburst = new Sunburst(35, 65, 'tab4', "sk__Bacteria__2", selectedOptions)
                    sunburst.getData(selectedOptions, 'tab4')
                }   
                else if (tabValue === 'tab5'){
                    removeT1Slider()
                    //depopulate T2dropdown here
                    removeT2Dropdown()
                    removeT3Dropdown()
                    removeT4Dropdown()
                    removeT5Slider()
                    renderT5Slider(selectedOptions)
                    removeT6Slider()
                    removeT7Dropdown()
                    removeCheckBoxes()
                    renderCheckboxes(selectedOptions)
                    removeLegendDivs()
                    renderLegendDivs()
                    removeVizDivs()
                    renderVizDivs(selectedOptions.length, 'tab5')
                    let sunburst = new Sunburst(35, 65, 'tab5', "sk__Bacteria__2", selectedOptions)
                    sunburst.getData(selectedOptions, 'tab5')
                } 
                else if (tabValue === 'tab6'){
                    removeT1Slider()
                    //depopulate T2dropdown here
                    removeT2Dropdown()
                    removeT3Dropdown()
                    removeT4Dropdown()
                    removeT5Slider()
                    removeT6Slider()
                    renderT6Slider(selectedOptions)
                    removeT7Dropdown()
                    removeCheckBoxes()
                    renderCheckboxes(selectedOptions)
                    removeLegendDivs()
                    renderLegendDivs()
                    removeVizDivs()
                    renderVizDivs(selectedOptions.length, 'tab6')
                    let sunburst = new Sunburst(35, 65, 'tab6', "sk__Bacteria__2", selectedOptions)
                    sunburst.getData(selectedOptions, 'tab6')
                } 
                else if (tabValue === 'tab7'){
                    removeT1Slider()
                    //depopulate T2dropdown here
                    removeT2Dropdown()
                    removeT3Dropdown()
                    removeT4Dropdown()
                    removeT5Slider()
                    removeT6Slider()
                    removeT7Dropdown()
                    renderT7Dropdown()
                    removeCheckBoxes()
                    renderCheckboxes(selectedOptions)
                    removeLegendDivs()
                    renderLegendDivs()
                    removeVizDivs()
                    renderVizDivs(selectedOptions.length, 'tab7')
                    let sunburst = new Sunburst(35, 65, 'tab7', "sk__Bacteria__2", selectedOptions)
                    sunburst.getData(selectedOptions, 'tab7')
                } 
        });
    });
}


function removeT1Slider(){
    const T1slider = document.querySelector('.slider')
    T1slider.innerHTML = ''
}


function renderT1Slider(selectedOptions){
    let sliderSVG = d3.select('.slider').append("svg")
                    .attr("width", 1710)
                    .attr("height", 200)
                    .append("g")
                    .attr("transform", "translate(" + 0 + "," + 0 + ")");

    const x = d3.scaleLinear()
        .domain([0, 100])
        .range([100, 1610])
        .clamp(true);

    sliderSVG.append('text')
        .attr('class', 'slider-value')
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${x(35)}, ${160})`)
        .attr("font-size", "48")
        .text("35");

    sliderSVG.append('text')
        .attr('class', 'slider-value')
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${x(65)}, ${160})`)
        .attr("font-size", "48")
        .text("65");

    const slider = sliderSVG.append('g')
        .attr('class', 'slider')
        .attr('transform', `translate(0, ${100})`);

    slider.append('line')
        .attr('class', 'track')
        .attr('id', 'line1')
        .attr('x1', x.range()[0])
        .attr('x2', x.range()[1]);

    slider.append('line')
        .attr('class', 'track-inset')
        .attr('x1', x.range()[0])
        .attr('x2', x.range()[1]);

    slider.append('line')
        .attr('class', 'track-overlay')
        .attr('x1', x.range()[0])
        .attr('x2', x.range()[1])
        .call(d3.drag()
            .on('start.interrupt', () => slider.interrupt())
            .on('start drag', function(event) {
                const xPos = x.invert(event.x);
                if (draggingMin) {
                    minValue = Math.min(xPos, maxValue);
                    handleMin.attr('cx', x(minValue));
                } else {
                    maxValue = Math.max(xPos, minValue);
                    handleMax.attr('cx', x(maxValue));
                }
                // updateValues();
            })
            .on('end', () => {
                // draggingMin = false;
                updateValues();
            }));


    let minValue = 35;
    let maxValue = 65;
    let draggingMin = true;

    const handleMin = slider.append('circle')
        .attr('class', 'handle')
        .attr('r', 18)
        .attr('id', 'circle1')
        .attr('cx', x(minValue))
        .call(d3.drag()
            .on('start', () => draggingMin = true)
            .on('drag', function(event) {
                minValue = Math.min(x.invert(event.x), maxValue);
                d3.select(this).attr('cx', x(minValue));
            })
            .on('end', () => {
                draggingMin = false;
                updateValues();
            }));

    const handleMax = slider.append('circle')
        .attr('class', 'handle')
        .attr('r', 18)
        .attr('id', 'circle2')
        .attr('cx', x(maxValue))
        .call(d3.drag()
            .on('start', () => draggingMin = false)
            .on('drag', function(event) {
                maxValue = Math.max(x.invert(event.x), minValue);
                d3.select(this).attr('cx', x(maxValue));
            })
            .on('end', () => {
                draggingMin = false;
                updateValues();
            }));

    function updateValues() {
        sliderSVG.selectAll('.slider-value').remove();

        sliderSVG.append('text')
            .attr('class', 'slider-value')
            .attr('text-anchor', 'middle')
            .attr('transform', `translate(${x(minValue)}, ${160})`)
            .attr("font-size", "48")
            .text(minValue.toFixed(2));

        sliderSVG.append('text')
            .attr('class', 'slider-value')
            .attr('text-anchor', 'middle')
            .attr('transform', `translate(${x(maxValue)}, ${160})`)
            .attr("font-size", "48")
            .text(maxValue.toFixed(2));

        // console.log(Sunburst3.currentName)
        // if (Sunburst3.currentName === undefined){
        //     Sunburst3.currentName = 'sk__Bacteria__2'
        // }

        removeLegendDivs()
        renderLegendDivs()
        removeVizDivs()
        renderVizDivs(selectedOptions.length, 'tab1')
        let sunburst = new Sunburst(minValue, maxValue, 'tab1', Tab1Viz.Tab1VizRootName, selectedOptions)
        sunburst.getData(selectedOptions, 'tab1')
    }
}


function removeT2Dropdown(){
    const elements = document.querySelectorAll('.custom-select-T2');
    elements.forEach(element => {
        element.style.visibility = 'hidden';
    });
    document.getElementById('selectInput-T2').value = '';
}

function renderT2Dropdown(){
    const elements = document.querySelectorAll('.custom-select-T2');
    elements.forEach(element => {
        element.style.visibility = 'visible';
    });
    document.getElementById('selectInput-T2').placeholder = 'Search for Disease Indicators';
}

function removeT3Dropdown(){
    const elements = document.querySelectorAll('.custom-select-T3');
    elements.forEach(element => {
        element.style.visibility = 'hidden';
    });
    document.getElementById('selectInput-T3').value = '';
}

function renderT3Dropdown(){
    const elements = document.querySelectorAll('.custom-select-T3');
    elements.forEach(element => {
        element.style.visibility = 'visible';
    });
    document.getElementById('selectInput-T3').placeholder = 'Search for Actions';
}


function removeT4Dropdown(){
    const elements = document.querySelectorAll('.custom-select-T4');
    elements.forEach(element => {
        element.style.visibility = 'hidden';
    });
    document.getElementById('selectInput-T4').value = '';
}

function renderT4Dropdown(){
    const elements = document.querySelectorAll('.custom-select-T4');
    elements.forEach(element => {
        element.style.visibility = 'visible';
    });
    document.getElementById('selectInput-T4').placeholder = 'Search for Actions';
}


function removeT5Slider(){
    const T1slider = document.querySelector('.slider2')
    T1slider.innerHTML = ''
}


function renderT5Slider(selectedOptions){
    let sliderSVG = d3.select('.slider2').append("svg")
                    .attr("width", 1710)
                    .attr("height", 200)
                    .append("g")
                    .attr("transform", "translate(" + 0 + "," + 0 + ")");

    const x = d3.scaleLinear()
        .domain([0, 100])
        .range([100, 1610])
        .clamp(true);

    sliderSVG.append('text')
        .attr('class', 'slider-value')
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${x(35)}, ${160})`)
        .attr("font-size", "48")
        .text("35");

    sliderSVG.append('text')
        .attr('class', 'slider-value')
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${x(65)}, ${160})`)
        .attr("font-size", "48")
        .text("65");

    const slider = sliderSVG.append('g')
        .attr('class', 'slider2')
        .attr('transform', `translate(0, ${100})`);

    slider.append('line')
        .attr('class', 'track2')
        .attr('id', 'line2')
        .attr('x1', x.range()[0])
        .attr('x2', x.range()[1]);

    slider.append('line')
        .attr('class', 'track-inset2')
        .attr('x1', x.range()[0])
        .attr('x2', x.range()[1]);

    slider.append('line')
        .attr('class', 'track-overlay2')
        .attr('x1', x.range()[0])
        .attr('x2', x.range()[1])
        .call(d3.drag()
            .on('start.interrupt', () => slider.interrupt())
            .on('start drag', function(event) {
                const xPos = x.invert(event.x);
                if (draggingMin) {
                    minValue = Math.min(xPos, maxValue);
                    handleMin.attr('cx', x(minValue));
                } else {
                    maxValue = Math.max(xPos, minValue);
                    handleMax.attr('cx', x(maxValue));
                }
                // updateValues();
            })
            .on('end', () => {
                // draggingMin = false;
                updateValues();
            }));


    let minValue = 35;
    let maxValue = 65;
    let draggingMin = true;

    const handleMin = slider.append('circle')
        .attr('class', 'handle2')
        .attr('r', 18)
        .attr('id', 'circle3')
        .attr('cx', x(minValue))
        .call(d3.drag()
            .on('start', () => draggingMin = true)
            .on('drag', function(event) {
                minValue = Math.min(x.invert(event.x), maxValue);
                d3.select(this).attr('cx', x(minValue));
            })
            .on('end', () => {
                draggingMin = false;
                updateValues();
            }));

    const handleMax = slider.append('circle')
        .attr('class', 'handle2')
        .attr('r', 18)
        .attr('id', 'circle4')
        .attr('cx', x(maxValue))
        .call(d3.drag()
            .on('start', () => draggingMin = false)
            .on('drag', function(event) {
                maxValue = Math.max(x.invert(event.x), minValue);
                d3.select(this).attr('cx', x(maxValue));
            })
            .on('end', () => {
                draggingMin = false;
                updateValues();
            }));

    function updateValues() {
        sliderSVG.selectAll('.slider-value').remove();

        sliderSVG.append('text')
            .attr('class', 'slider-value')
            .attr('text-anchor', 'middle')
            .attr('transform', `translate(${x(minValue)}, ${160})`)
            .attr("font-size", "48")
            .text(minValue.toFixed(2));

        sliderSVG.append('text')
            .attr('class', 'slider-value')
            .attr('text-anchor', 'middle')
            .attr('transform', `translate(${x(maxValue)}, ${160})`)
            .attr("font-size", "48")
            .text(maxValue.toFixed(2));

        // console.log(Sunburst3.currentName)
        // if (Sunburst3.currentName === undefined){
        //     Sunburst3.currentName = 'sk__Bacteria__2'
        // }

        removeLegendDivs()
        renderLegendDivs()
        removeVizDivs()
        renderVizDivs(selectedOptions.length, 'tab5')
        let sunburst = new Sunburst(minValue, maxValue, 'tab5', Tab5Viz.Tab5VizRootName, selectedOptions)
        sunburst.getData(selectedOptions, 'tab5')
    }
}




function removeT6Slider(){
    const T1slider = document.querySelector('.slider3')
    T1slider.innerHTML = ''
}


function renderT6Slider(selectedOptions){
    let sliderSVG = d3.select('.slider3').append("svg")
                    .attr("width", 1710)
                    .attr("height", 200)
                    .append("g")
                    .attr("transform", "translate(" + 0 + "," + 0 + ")");

    const x = d3.scaleLinear()
        .domain([0, 100])
        .range([100, 1610])
        .clamp(true);

    sliderSVG.append('text')
        .attr('class', 'slider-value')
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${x(35)}, ${160})`)
        .attr("font-size", "48")
        .text("35");

    sliderSVG.append('text')
        .attr('class', 'slider-value')
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${x(65)}, ${160})`)
        .attr("font-size", "48")
        .text("65");

    const slider = sliderSVG.append('g')
        .attr('class', 'slider3')
        .attr('transform', `translate(0, ${100})`);

    slider.append('line')
        .attr('class', 'track3')
        .attr('id', 'line3')
        .attr('x1', x.range()[0])
        .attr('x2', x.range()[1]);

    slider.append('line')
        .attr('class', 'track-inset3')
        .attr('x1', x.range()[0])
        .attr('x2', x.range()[1]);

    slider.append('line')
        .attr('class', 'track-overlay3')
        .attr('x1', x.range()[0])
        .attr('x2', x.range()[1])
        .call(d3.drag()
            .on('start.interrupt', () => slider.interrupt())
            .on('start drag', function(event) {
                const xPos = x.invert(event.x);
                if (draggingMin) {
                    minValue = Math.min(xPos, maxValue);
                    handleMin.attr('cx', x(minValue));
                } else {
                    maxValue = Math.max(xPos, minValue);
                    handleMax.attr('cx', x(maxValue));
                }
                // updateValues();
            })
            .on('end', () => {
                // draggingMin = false;
                updateValues();
            }));


    let minValue = 35;
    let maxValue = 65;
    let draggingMin = true;

    const handleMin = slider.append('circle')
        .attr('class', 'handle3')
        .attr('r', 18)
        .attr('id', 'circle5')
        .attr('cx', x(minValue))
        .call(d3.drag()
            .on('start', () => draggingMin = true)
            .on('drag', function(event) {
                minValue = Math.min(x.invert(event.x), maxValue);
                d3.select(this).attr('cx', x(minValue));
            })
            .on('end', () => {
                draggingMin = false;
                updateValues();
            }));

    const handleMax = slider.append('circle')
        .attr('class', 'handle3')
        .attr('r', 18)
        .attr('id', 'circle6')
        .attr('cx', x(maxValue))
        .call(d3.drag()
            .on('start', () => draggingMin = false)
            .on('drag', function(event) {
                maxValue = Math.max(x.invert(event.x), minValue);
                d3.select(this).attr('cx', x(maxValue));
            })
            .on('end', () => {
                draggingMin = false;
                updateValues();
            }));

    function updateValues() {
        sliderSVG.selectAll('.slider-value').remove();

        sliderSVG.append('text')
            .attr('class', 'slider-value')
            .attr('text-anchor', 'middle')
            .attr('transform', `translate(${x(minValue)}, ${160})`)
            .attr("font-size", "48")
            .text(minValue.toFixed(2));

        sliderSVG.append('text')
            .attr('class', 'slider-value')
            .attr('text-anchor', 'middle')
            .attr('transform', `translate(${x(maxValue)}, ${160})`)
            .attr("font-size", "48")
            .text(maxValue.toFixed(2));

        // console.log(Sunburst3.currentName)
        // if (Sunburst3.currentName === undefined){
        //     Sunburst3.currentName = 'sk__Bacteria__2'
        // }

        removeLegendDivs()
        renderLegendDivs()
        removeVizDivs()
        renderVizDivs(selectedOptions.length, 'tab6')
        let sunburst = new Sunburst(minValue, maxValue, 'tab6', Tab6Viz.Tab6VizRootName, selectedOptions)
        sunburst.getData(selectedOptions, 'tab6')
    }
}


function removeT7Dropdown(){
    const elements = document.querySelectorAll('.custom-select-T5');
    elements.forEach(element => {
        element.style.visibility = 'hidden';
    });
    document.getElementById('selectInput-T5').value = '';
}

function renderT7Dropdown(){
    const elements = document.querySelectorAll('.custom-select-T5');
    elements.forEach(element => {
        element.style.visibility = 'visible';
    });
    document.getElementById('selectInput-T5').placeholder = 'Search for Disease Indicators';
}


function removeCheckBoxes(){
    const checkboxes = document.getElementById('checkboxes')
    checkboxes.innerHTML = ''
}

function checkboxClicked() {
    const selectElement = document.getElementById('multiSelect');
    const selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);

    let activeTab = document.querySelector('.tab.active');
    // console.log(activeTab.textContent);

    if (activeTab.textContent === 'All Organisms Heatmap -- Sunburst -- Sample Dependent'){
        let circle1 = document.getElementById('circle1');
        let cxValue1 = parseFloat(circle1.getAttribute('cx'))
        let circle2 = document.getElementById('circle2');
        let cxValue2 = parseFloat(circle2.getAttribute('cx'))
    
        let line1 = document.getElementById('line1');
        let linex1 = parseFloat(line1.getAttribute('x1'))
        let linex2 = parseFloat(line1.getAttribute('x2'))
    
        cxValue1 = (((cxValue1 - linex1)/(linex2 - linex1)) * 100).toFixed(2)
        cxValue2 = (((cxValue2 - linex1)/(linex2 - linex1)) * 100).toFixed(2)
        console.log('A:', typeof cxValue1)
        console.log('B:', typeof cxValue2)
        console.log(cxValue1)
        console.log(cxValue2)
        removeLegendDivs()
        renderLegendDivs()
        removeVizDivs()
        renderVizDivs(selectedOptions.length, 'tab1')
        let sunburst = new Sunburst(Number(cxValue1), Number(cxValue2), 'tab1', "sk__Bacteria__2", selectedOptions)
        sunburst.getData(selectedOptions, 'tab1')
    }
    else if (activeTab.textContent === 'Indicator Organisms for Diseases Heatmap -- Sunburst -- Sample Dependent'){
        removeLegendDivs()
        renderLegendDivs()
        removeVizDivs()
        renderVizDivs(selectedOptions.length, 'tab2')
        let sunburst = new Sunburst(35, 65, 'tab2', "sk__Bacteria__2", selectedOptions)
        sunburst.getData(selectedOptions, 'tab2')
    }
    else if (activeTab.textContent === 'Changes in Organism Abundance given Actions Heatmap -- Qualitative -- Sunburst -- Sample Dependent'){
        removeLegendDivs()
        renderLegendDivs()
        removeVizDivs()
        renderVizDivs(selectedOptions.length, 'tab3')
        let sunburst = new Sunburst(35, 65, 'tab3', "sk__Bacteria__2", selectedOptions)
        sunburst.getData(selectedOptions, 'tab3')
    }
    else if (activeTab.textContent === 'Changes in Organism Abundance given Actions Heatmap -- Quantitative -- Sunburst -- Sample Dependent'){
        removeLegendDivs()
        renderLegendDivs()
        removeVizDivs()
        renderVizDivs(selectedOptions.length, 'tab4')
        let sunburst = new Sunburst(35, 65, 'tab4', "sk__Bacteria__2", selectedOptions)
        sunburst.getData(selectedOptions, 'tab4')
    }
    else if (activeTab.textContent === 'Aggregate Organisms -- Sunburst -- All Samples Aggregated'){
        let circle1 = document.getElementById('circle3');
        let cxValue1 = parseFloat(circle1.getAttribute('cx'))
        let circle2 = document.getElementById('circle4');
        let cxValue2 = parseFloat(circle2.getAttribute('cx'))
    
        let line1 = document.getElementById('line2');
        let linex1 = parseFloat(line1.getAttribute('x1'))
        let linex2 = parseFloat(line1.getAttribute('x2'))
    
        cxValue1 = (((cxValue1 - linex1)/(linex2 - linex1)) * 100).toFixed(2)
        cxValue2 = (((cxValue2 - linex1)/(linex2 - linex1)) * 100).toFixed(2)
        removeLegendDivs()
        renderLegendDivs()
        removeVizDivs()
        renderVizDivs(selectedOptions.length, 'tab5')
        let sunburst = new Sunburst(Number(cxValue1), Number(cxValue2), 'tab5', "sk__Bacteria__2", selectedOptions)
        sunburst.getData(selectedOptions, 'tab5')
    }
    else if (activeTab.textContent === 'All Organisms Heatmap -- Circular Treemap -- Sample Dependent'){
        let circle1 = document.getElementById('circle5');
        let cxValue1 = parseFloat(circle1.getAttribute('cx'))
        let circle2 = document.getElementById('circle6');
        let cxValue2 = parseFloat(circle2.getAttribute('cx'))
    
        let line1 = document.getElementById('line3');
        let linex1 = parseFloat(line1.getAttribute('x1'))
        let linex2 = parseFloat(line1.getAttribute('x2'))
    
        cxValue1 = (((cxValue1 - linex1)/(linex2 - linex1)) * 100).toFixed(2)
        cxValue2 = (((cxValue2 - linex1)/(linex2 - linex1)) * 100).toFixed(2)
        removeLegendDivs()
        renderLegendDivs()
        removeVizDivs()
        renderVizDivs(selectedOptions.length, 'tab6')
        let sunburst = new Sunburst(Number(cxValue1), Number(cxValue2), 'tab6', "sk__Bacteria__2", selectedOptions)
        sunburst.getData(selectedOptions, 'tab6')
    }
    else if (activeTab.textContent === 'Indicator Organisms for Diseases Heatmap -- Circular Treemap -- Sample Dependent'){
        removeLegendDivs()
        renderLegendDivs()
        removeVizDivs()
        renderVizDivs(selectedOptions.length, 'tab7')
        let sunburst = new Sunburst(35, 65, 'tab7', "sk__Bacteria__2", selectedOptions)
        sunburst.getData(selectedOptions, 'tab7')
    }
}



function renderCheckboxes(){
    const data = [
        { label: 'Level 1(Phylum)', value: '1', x: 800, y: 450},
        { label: 'Level 2(Class)', value: '2', x: 800, y: 510},
        { label: 'Level 3(Order)', value: '3', x: 800, y: 570 },
        { label: 'Level 4(Family)', value: '4', x: 800, y: 630},
        { label: 'Level 5(Genus)', value: '5', x: 800, y: 690},
        { label: 'Level 6(Species)', value: '6', x: 800, y: 750},
        { label: 'Level 7(Strain)', value: '7', x: 800, y: 810}
    ];

    // Select the container where the checkboxes will be appended
    const container = d3.select('#checkboxes');

    // Create a checkbox for each data item with specified coordinates
    container.selectAll('div')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'checkbox-container')
        .style('left', d => `${d.x}px`)
        .style('top', d => `${d.y}px`)
        .each(function(d) {
            // Append the checkbox input
            d3.select(this)
                .append('input')
                .attr('type', 'checkbox')
                .attr('id', "checkbox"+d.value)
                .attr('value', d.value)
                .attr('checked', true)  // Set the checkbox to be checked by default
                .on('change', function() {
                    // Call a function whenever the checkbox is clicked
                    checkboxClicked();
                });

            // Append the label
            d3.select(this)
                .append('label')
                .attr('for', d.value)
                .text(d.label);
        });
}


function removeLegendDivs(){
    var container = document.getElementById('legendDiv');
    // Remove all child elements from the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function renderLegendDivs(){
    let container = document.getElementById('legendDiv');
    let newDiv = document.createElement('div');
    newDiv.classList.add('dynamic-div-x');
    newDiv.style.left = '0px';
    newDiv.style.top = '0px';
    newDiv.style.width = '2990px';
    newDiv.style.height = '410px';
    // newDiv.innerHTML = `Div Legend`;
    container.appendChild(newDiv);
}



function removeVizDivs(){
    // console.log('abcd')
    var container = document.getElementById('allDivs');
    // Remove all child elements from the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}



function renderVizDivs(numberOfDivs, currentTab){
    // console.log('abcdefgh')
    let container = document.getElementById('allDivs');
    let x = 0
    let y = 0
    if (currentTab === 'tab3' || currentTab === 'tab4'){
        numberOfDivs = numberOfDivs * 2
    }
    if (currentTab === 'tab5'){
        numberOfDivs = 6
    }
    for (let i = 0; i < numberOfDivs; i++) {
        // Create a new div element
        let newDiv = document.createElement('div');
        
        // Add class to the div
        newDiv.classList.add('dynamic-div-'+ i);
        
        // Generate random position, width, and height
        
        if (i >= 4 && i % 4 === 0){
            x = 0
            y = y + 1220
        }
        if (i % 4 !== 0){
            x = x + 1150
        }
        let width = 1150;
        let height = 1220;
        
        // Set styles for position, width, and height
        newDiv.style.position = 'absolute';
        newDiv.style.left = x + 'px';
        newDiv.style.top = y + 'px';
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        
        // Optionally set inner HTML
        // newDiv.innerHTML = `Div ${i}`;
        
        // Append the new div to the container
        container.appendChild(newDiv);

    }
}



