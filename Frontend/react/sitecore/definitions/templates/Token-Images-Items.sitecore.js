import { CommonFieldTypes } from '@sitecore-jss/sitecore-jss-dev-tools';

export default function (manifest) {
  manifest.addTemplate({
    name: 'Token-Images-Items',
    fields: [{ name: 'ItemImage', type: CommonFieldTypes.Image }],
  });
}
