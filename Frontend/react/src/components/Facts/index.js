import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const Facts = (props) => {
  const backgroundColor = props?.params?.BackgroundColor ? props.params.BackgroundColor : '';
  const grid = props?.params?.BootstrapGrid ? props.params.BootstrapGrid : 'col-lg-3 col-md-6';
  const { items } = props.fields;
  return (
    <div className={backgroundColor}>
      <div className="container-xxl py-5 my-5">
        <div className="container py-5">
          <div className="row g-5">
            {items &&
              items.map((listItem, index) => (
                <div className={grid} key={`items-${index}`}>
                  <div className="text-center fadeIn">
                    <Image field={listItem.fields.FactImage} className="img-fluid mb-4" />
                    <h1 className="display-4">
                      <Text field={listItem.fields.FactsCount} />
                    </h1>
                    <p className="fs-5 text-primary mb-0">
                      <Text field={listItem.fields.FactName} />
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
