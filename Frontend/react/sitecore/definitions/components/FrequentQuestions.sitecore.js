import { CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools';
import packageJson from '../../../package.json';

export default function (manifest) {
  manifest.addComponent({
    name: 'FrequentQuestions',
    icon: SitecoreIcon.Airplane2Starting,
    params: [{ name: 'BackgroundColor', type: CommonFieldTypes.SingleLineText }],
    fields: [
      { name: 'FrequentQuestionsTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'FrequentQuestionsDescription', type: CommonFieldTypes.RichText },
      {
        name: 'QuestionsList',
        type: CommonFieldTypes.ContentList,
        source: `dataSource=/sitecore/content/${packageJson.config.appName}/Content/FrequentQuestions`,
      },
    ],
  });
}
