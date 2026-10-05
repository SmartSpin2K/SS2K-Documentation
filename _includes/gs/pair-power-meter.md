{%- comment -%}Saved Power Meter pairing steps, as ordered-list items that continue the list they're included in (kramdown renumbers them). Params: device (markdown, what to tap in the scan list, required), note (markdown, what it's called in the list, optional). Include at column 0 directly under the list's previous item.{%- endcomment -%}
1. In the Companion App, on the **Device** screen, tap **Settings**, then **Bluetooth**.
1. Tap **Saved Power Meter**.
1. Tap **SCAN**. Scanning takes up to 20 seconds.
1. Tap {{ include.device }} in the list.{% if include.note %} {{ include.note }}{% endif %}
1. Tap **SAVE**.
