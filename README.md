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

To trigger and configure the events data attibutes must be added to your markup.

- `data-click-events` - this triggers the script and is designed to work with `A`, `INPUT[type~="button radio checkbox"]`, `BUTTON`
OR you can put it on a whole div/form and it will track all the aforementioned elements within it
- `data-click-category="Header"` - this is the category GA will put it in
- `data-click-action="Navigation link clicked"` - this is the action GA will use

This will set up [Google Analytics event tracking](https://developers.google.com/analytics/devguides/collection/analyticsjs/events). The label property will be inferred from `element.value` or `element.innerText`
