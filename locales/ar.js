function loadLocaleMessages() {
    const locales = require.context("./ar", true, /[A-Za-z0-9-_,\s]+\.json$/i);
    let messages = {};
    locales.keys().forEach((key) => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i);
      if (matched && matched.length > 1) {
        const locale = matched[1];
        // messages[locale] = locales(key);
        messages = { ...messages, ...locales(key) };
      }
    });
    // console.log(messages, " ar messages");
  
    return messages;
  }
  const arMsgs = loadLocaleMessages();
  export default arMsgs;
  