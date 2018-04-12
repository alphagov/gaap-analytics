[![Build Status](https://travis-ci.org/alphagov/gaap-analytics.svg?branch=master)](https://travis-ci.org/alphagov/gaap-analytics)
[![npm](https://img.shields.io/npm/v/gaap-analytics.svg)](https://www.npmjs.com/package/gaap-analytics)

# GaaP analytics tools

A bundle of reusable scripts to make adding custom events and pageviews to Google analytics. So far we have:

- [Event tracking](#event-tracking)
- [Virtual pageviews](#virtual-pageviews)

## Event tracking
By including the script teams can easily add event listeners to clickable elements using just markup.

To get started add the script as a dependency with npm

`npm i -S gaap-analytics`

Then require the script within your app
``` js
const analytics = require('gaap-analytics')

analytics.eventTracking.init()
```

If you’re not using NPM then you can include the prebuilt version within [`build/`](https://github.com/alphagov/gaap-analytics/tree/master/build)
``` html
<script src="gaap-analytics.min.js"/>
<script>
    window.GAAP.analytics.eventTracking.init()
</script>
```

To trigger and configure the events, the following data attributes must be added to your markup.

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
    <li><a href="https://docs.payments.service.gov.uk" title="Read the GOV.UK Pay Documentation">Documentation</a></li>
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

## Virtual pageviews

Sometimes it’s useful to log something as a pageview rather than an event (if you’re making a funnel for a goal for instance). This script allows you to use data-attributes to make this happen, at the moment it only works for on form submit events. It can scrape your form a pick up values and post them as values to Google too.

To get started add the script as a dependency with npm

`npm i -S gaap-analytics`

Then require the script within your app
``` js
const analytics = require('gaap-analytics')

analytics.virtualPageview.init()
```

If you’re not using NPM then you can include the prebuilt version within [`build/`](https://github.com/alphagov/gaap-analytics/tree/master/build)
``` html
<script src="gaap-analytics.min.js"/>
<script>
    window.GAAP.analytics.virtualPageview.init()
</script>
```

To trigger and configure the virtual pageviews, the following data attributes must be added to your markup.

- `data-virtual-pageview="page/slug/name"` - this triggers the script to run currently should only be added to a `form`
- `data-parameters="dimension1:service-name"` you can add custom parameters to your virtual pageview, such as dimensions and metrics.
- The dimension can be static or can be a `name` attribute of an element from your for.
For multiple parameters, space separate them like `data-parameters="dimension1:service-name metric1:total-amount"`

Markup would look like this

``` html
  <form data-validate="true"data-virtual-pageview="/page/slug/name" data-dimensions="dimension1:service-name">
    <input id="service-name" name="service-name" type="text" value="">
    <button type="submit">Add service</button>
  </form>
```
