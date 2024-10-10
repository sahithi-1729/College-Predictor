function displayGraph() {
    const category = document.getElementById('category').value;
    const graphContainer = document.getElementById('graph-container');
    
    graphContainer.innerHTML = '';

    if (category === '') {
        graphContainer.innerHTML = '<p>Please select a reservation category to display the graph.</p>';
        return;
    }

    const graphType = category === 'General' ? 'Linear Graph' : 'Box Plot';
    
    // Display graph type
    graphContainer.innerHTML = `<p>Displaying ${graphType} for the selected criteria.</p>`;
}
