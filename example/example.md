# Sample Markdown Content

This is an *example* of **formatted** text with a [link](/doc) and a `code span`.

## Markdoc tags

### Callout

{% callout type="warning" %}
This is **formatted** text inside of a callout.
{% /callout %}

### Generic tag

{% foo bar="baz" %}
This is **formatted** text inside of a generic tag.
{% /foo %}

## Blockquote

> This is a **sample** blockquote

## Bulleted list

* This is a sample list
* This is another list item
    * This is an indented list item
        * This is a deeply nested item
    * This is another indented list item

## Fenced Code Block

```javascript
class Example {
  sampleFunction() {
    console.log("This is a code sample");
  }
}
```