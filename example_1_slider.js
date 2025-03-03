import PhotoSwipe from '/photoswipe/dist/photoswipe.esm.js';

document.addEventListener("DOMContentLoaded", () => {
  const featuredImage = document.getElementById("featured");
  const featuredLink = document.getElementById("featured-link");
  const thumbnails = document.querySelectorAll(".thumbnail");

  // Handle thumbnail clicks
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", (event) => {
      event.preventDefault();
      featuredImage.src = thumbnail.src;
      featuredLink.href = thumbnail.parentElement.href;
      featuredLink.setAttribute("data-pswp-width", thumbnail.parentElement.getAttribute("data-pswp-width"));
      featuredLink.setAttribute("data-pswp-height", thumbnail.parentElement.getAttribute("data-pswp-height"));
    });
  });

  // Initialize the PhotoSwipe lightbox
  let options = {
	dataSource : []
  }

  let source = null;
  thumbnails.forEach((thumbnail) => {
	let link = thumbnail.parentElement;  // Parent <a> tag
	
	source = {
		src: link.href,  // Use href for image source
		width: parseInt(link.getAttribute("data-pswp-width"), 10),
		height: parseInt(link.getAttribute("data-pswp-height"), 10),
	};
	options.dataSource.push(source)
	source= {};
	link = null;
});



  // Initialize and open the lightbox
//   PhotoSwipeLightbox.init();

  featuredLink.addEventListener("click", (event) => {
    event.preventDefault();
    options.index = 0; // defines start slide index
	const pswp = new PhotoSwipe(options);
	pswp.init();
  });

});
