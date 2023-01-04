import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

export default function (manifest) {
  manifest.addTemplate({
    name: 'Features-List-Items',
    fields: [
      { name: 'ItemTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'ItemDescription', type: CommonFieldTypes.RichText },
      { name: 'ItemImage', type: CommonFieldTypes.Image },
    ],
  });
}
