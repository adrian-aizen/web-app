document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('postMovie');

    //Form submission event handler
    itemForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

    const movie_name = document.getElementById('movie_name').value;
    const movie_genre = document.getElementById('movie_genre').value;
    const movie_duration = document.getElementById('movie_duration').value;
    const movie_description = document.getElementById('movie_description').value;
        console.log({ movie_name, movie_genre, movie_duration, movie_description });
        // Send POST request to add a new item
        fetch('http://localhost:3000/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ movie_name, movie_genre, movie_duration, movie_description })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(movie => {
            // Clear the form
            movieForm.reset();
            console.log('Movie added:', movie);
        })
        .catch(error => {
            console.error('Error adding movie:', error);
            alert('Failed to add movie. Please try again.');
        });
    });
//Table even handler
    // Fetch Item and update the table
    function fetchItem() {
        fetch('http://localhost:3000/api/item')
        .then(response => response.json())
        .then(item => {
            // Clear the table first
            itemTable.innerHTML = '';

            // Populate the table with  data
            item.forEach(item => {
            const row = itemTable.insertRow();
            row.innerHTML = 
                `<td>${item.item_ID}</td>
                <td>${item.Name}</td>
                <td>${item.Color}</td>
                <td>${item.Type}</td>
                <td>${item.Time}</td>
                <td>${item.Quantity}</td>`
            ;
            });
        })
        .catch(error => console.error('Error fetching:', error));
    }
    fetchItem();
});
