module.exports = {
  rules: [
    // Set up rules that you would like to test. modulePath is the name of your
    // extension (as defined in your extension.json) plus the path to the library module file.
    {
      name: 'Load Script',
      events: [
        {
          modulePath: 'consent-platform/src/lib/events/pageLoad.js',
          settings: {}
        }
      ],
      conditions: [
      ],
      actions: [
        {
          modulePath: 'consent-platform/src/lib/actions/loadScript.js',
          settings: {}
        }
      ]
    }    
  ],
  dataElements: {
    // Set up data elements that you would like to test. modulePath is the name of your
    // extension (as defined in your extension.json) plus the path to the library module file.

    // myDataElement: {
    //   modulePath: 'example-extension\src\lib\dataElements\javascriptVariable.js',
    //   settings: {}
    // }
  },
  extensions: {
    // Set up an extension configuration you would like to test. The key is the name of your
    // extension (as defined in your extension.json).

    // known notice types:
    // 'in-page'  - (link) 
    // 'hover'  - (persistent) 
    // 'explicit' 
    // 'in-page implied'  - (link with implied)
    // 'hover implied'  - (persisten with implied)

    /* Settings for type link
       settings: {
        "companyId": 242,
        "noticeId": 16102,
        "name": "Audrey Hover button Only",
        "country": "United States",
        "language": "English",
        "type": "in-page",
        "cookieExpiration": "9"
      }
      
      Settings for type: persistent
      settings: {
        "companyId": 242,
        "noticeId": 8363,
        "name": "test"",
        "country": "United States",
        "language": "English",
        "type": "hover", 
        "cookieExpiration": "10"
      }

      Settings for type: explicit
      settings: {
        "companyId": 242,
        "noticeId": 16048,
        "name": "test",
        "country": "United States",
        "language": "English",
        "type": "explicit",
        "cookieExpiration": "11"
      }

      Settings for type: link with implied
      settings: {
        "companyId": 242,
        "noticeId": 16079,
        "name": "August 18 2017 JM 1",
        "country": "United States",
        "language": "English",
        "type": "in-page implied",
        "cookieExpiration": "12"
      }

      Settings for type: persistent with implied
      settings: {
        "companyId": 242,
        "noticeId": 16052,
        "name": "August 14th 2017 JM 1",
        "country": "United States",
        "language": "English",
        "type": "hover implied",
        "cookieExpiration": "13"
      }

    */

    'consent-platform': {
      displayName: 'Evidon Consent Platform',
      settings: {
        "companyId": 242,
        "noticeId": 16079,
        "name": "August 18 2017 JM 1",
        "country": "United States",
        "language": "English",
        "type": "in-page implied",
        "cookieExpiration": "5"
      },
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
