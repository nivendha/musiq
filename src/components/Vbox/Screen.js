/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Screen.css';

class Screen extends React.Component {

    render() {
        return (
            <div className="m-t-n-xxs item pos-rlt">
                <div className="top text-right">
                    <span className="musicbar bg-success bg-empty inline m-r-lg m-t" style={{ "width": 25, "height": 30 }}>
                        <span className="bar1 a3 lter"></span>
                        <span className="bar2 a5 lt"></span>
                        <span className="bar3 a1 bg"></span>
                        <span className="bar4 a4 dk"></span>
                        <span className="bar5 a2 dker"></span>
                    </span>
                </div>
                <div className="bottom gd bg-info wrapper-lg">
                    <span className="pull-right text-sm">101,400 <br />Followers</span>
                    <span className="h2 font-thin">Soph Ashe</span>
                </div>
                <img className="img-full" src={"./images/m43.jpg"}  alt="..." />
            </div>
        );
    }
}

export default withStyles(s)(Screen);
