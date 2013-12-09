splitColumn
===========

A jQuery plugin to spread the elements within a DIV element across two columns to be able to simulate multi-column layouts. Only works on elements with a minimum of three elements as first level children.

How to apply
------------
Use this plugin on the containing element (preferably ```<div>```). It creates two extra layers between the containing element and the child elements.

Before:
```HTML
<div id="content">
    <h2>This is a heading</h2>
    <p>this is the first paragraph</p>
    <p>this is the second paragraph</p>
    <p>... and guess what? This is the third paragraph</p>
</div>
```
in your javascript file use the following lines of code:
```JavaScript
$("#content").splitColumn();
```
This will return:
```HTML
<div id="content">
    <div class="leftcol">
        <h2>This is a heading</h2>
        <p>this is the first paragraph</p>
    </div>
    <div class="rightcol">
        <p>this is the second paragraph</p>
        <p>... and guess what? This is the third paragraph</p>
    </div>
</div>
```
