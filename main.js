/*GENERAL*/

body {
	font-family: 'PT Serif', serif;
	font-size: 18px;
	line-height: 1.5;
}

img {
	max-width: 100%;
}

strong {
	font-weight: bold;
}

p {
	margin: 1.5em 0;
}

h1 {
	font-size: 2.5em; line-height: 1.2;
}

/*LAYOUT*/

#page-wrapper {
	padding: 0 45px;
	min-width: 45em;
}

#main {
	padding: 0 25px;
}

/*MAIN*/

@import "reset.css";
@import "general.css";
@import "layout.css";
@import "objects.css";
@import "utilities.css";

/*OBJECTS*/

/* Banner */
#page-header {
	text-align: center;
}
#page-header h1 {
	font-family: 'Old Standard TT', serif;
	font-weight: bold;
	text-transform: uppercase;
	font-size: 3.6em;
	line-height: 1;
	margin: .5em;
	word-spacing: .2em;
	text-shadow: 1px 1px 0 white, 2px 2px 0 rgba(0,0,0,.2);
}
#page-header h1 a {
	color: inherit;
	text-decoration: none;
}

/* Main Nav */
#page-header nav {
	border-top: 2px solid black;
	border-bottom: 1px solid black;
}
#page-header nav ul {
	float: left;
}
#page-header nav ul li {
	float: left;
}
#page-header nav ul li a {
	display: block;
	position: relative;
	z-index: 1;
	color: inherit;
	text-decoration: none;
	padding: 10px 0;
	margin-right: -1px;
}
#page-header nav ul li a span {
	border-right: 1px solid #ddd;
	padding: 0 24px 0 25px;
}
#page-header nav ul li:last-child a span {
	border: none;
	padding-right: 25px;
}
#page-header nav ul li a:hover {
	background: #f6f6f6;
}
#page-header nav ul li a:hover span {
	border: none;
	padding-right: 25px;
}
#page-header nav ul li.active a {
	z-index: 2;
	background: #666;
	color: #f6f666;
	padding-bottom: 12px;
	margin-bottom: -2px;
}
#page-header nav ul li.active a span {
	border: none;
	padding-right: 25px;
}


/* Slide Down */
#slide-down {
	display: none;
	overflow: hidden;
	background: #666;
	color: white;
	border-bottom: 1px solid black;
}
.drop {
	padding: 20px;
}

/* Main */
#main {
	margin-top: 20px;
}

/* User Nav */
#user-nav {
	position: relative;
	font-size: .75em;
	padding: 0 20px;
	background: #EEE;
	border-bottom: 1px solid #CCC;
}
#user-nav ul {
	float: right;
}
#user-nav ul li {
	float: left;
}
#user-nav ul li a {
	position: relative;
	z-index: 1;
	background: #EEE;
	display: block;
	color: inherit;
	text-decoration: none;
	padding: 10px 20px;
	border-left: 1px solid #CCC;
	border-right: 1px solid #CCC;
	margin-left: -1px;
}
#user-nav .badge {
	background: #f6f666;
	color: #000;
	font-weight: bold;
	border-radius: 5px;
	padding: 2px 7px;
	margin-left: 5px;
	box-shadow: inset 0  0 2px 0 rgba(0,0,0,.5);
}
#user-nav ul li.active a {
	z-index: 3;
	background: #fcfcfc;
	padding-bottom: 11px;
	margin-bottom: -1px;
	box-shadow: 0 -5px 5px rgba(0,0,0,.25);
}
#user-nav ul li .dropdown {
	display: none;
	position: absolute;
	z-index: 2;
	right: 20px;
	width: 33.33333%;
	background: #fcfcfc;
	border: 1px solid #CCC;
	box-shadow: 0 0 5px rgba(0,0,0,.25);
}
#user-nav ul li.active .dropdown {
	display: block;
}

/* Article Thumbs */
.article-thumbs {
	margin: 0 -5px;
}
.article-thumbs article {
	float: left;
	width: 16.66666%;
}
.article-thumbs article a {
	display: block;
	padding: 10px;
	color: inherit;
	text-decoration: none;
	-webkit-transition: background 300ms;
	-moz-transition: background 300ms;
	transition: background 300ms;
}
.article-thumbs article a:hover {
	background: rgba(255,255,255,.15);
}
.article-thumbs article a figure {
	border: 1px solid black;
	float: left;
}
.article-thumbs article a figure img {
	display: block;
}
.article-thumbs article a hgroup {
	clear: left;
	padding-top: 8px;
}
.article-thumbs article a h4 {
	color: #f6f666;
	font-size: .75em;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: .1em;
	margin-bottom: 2px;
}
.article-thumbs article a h2 {
}

/* Main Article */
article.main header h1 {
	font-size: 2.5em;
}

/*RESET*/

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/*UTILITIES*/

/* Clearfix - see http://nicolasgallagher.com/micro-clearfix-hack/ */
.group:before,
.group:after {
    content: " ";
    display: table;
}
.group:after {
    clear: both;
}
.group {
    *zoom: 1;
}





