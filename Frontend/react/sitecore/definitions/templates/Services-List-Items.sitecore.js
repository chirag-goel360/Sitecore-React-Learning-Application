import { CommonFieldTypes } from '@sitecore-jss/sitecore-jss-dev-tools';

export default function (manifest) {
  manifest.addTemplate({
    name: 'Services-List-Items',
    fields: [
      { name: 'ItemTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'ItemDescription', type: CommonFieldTypes.RichText },
      { name: 'ItemImage', type: CommonFieldTypes.Image },
      { name: 'ItemLink', type: CommonFieldTypes.GeneralLink },
    ],
  });
}
