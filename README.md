# PlayerTube


### About
This is an plugin to equalize the height of elements of columns with the same top offset.

This plugin is also available on [Bower](http://bower.io/).
```
bower install height-equalizer
```


### Dependences

- [JQuery](https://jquery.com)


### Usage

When you have columns side by side and the internal content are different, the height of the same are different. And when the columns have `display: block;` and `float: left;` in your css, the columns below taking different positions.

The [HeightEqualizer](https://github.com/sandroweb/height-equalizer) jQuery Plugin solve your problems with only 1 line.

[Click here to see sample without the plugin](https://codepen.io/sandroweb/pen/RZwYZK)

[Click here to see sample with the plugin](https://codepen.io/sandroweb/pen/PKodJK)

### Options

#### queryOfElements
Type: `array[string]`<br>
Default: `null`<br>

The array of querys of your elements you need refresh height.
```
$('.item').heightEqualizer({
	autoRefresh: true
});
```

#### autoRefresh
Is Opcional<br>
Type: `boolean`<br>
Default: `true`<br>

Set `true` to refresh the height of lines when resize window.
```
$('.item').heightEqualizer({
	autoRefresh: true
});
```

### Methods

#### refresh();

When you need tu refresh the height manually.
```
var equalizer = $('.item').heightEqualizer();
equalizer.refresh();
```

### Events

#### onReady
Type: `function`<br>
Default: `undefined`<br>

This method is called after the resize of lines.
```
$('.item').heightEqualizer({
	onResized: function () {
		console.log('was resized');
	}
});
```

### Doubts
[sandro@sandrosantos.art.br](mailto:sandro@sandrosantos.art.br)


### You thinked that useful? Want help me?
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
<input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - A maneira fácil e segura de enviar pagamentos online!">
<img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1">
</form>
