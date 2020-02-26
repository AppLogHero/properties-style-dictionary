{
  "source": ["**/*.json"],
  "platforms": {
    "scss": {
      "transformGroup": "scss",
      "buildPath": "build/scss/",
      "files": [{
        "destination": "_variables.scss",
        "format": "scss/variables"
      }]
    },
    "android": {
      "transformGroup": "android",
      "buildPath": "build/android/",
      "files": [{
        "destination": "font_dimens.xml",
        "format": "android/fontDimens"
      },{
        "destination": "colors.xml",
        "format": "android/colors"
      }]
    },
    "ios": {
      "transformGroup": "ios",
      "buildPath": "build/ios/",
      "files": [{
        "destination": "StyleDictionaryColor.h",
        "format": "ios/colors.h",
        "className": "StyleDictionaryColor",
        "type": "StyleDictionaryColorName",
        "filter": {
          "attributes": {
            "category": "color"
          }
        }
      },{
        "destination": "StyleDictionaryColor.m",
        "format": "ios/colors.m",
        "className": "StyleDictionaryColor",
        "type": "StyleDictionaryColorName",
        "filter": {
          "attributes": {
            "category": "color"
          }
        }
      },{
        "destination": "StyleDictionarySize.h",
        "format": "ios/static.h",
        "className": "StyleDictionarySize",
        "type": "float",
        "filter": {
          "attributes": {
            "category": "size"
          }
        }
      },{
        "destination": "StyleDictionarySize.m",
        "format": "ios/static.m",
        "className": "StyleDictionarySize",
        "type": "float",
        "filter": {
          "attributes": {
            "category": "size"
          }
        }
      }]
    },
    "ios-swift-separate-enums": {
      "transformGroup": "ios-swift-separate",
      "buildPath": "build/ios-swift/",
      "files": [{
        "destination": "StyleDictionaryColor.swift",
        "format": "ios-swift/enum.swift",
        "className": "StyleDictionaryColor",
        "filter": {
          "attributes": {
            "category": "color"
          }
        }
      },{
        "destination": "StyleDictionarySize.swift",
        "format": "ios-swift/enum.swift",
        "className": "StyleDictionarySize",
        "type": "float",
        "filter": {
          "attributes": {
            "category": "size"
          }
        }
      },{
        "destination": "Wording.swift",
        "format": "ios-swift/wording.swift",
        "className": "Wording",
        "type": "string",
        "filter": {
          "attributes": {
            "category": "wording"
          }
        }
      }]
    }
  }
}
