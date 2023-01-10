import React from 'react';
import { Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';
import '../../assets/CSS/animate.min.css';
import '../../assets/CSS/bootstrap.min.css';
import '../../assets/CSS/style.css';

const Features = (props) => {
  const backgroundColor = props?.params?.BackgroundColor ? props.params.BackgroundColor : '';
  const { FeatureList } = props.fields;
  return (
    <div className={backgroundColor}>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto fadeInUp" style={{ maxWidth: 500 + 'px' }}>
            <h1 className="display-6">
              <Text field={props.fields.FeatureTitle} />
            </h1>
            <p className="text-primary fs-5 mb-5">
              <Text field={props.fields.FeatureSubTitle} />
            </p>
            <RichText field={props.fields.FeatureDescription} />
          </div>
          <div className="row g-5">
            {FeatureList &&
              FeatureList.map((listItem, index) => (
                <div className="col-lg-4 col-md-6 fadeInUp" key={`FeatureList-${index}`}>
                  <div className="d-flex align-items-start">
                    <Image className="img-fluid flex-shrink-0" field={listItem.fields.ItemImage} />
                    <div className="ps-4">
                      <h5 className="mb-3">
                        <Text field={listItem.fields.ItemTitle} />
                      </h5>
                      <RichText field={listItem.fields.ItemDescription} />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
