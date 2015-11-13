# bs-checkbox
A simple jQuery plugin that replaces the default checkbox and uses Bootstrap glyphicon icons.

## Usage

Just wrap your checkboxes with a `<span>` element and call the plugin jQuery function.

```HTML
<div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
            <label>
                <span class="bs-checkbox">
                    <input type="checkbox" />
                </span>
                Remember me
            </label>
        </div>
    </div>
</div>
```

```js
jQuery('.bs-checkbox').bsCheckbox();
```

## Options



## Changelog


#### Version 0.2
Updated CSS and JS so it can be used outside form elements.

#### Version 0.1
Initial commit.
Use of Bootstrap's Glyphicons icons.