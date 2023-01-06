import { CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools';

export default function (manifest) {
  manifest.addComponent({
    name: 'Facts',
    icon: SitecoreIcon.FilmCartridge,
    params: [
      { name: 'BackgroundColor', type: CommonFieldTypes.SingleLineText },
      { name: 'BootstrapGrid', type: CommonFieldTypes.SingleLineText },
    ],
    fields: [
      { name: 'FactImage', type: CommonFieldTypes.Image },
      { name: 'FactName', type: CommonFieldTypes.SingleLineText },
      { name: 'FactsCount', type: CommonFieldTypes.Number },
    ],
  });
}
