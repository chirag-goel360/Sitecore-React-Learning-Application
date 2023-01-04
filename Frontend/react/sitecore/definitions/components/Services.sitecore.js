import { CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools';
import packageJson from '../../../package.json';

export default function (manifest) {
  manifest.addComponent({
    name: 'Services',
    icon: SitecoreIcon.ServiceBell,
    params: [{ name: 'BackgroundColor', type: CommonFieldTypes.SingleLineText }],
    fields: [
      { name: 'ServiceTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'ServiceSubTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'ServiceDescription', type: CommonFieldTypes.RichText },
      {
        name: 'ServiceList',
        type: CommonFieldTypes.ContentList,
        source: `dataSource=/sitecore/content/${packageJson.config.appName}/Content/ServicesList`,
      },
    ],
  });
}
