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
import s from './Deck.css';

class Deck extends React.Component {

    render() {
        return (
            <ul className="list-group list-group-lg no-bg auto m-b-none m-t-n-xxs">
                <li className="list-group-item clearfix">
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me pull-right m-t-sm m-l text-md"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="pull-left thumb-sm m-r"> <img src="./images/m0.jpg" alt="..." /> </a>
                    <a className="clear" href="http://flatfull.com/themes/musik/listen.html#"> <span className="block text-ellipsis">Little Town</span> <small className="text-muted">by Soph Ashe</small> </a>
                </li>
                <li className="list-group-item clearfix">
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me pull-right m-t-sm m-l text-md"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="pull-left thumb-sm m-r"> <img src="./images/a1.png" alt="..." /> </a>
                    <a className="clear" href="http://flatfull.com/themes/musik/listen.html#"> <span className="block text-ellipsis">Get lacinia odio sem nec elit</span> <small className="text-muted">by Filex</small> </a>
                </li>
                <li className="list-group-item clearfix">
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me pull-right m-t-sm m-l text-md"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="pull-left thumb-sm m-r"> <img src="./images/a2.png" alt="..." /> </a>
                    <a className="clear" href="http://flatfull.com/themes/musik/listen.html#"> <span className="block text-ellipsis">Donec sed odio du</span> <small className="text-muted">by Dan Doorack</small> </a>
                </li>
                <li className="list-group-item clearfix">
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me pull-right m-t-sm m-l text-md"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="pull-left thumb-sm m-r"> <img src="./images/a3.png" alt="..." /> </a>
                    <a className="clear" href="http://flatfull.com/themes/musik/listen.html#"> <span className="block text-ellipsis">Curabitur blandit tempu</span> <small className="text-muted">by Foxes</small> </a>
                </li>
                <li className="list-group-item clearfix">
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me pull-right m-t-sm m-l text-md"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="pull-left thumb-sm m-r"> <img src="./images/a4.png" alt="..." /> </a>
                    <a className="clear" href="http://flatfull.com/themes/musik/listen.html#"> <span className="block text-ellipsis">Urna mollis ornare vel eu leo</span> <small className="text-muted">by Chris Fox</small> </a>
                </li>
                <li className="list-group-item clearfix">
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me pull-right m-t-sm m-l text-md"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="pull-left thumb-sm m-r"> <img src="./images/a5.png" alt="..." /> </a>
                    <a className="clear" href="http://flatfull.com/themes/musik/listen.html#"> <span className="block text-ellipsis">Faucibus dolor auctor</span> <small className="text-muted">by Lauren Taylor</small> </a>
                </li>
                <li className="list-group-item clearfix">
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me pull-right m-t-sm m-l text-md"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="pull-left thumb-sm m-r"> <img src="./images/a6.png" alt="..." /> </a>
                    <a className="clear" href="http://flatfull.com/themes/musik/listen.html#"> <span className="block text-ellipsis">Praesent commodo cursus magn</span> <small className="text-muted">by Chris Fox</small> </a>
                </li>
                <li className="list-group-item clearfix">
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me pull-right m-t-sm m-l text-md"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="pull-left thumb-sm m-r"> <img src="./images/a7.png" alt="..." /> </a>
                    <a className="clear" href="http://flatfull.com/themes/musik/listen.html#"> <span className="block text-ellipsis">Vestibulum id</span> <small className="text-muted">by Milian</small> </a>
                </li>
                <li className="list-group-item clearfix">
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me pull-right m-t-sm m-l text-md"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="pull-left thumb-sm m-r"> <img src="./images/a8.png" alt="..." /> </a>
                    <a className="clear" href="http://flatfull.com/themes/musik/listen.html#"> <span className="block text-ellipsis">Blandit tempu</span> <small className="text-muted">by Amanda Conlan</small> </a>
                </li>
                <li className="list-group-item clearfix">
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me pull-right m-t-sm m-l text-md"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="pull-left thumb-sm m-r"> <img src="./images/a9.png" alt="..." /> </a>
                    <a className="clear" href="http://flatfull.com/themes/musik/listen.html#"> <span className="block text-ellipsis">Vestibulum ullamcorpe quis malesuada augue mco rpe</span> <small className="text-muted">by Dan Doorack</small> </a>
                </li>
                <li className="list-group-item clearfix">
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me pull-right m-t-sm m-l text-md"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="pull-left thumb-sm m-r"> <img src="./images/a10.png" alt="..." /> </a>
                    <a className="clear" href="http://flatfull.com/themes/musik/listen.html#"> <span className="block text-ellipsis">Natis ipsum ac feugiat</span> <small className="text-muted">by Hamburg</small> </a>
                </li>
                <li className="list-group-item clearfix">
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me pull-right m-t-sm m-l text-md"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="pull-left thumb-sm m-r"> <img src="./images/a0.png" alt="..." /> </a>
                    <a className="clear" href="http://flatfull.com/themes/musik/listen.html#"> <span className="block text-ellipsis">Sec condimentum au</span> <small className="text-muted">by Amanda Conlan</small> </a>
                </li>
            </ul>

        );
    }
}

export default withStyles(s)(Deck);
