import React from 'react';
import { Text, RichText, Link, Image } from '@sitecore-jss/sitecore-jss-react';
import '../../assets/CSS/animate.min.css';
import '../../assets/CSS/bootstrap.min.css';
import '../../assets/CSS/style.css';

const TokenSale = (props) => {
  const backgroundColor = props?.params?.BackgroundColor ? props.params.BackgroundColor : '';
  const { TokenImages } = props.fields;
  return (
    <div className={backgroundColor}>
      <div className="container-xxl py-5 my-5">
        <div className="container py-5">
          <div className="text-center mx-auto fadeInUp" style={{ maxWidth: 500 + 'px' }}>
            <h1 className="display-6">
              <Text field={props.fields.TokenTitle} />
            </h1>
            <p className="text-primary fs-5 mb-5">
              <Text field={props.fields.TokenSubTitle} />
            </p>
            <RichText field={props.fields.TokenDescription} />
          </div>
          <div className="row g-3">
            <div className="col-6 col-md-3 fadeIn">
              <div className="bg-white text-center p-3">
                <h1 className="mb-0">
                  <Text field={props.fields.DaysCount} />
                </h1>
                <span className="text-primary fs-5">Days</span>
              </div>
            </div>
            <div className="col-6 col-md-3 fadeIn">
              <div className="bg-white text-center p-3">
                <h1 className="mb-0">
                  <Text field={props.fields.HoursCount} />
                </h1>
                <span className="text-primary fs-5">Hours</span>
              </div>
            </div>
            <div className="col-6 col-md-3 fadeIn">
              <div className="bg-white text-center p-3">
                <h1 className="mb-0">
                  <Text field={props.fields.MinutesCount} />
                </h1>
                <span className="text-primary fs-5">Minutes</span>
              </div>
            </div>
            <div className="col-6 col-md-3 fadeIn">
              <div className="bg-white text-center p-3">
                <h1 className="mb-0">
                  <Text field={props.fields.SecondsCount} />
                </h1>
                <span className="text-primary fs-5">Seconds</span>
              </div>
            </div>
            <div className="col-12 text-center py-4">
              <Link className="btn btn-primary py-3 px-4" field={props.fields.ButtonLink} />
            </div>
            <div className="col-12 text-center">
              {TokenImages &&
                TokenImages.map((listItem, index) => (
                  <Image
                    className="img-fluid m-1"
                    key={`TokenImages-${index}`}
                    style={{ width: 50 + 'px' }}
                    field={listItem.fields.ItemImage}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenSale;
