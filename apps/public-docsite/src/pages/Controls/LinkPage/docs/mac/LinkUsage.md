The Link control is implemented as a stylized NSButton, and thus inherits all of the properties of it's parent class, including the Target-Action pattern

<DisplayToggle onText="Dark" offText="Light" label="Theme switcher">

<img className="off" src="https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002-cdn-prod_20200701.001/fabric-website/images/controls/macos/Link/link_light.png?text=LightMode" />
<img className="on" src="https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002-cdn-prod_20200701.001/fabric-website/images/controls/macos/Link/link_dark.png?text=DarkMode" />

### Default configuration

```Swift
// Given a title and URL, `Link` will by default open the URL in a web browser.
let link = Link(title: "Link", url: NSURL(string: "https://github.com/microsoft/fluentui-apple")!)
```

### Underline with mouse hover

```Swift
// Link can also display an underline when a mouse hovers over it with the optional property "showsUnderlineWhileMouseInside".
let link = Link(title: "Link  with hover effects", url: NSURL(string: "https://github.com/microsoft/fluentui-apple")!)
link.showsUnderlineWhileMouseInside = true
```

### Setting Target and Action

```Swift
// Because Link is a subclass of NSControl, we can override the target/action to perform a custom task
let link = Link(title: "Link with overridden Target/Action")
link.showsUnderlineWhileMouseInside = true
link.target = self
link.action = #selector(displayAlert)

@objc private func displayAlert() {
    let alert = NSAlert()
    alert.messageText = "Alert"
    alert.informativeText = "This is an alert generated by a Link with an overridden Target/Action"
    alert.runModal()
}
```

</DisplayToggle>
