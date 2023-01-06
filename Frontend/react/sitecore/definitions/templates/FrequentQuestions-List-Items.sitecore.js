import { CommonFieldTypes } from '@sitecore-jss/sitecore-jss-dev-tools';

export default function (manifest) {
  manifest.addTemplate({
    name: 'FrequentQuestions-List-Items',
    fields: [
      { name: 'Question', type: CommonFieldTypes.RichText },
      { name: 'Answer', type: CommonFieldTypes.RichText },
    ],
  });
}
