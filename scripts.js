document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.querySelector('.articles');

    // Fetch data from API
    fetch('https://coding-week-2024-api.onrender.com/api/data')
        .then(response => response.json())
        .then(data => {
            // Process and render blog data
            data.forEach(blog => {
                const article = document.createElement('article');
                article.classList.add('featured-article');

                // Create HTML structure for each blog item
                article.innerHTML = `
                    <img src="${blog.image}" alt="${blog.headline}">
                    <h2>${blog.headline}</h2>
                    <p>${blog.type} | ${blog.date}</p>
                    <p>${blog.content}</p>
                `;

                blogContainer.appendChild(article);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
