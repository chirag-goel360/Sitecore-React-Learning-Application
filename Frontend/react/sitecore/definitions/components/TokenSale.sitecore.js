import { CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools';
import packageJson from '../../../package.json';

export default function (manifest) {
  manifest.addComponent({
    name: 'TokenSale',
    icon: SitecoreIcon.Toolbox,
    params: [{ name: 'BackgroundColor', type: CommonFieldTypes.SingleLineText }],
    fields: [
      { name: 'TokenTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'TokenSubTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'TokenDescription', type: CommonFieldTypes.RichText },
      { name: 'DaysCount', type: CommonFieldTypes.Number },
      { name: 'HoursCount', type: CommonFieldTypes.Number },
      { name: 'MinutesCount', type: CommonFieldTypes.Number },
      { name: 'SecondsCount', type: CommonFieldTypes.Number },
      { name: 'ButtonLink', type: CommonFieldTypes.GeneralLink },
      {
        name: 'TokenImages',
        type: CommonFieldTypes.ContentList,
        source: `dataSource=/sitecore/content/${packageJson.config.appName}/Content/TokenImageList`,
      },
    ],
  });
}
