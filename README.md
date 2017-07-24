# Height Equalizer


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
[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ENGJQ5TBNN7B4&lc=GB&item_name=Sandro%20Santos&item_number=height%2dequalizer&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)