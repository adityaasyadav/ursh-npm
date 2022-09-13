const fetch = require("cross-fetch");

class ursh {
   /**
    * Shorten A URL!
    */
   static add = async (url, custom) => {
      let response = await fetch("https://ursh.deta.dev/create", {
         method: "POST",
         body: JSON.stringify({ url, custom }),
         headers: {
            "Content-Type": "application/json"
         }
      });
      return await response.json();
   }
   /**
   * Get Details Of Shorten URL!
   */
   static get = async (code) => {
      let response = await fetch("https://ursh.deta.dev/data", {
         method: "POST",
         body: JSON.stringify({ code }),
         headers: {
            "Content-Type": "application/json"
         }
      });
      return await response.json();
   }
}

module.exports = ursh;
