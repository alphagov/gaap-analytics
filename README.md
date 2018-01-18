# GaaP analytics tools

Reusable scripts to make analytics easier

## Event tracking
The first reusable script is an event tracking tool. By including the script and
initialising it client-side teams can easily add event listeners to clickable elements.

**NB:** You must also be initialising Google analytics tracking for this script
to trigger.

To get started add the script as a dependency with npm

`npm i -S gaap-analytics`

Then require the script within your app
``` js
const analytics = require('gaap-analytics')

analytics.init()
```

If you’re not using NPM then you can include the prebuilt version within `build/`
``` html
<script src="gaap-analytics.min.js"/>
<script>
    window.GAAP.analytics.init()
</script>
```

To trigger and configure the events data attributes must be added to your markup.

- `data-click-events` - this triggers the script and is designed to work with `A`, `INPUT[type~="button radio checkbox"]`, `BUTTON`
OR you can put it on a whole div/form and it will track all the aforementioned elements within it
- `data-click-category="Header"` - this is the category GA will put it in
- `data-click-action="Navigation link clicked"` - this is the action GA will use

This will set up [Google Analytics event tracking](https://developers.google.com/analytics/devguides/collection/analyticsjs/events). The label property will be inferred from `element.value` or `element.innerText`

## Example

``` html
<nav data-click-events data-click-category="Header" data-click-action="Navigation link clicked">
  <ul>
    <li><a href="https://www.payments.service.gov.uk/#main" title="Learn more about GOV.UK Pay">About</a></li>
    <li><a href="https://govukpay-docs.cloudapps.digital" title="Read the GOV.UK Pay Documentation">Documentation</a></li>
    <li><a href="https://www.payments.service.gov.uk/support/" title="Contact the GOV.UK Pay Team">Support</a></li>
    <li><a href="/login" title="Log me in" id="login" class="content login active">Sign in</a></li>
  </ul>
</nav>
```

The data attibutes attached to the `<nav>` element will trigger the JS to create
`eventListeners` which will fire `ga()` events when clicked.

In the case the events will labelled up like so:

Category | Action | Label
---------|--------|------
Header | Navigation link clicked | About
Header | Navigation link clicked | Documentation
Header | Navigation link clicked | Support
Header | Navigation link clicked | Login


