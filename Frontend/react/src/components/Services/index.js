import React from 'react';
import { RichText, Text, Link, Image } from '@sitecore-jss/sitecore-jss-react';
import '../../assets/CSS/animate.min.css';
import '../../assets/CSS/bootstrap.min.css';
import '../../assets/CSS/style.css';

const Services = (props) => {
  const backgroundColor = props?.params?.BackgroundColor ? props.params.BackgroundColor : '';
  const { ServiceList } = props.fields;
  return (
    <div className={backgroundColor}>
      <div className="container-xxl py-5 my-5">
        <div className="container py-5">
          <div className="text-center mx-auto fadeInUp" style={{ maxWidth: 500 + 'px' }}>
            <h1 className="display-6">
              <Text field={props.fields.ServiceTitle} />
            </h1>
            <p className="text-primary fs-5 mb-5">
              <Text field={props.fields.ServiceSubTitle} />
            </p>
            <RichText field={props.fields.ServiceDescription} />
          </div>
          <div className="row g-4">
            {ServiceList &&
              ServiceList.map((listItem, index) => (
                <div className="col-lg-4 col-md-6 fadeInUp" key={`ServiceList-${index}`}>
                  <div className="service-item bg-white p-5">
                    <Image className="img-fluid mb-4" field={listItem.fields.ItemImage} />
                    <h5 className="mb-3">
                      <Text field={listItem.fields.ItemTitle} />
                    </h5>
                    <RichText field={listItem.fields.ItemDescription} />
                    <Link field={listItem.fields.ItemLink} />
                    <i className="fa fa-arrow-right ms-2"></i>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
