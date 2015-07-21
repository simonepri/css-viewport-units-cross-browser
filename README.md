## DESCRIPTION
This library is designed to allow the use of ``viewport unit`` also on browsers that do not interpret them.
Supports the use of all units ``(vh | vw | vmin | vmax)`` combined with all the properties of ``CSS3`` that supports them``(height | width | font-size | padding | etc. ..) ``.

To use it, simply add the following attribute to div interested:

``A-B="X"``

Where:
  * ``A`` can be one of the four viewport unit. ``(Vh | vw | vmin | vmax)``
  * ``B`` can be any property of ``CSS3`` supported. ``(Height | width | font-size | padding | etc ...)``
  * ``X`` can be any numerical value that indicates the percentage of the unit above. ``(10 | 20 | 50 | 100 | etc ...)``

Example:
```html
<div vh-height="100" vw-width="100">
  This div fills the screen both in width and in height.
</div>
```
To do this, the library uses the ``native support`` of ``viewport unit`` when the browser allows it, and when not available uses ``Javascript`` to adapt the units to the screen size.
Due to time, the ``Javascript`` code of the library uses some ``API`` from ``jQuery`` library (Any version of ``jQuery`` is supported).

``When and if I have time, I will write a version of the library in pure Javascript.``

## CUSTOMIZATION
Since the properties that support ``viewport unit`` are relatively many, I created a program in ``C++11`` that allows you to select the properties and the units that serves to your project to create a lighter ``ad-hoc`` version of the library.

To do this simply open the file ``"viewport-generator.cpp" `` and remove/add the ``property`` and the ``viewport unit`` from ``property`` and ``viewtype`` and ``recompile`` the source.
Are then generated four files ``"viewport.css"``, ``"viewport.js"``,``"viewport.min.css"`` and ``"viewport.min.js"`` ready to be used in your project.

## INCLUSION LIBRARY
Add the following code inside the ``<head></head>`` tag:
```html
<link rel="stylesheet" href="viewport.min.css">
<script src="viewport.min.js"></script>
```
or:
```html
<link rel="stylesheet" href="viewport.css">
<script src="viewport.js"></script>
```	
## EXAMPLE OF INCLUSION OF THE LIBRARY IN A PAGE
```html
<!DOCTYPE HTML>
<html class="no-vu">
<head>
	<title>Viewport Test</title>
	<link rel="stylesheet" href="./css/viewport.min.css">
	<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
	<script src="./js/viewport.min.js"></script>
</head>
<body style="margin: 0;padding: 0;border: 0;">
	<div vh-height="100" vw-width="100" style="background-color:#ff0000;">
		This red div fills the screen both in width and height.
	</div>
</body>
</html>
```
