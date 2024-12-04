
import PhotoSwipeLightbox from "https://unpkg.com/photoswipe@5.2.2/dist/photoswipe-lightbox.esm.js";

document.addEventListener("DOMContentLoaded", () => {
	const featuredImage = document.getElementById("featured");
	const featuredLink = document.getElementById("featured-link");
	const thumbnails = document.querySelectorAll(".thumbnail");
  
	// Sync featured image src with its parent link
	thumbnails.forEach((thumbnail) => {
	  thumbnail.addEventListener("mouseover", (event) => {
		event.preventDefault(); // Prevent default click action
		featuredImage.src = thumbnail.src
    featuredLink.href = thumbnail.parentElement.href; // Update featured link href
		featuredLink.setAttribute("data-pswp-width", thumbnail.parentElement.getAttribute("data-pswp-width"));
		featuredLink.setAttribute("data-pswp-height", thumbnail.parentElement.getAttribute("data-pswp-height"));
	  });
	});

 // Update the featured image and its link when clicking thumbnails
	thumbnails.forEach((thumbnail) => {
		thumbnail.addEventListener("click", (event) => {
		event.preventDefault(); // Prevent default link behavior
		featuredImage.src = thumbnail.src; // Update featured image src
		featuredLink.href = thumbnail.parentElement.href; // Update featured link href
		featuredLink.setAttribute("data-pswp-width", thumbnail.parentElement.getAttribute("data-pswp-width"));
		featuredLink.setAttribute("data-pswp-height", thumbnail.parentElement.getAttribute("data-pswp-height"));
		});
	});

	// Initialize PhotoSwipe for both the gallery and featured link
	const lightbox = new PhotoSwipeLightbox({
		gallery: "#gallery", // Selector for gallery thumbnails
		children: "a", // Selector for thumbnail links
		pswpModule: () => import("https://unpkg.com/photoswipe"),
	});

  // Initialize lightboxes
  lightbox.init();
});
