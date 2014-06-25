ParallaxPro.js
==================

jQuery plugin for easy parallax on page elements.

Usage
==================
Include jQuery 1.7+ and jquery.parallaxpro.js in your layout and add class and data attributes like so:

```html
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script src="jquery.parallaxpro.js"></script>

<article
	style="height:500px;background:url('parallax_image.jpg') no-repeat;"
	class="parallaxpro"
	data-imgheight="750">
</article>
```

Container height is set to 500px. Image height is 750px.
In this case, the script will scroll the image 250px which is the difference.
