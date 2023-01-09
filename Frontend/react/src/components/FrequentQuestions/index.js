import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const FrequentQuestions = (props) => {
  const backgroundColor = props?.params?.BackgroundColor ? props.params.BackgroundColor : '';
  const { QuestionsList } = props.fields;
  return (
    <div className={backgroundColor}>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto fadeInUp" style={{ maxWidth: 500 + 'px' }}>
            <h1 className="display-6">
              <Text field={props.fields.FrequentQuestionsTitle} />
            </h1>
            <p className="text-primary fs-5 mb-5">
              <RichText field={props.fields.FrequentQuestionsDescription} />
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion" id="accordionExample">
                {QuestionsList &&
                  QuestionsList.map((listItem, index) => (
                    <div className="accordion-item fadeInUp" key={`QuestionsList-${index}`}>
                      <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          data-bs-target={`#collapse${index}`}
                          aria-controls={`collapse${index}`}
                        >
                          <RichText field={listItem.fields.Question} />
                        </button>
                      </h2>
                      <div
                        className="accordion-collapse collapse"
                        id={`collapse${index}`}
                        data-bs-parent="#accordionExample"
                        aria-labelledby={`heading${index}`}
                      >
                        <div className="accordion-body">
                          <RichText field={listItem.fields.Answer} />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestions;
