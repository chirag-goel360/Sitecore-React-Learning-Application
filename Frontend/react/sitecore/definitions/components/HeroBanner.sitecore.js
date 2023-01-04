import { CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools';

export default function (manifest) {
  manifest.addComponent({
    name: 'HeroBanner',
    icon: SitecoreIcon.DocumentTag,
    params: [
      { name: 'ImageOnRight', type: CommonFieldTypes.Checkbox },
      { name: 'BackgroundColor', type: CommonFieldTypes.SingleLineText },
    ],
    fields: [
      { name: 'BannerTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'BannerSubTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'BannerDescription', type: CommonFieldTypes.RichText },
      { name: 'BannerImage', type: CommonFieldTypes.Image },
      { name: 'BannerLink', type: CommonFieldTypes.GeneralLink },
    ],
  });
}
