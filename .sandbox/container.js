

module.exports = {
  rules: [
    // Set up rules that you would like to test. modulePath is the name of your
    // extension (as defined in your extension.json) plus the path to the library module file.
    {
      name: 'Cookie Check Rule',
      events: [
        {
          modulePath: 'consent-platform\\src\\lib\\events\\pageLoad.js',
          settings: {}
        }
      ],
      conditions: [
        {
          modulePath: 'consent-platform\\src\\lib\\conditions\\noCookie.js',
          settings: {}
        }
      ],
      actions: [
        {
          modulePath: 'consent-platform\\src\\lib\\actions\\showBanner.js',
          settings: {}
        }
      ]
    },
    {
      name: 'Consent Rule',
      events: [
        {
          modulePath: 'consent-platform\\src\\lib\\events\\consentClick.js',
          settings: {}
        }
      ],
      conditions: [
        // {
        //   modulePath: 'consent-platform\\src\\lib\\conditions\\cookie.js',
        //   settings: {}
        // }
      ],
      actions: [
        {
          modulePath: 'consent-platform\\src\\lib\\actions\\setConsentCookie.js',
          settings: {}
        }
      ]
    }
    
  ],
  dataElements: {
    // Set up data elements that you would like to test. modulePath is the name of your
    // extension (as defined in your extension.json) plus the path to the library module file.

    // myDataElement: {
    //   modulePath: 'example-extension/src/lib/dataElements/javascriptVariable.js',
    //   settings: {}
    // }
  },
  extensions: {
    // Set up an extension configuration you would like to test. The key is the name of your
    // extension (as defined in your extension.json).

    'consent-platform': {
      displayName: 'Evidon Consent Platform',
      settings: {}
    }
  },
  propertySettings: {
    domains: [
      'adobe.com',
      'example.com'
    ],
    linkDelay: 100,
    euCookieName: 'sat_track',
    undefinedVarsReturnEmpty: false
  },
  buildInfo: {
    turbineVersion: '14.0.0',
    turbineBuildDate: '2016-07-01T18:10:34Z',
    buildDate: '2016-08-01T12:10:33Z',
    environment: 'development'
  },

};
