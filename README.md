# On scroll sprite animation with javascript
this simple on scroll animation is inspired from http://www.rleonardi.com/interactive-resume/ , then i try to apply on my Project http://ramerasanya.com/ .
you can contribute to make the animation more smooth, or maybe give more animation like roby leonardi do.
>Thanks to [@bepitulaz](https://github.com/bepitulaz) to help for making this plugin

### Basic Use
1. Add sprite-animation.js before your closing <body> tag, after jQuery.

  ```html
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
   <script src="js/sprite-animation.js"></script>
  ```
  
2. Initialize sprite-animation script in your script file or an inline script tag.
  
  ```javascript
  $('#nano-id').animatingSprite();
	```
	
3. Set up your HTML markup. make div wraper to set the character position.
  
 ```html
 <div id="nano-container">
    <div id="nano-id"></div>
 </div>   
 ```
4. make your own css positition. for this case, i want to make the character on center and bottom position, so i set my css to something like this:
```css
#nano-container {
	position:fixed;
	left:50%;
	bottom: 10px;
	z-index:9999;
}
/*dont forget to set css for main character animation*/

#nano-id{
	width:125px; /*set width for character*/
	height: 190px; /*set height for character*/
	background-image:url(../img/nano-slide.png); /*set main character image*/
	background-repeat: no-repeat; /*make sure that image didn't repeat*/
}
```
### When complete, your HTML should look something like:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Sprite Animation</title>
    <link href="css/style.css" rel="stylesheet">
  </head>
  
  <body id="test">
    <div id="nano-container">
  	  <div id="nano-id"></div>
    </div>
  	
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="../sprite-animation.js"></script>
    
    <script>
      $('#nano-id').animatingSprite();
    </script>
    
  </body>
</html>
```
*i set height to body to make it scroll



