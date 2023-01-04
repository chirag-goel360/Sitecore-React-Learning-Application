import { CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools';
import packageJson from '../../../package.json';

export default function (manifest) {
  manifest.addComponent({
    name: 'Features',
    icon: SitecoreIcon.Barrels,
    params: [{ name: 'BackgroundColor', type: CommonFieldTypes.SingleLineText }],
    fields: [
      { name: 'FeatureTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'FeatureSubTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'FeatureDescription', type: CommonFieldTypes.RichText },
      {
        name: 'FeatureList',
        type: CommonFieldTypes.ContentList,
        source: `dataSource=/sitecore/content/${packageJson.config.appName}/Content/FeaturesList`,
      },
    ],
  });
}
