export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Thank You Message</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root {
      --bg: #efe7f7; /* light purple */
      --text: #000000;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--text);
    }
    .message {
      max-width: 900px;
      padding: 32px;
      font-size: clamp(1.8rem, 3.2vw, 2.4rem);
      line-height: 1.6;
      text-align: center;
      font-weight: 700; /* bold */
    }
  </style>
</head>
<body>
  <div class="message">
    As the end of the campaign trail is here, I would like to take this time to thank all of my supporters.
    You have encouraged, listened, advised me, and shown kindness, patience and love!
    I am truly grateful for each and every one of you!
  </div>

</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};
