const searchInput = document.getElementById('searchInput');
const productGallery = document.querySelector('.product-gallery');

searchInput.addEventListener('input', function()
{
    const searchTerm = searchInput.value.toLowerCase();
    const images = productGallery.querySelectorAll('img');

    images.forEach(image => 
    {
        const category = image.getAttribute('data-category').toLowerCase();
        if (category.includes(searchTerm))
        {
            image.style.display = 'block';
        } 
        else
        {
            image.style.display = 'none';
        }
    });
});
