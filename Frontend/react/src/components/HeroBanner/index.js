import React from 'react';
import { Text, RichText, Image, Link } from '@sitecore-jss/sitecore-jss-react';
import '../../assets/CSS/animate.min.css';
import '../../assets/CSS/bootstrap.min.css';
import '../../assets/CSS/style.css';

const HeroBanner = (props) => {
  const makeImageRight = props?.params?.ImageOnRight ? props.params.ImageOnRight : '';
  const backgroundColor = props?.params?.BackgroundColor ? props.params.BackgroundColor : '';
  return (
    <div className={backgroundColor}>
      <div className="container-fluid hero-header py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              className={
                makeImageRight === ''
                  ? 'col-lg-6 animated fadeIn'
                  : 'col-lg-6 animated fadeIn order-sm-2'
              }
            >
              <Image
                field={props.fields.BannerImage}
                className="img-fluid animated pulse infinite"
                style={{ animationDuration: 3 + 's' }}
                editable={true}
              />
            </div>
            <div
              className={
                makeImageRight === ''
                  ? 'col-lg-6 animated fadeIn'
                  : 'col-lg-6 animated fadeIn order-sm-1'
              }
            >
              <div className="h-100">
                <h1 className="display-6 mb-3 animated slideInDown">
                  <Text field={props.fields.BannerTitle} />
                </h1>
                <p className="text-primary fs-5 mb-4 animated slideInDown">
                  <Text field={props.fields.BannerSubTitle} />
                </p>
                <p className="animated slideInDown">
                  <RichText field={props.fields.BannerDescription} />
                </p>
                <Link
                  className="btn btn-primary py-3 px-4 animated slideInDown"
                  field={props.fields.BannerLink}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
