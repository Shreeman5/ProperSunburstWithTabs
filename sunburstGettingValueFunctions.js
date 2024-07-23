function findTaxonCDFbyID(dataArray, taxonId) {
    const element = dataArray.find(item => item.ncbi_taxon_id === taxonId);
    return element ? element.CDF : null; // Return the taxon_rank_level if found, else return null
}


function findTaxonWeightbyID(dataArray, taxonId){
    for (let obj of dataArray) {
        if (obj.ncbi_taxon_id === taxonId) {
            return obj.weight;
        }
    }
    return null; // Return null if no match found
}

function findNamesbyID(dataArray, taxonId){
    for (let obj of dataArray) {
        if (obj.ncbi_taxon_id === taxonId) {
            return obj.action;
        }
    }
    return null; // Return null if no match found
}


function findTaxonNamebyID(dataArray, taxonId){
    for (let obj of dataArray) {
        if (obj.ncbi_taxon_id === taxonId) {
            // console.log('here')
            return obj.organism;
        }
    }
    return null; // Return null if no match found
}



function nameMapping(val){
    if (val === 's'){
        return "species"
    }
    else if (val === 'st'){
        return "strain"
    }
    else if (val === 'g'){
        return "genus"
    }
    else if (val === 'f'){
        return "family"
    }
    else if (val === 'o'){
        return "order"
    }
    else if (val === 'c'){
        return "class"
    }
    else if (val === 'p'){
        return "phylum"
    }
    else if (val === 'sk'){
        return "superkingdom"
    }
    return ""
}


function findChildByName(node, targetName) {
    // Base case: if the current node's name matches the target name, return the node
    if (node.name === targetName) {
        return node;
    }
    
    // If the node has children, search each child recursively
    if (node.children && node.children.length > 0) {
        for (let child of node.children) {
            let result = findChildByName(child, targetName);
            if (result) {
                return result;  // Return the found child
            }
        }
    }
    
    // If the child is not found, return null
    return null;
}

function findParentByName(node, targetName, parent = null) {
    // Base case: if the current node's name matches the target name, return the parent
    if (node.name === targetName) {
        return parent;
    }
    
    // If the node has children, search each child recursively
    if (node.children && node.children.length > 0) {
        for (let child of node.children) {
            let result = findParentByName(child, targetName, node);
            if (result) {
                return result;  // Return the found parent
            }
        }
    }
    
    // If the parent is not found, return null
    return null;
}


function findNodeValueByName(dataArray, taxonId) {
    const element = dataArray.find(item => item.ncbi_taxon_id === taxonId);
    return element ? element.relative_abundance : null; // Return the taxon_rank_level if found, else return null
}