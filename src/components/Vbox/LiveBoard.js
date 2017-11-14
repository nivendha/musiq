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
import s from './LiveBoard.css';

class LiveBoard extends React.Component {

    render() {
        return (
            <ul className="list-group list-group-lg no-radius no-border no-bg m-t-n-xxs m-b-none auto">
                <li className="list-group-item">
                    <div className="pull-right m-l"> <a href="http://flatfull.com/themes/musik/listen.html#" className="m-r-sm"><i className="icon-cloud-download"></i></a> <a href="http://flatfull.com/themes/musik/listen.html#" className="m-r-sm"><i className="icon-plus"></i></a> <a href="http://flatfull.com/themes/musik/listen.html#"><i className="icon-close"></i></a> </div>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me m-r-sm pull-left"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <div className="clear text-ellipsis"> <span>E.T.M</span> <span className="text-muted"> -- 04:35</span> </div>
                </li>
                <li className="list-group-item">
                    <div className="pull-right m-l"> <a href="http://flatfull.com/themes/musik/listen.html#" className="m-r-sm"><i className="icon-cloud-download"></i></a> <a href="http://flatfull.com/themes/musik/listen.html#"><i className="icon-plus"></i></a> </div>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me m-r-sm pull-left"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <div className="clear text-ellipsis"> <span>Vestibulum id ligula porta</span> <span className="text-muted"> -- 04:15</span> </div>
                </li>
                <li className="list-group-item">
                    <div className="pull-right m-l"> <a href="http://flatfull.com/themes/musik/listen.html#" className="m-r-sm"><i className="icon-cloud-download"></i></a> <a href="http://flatfull.com/themes/musik/listen.html#"><i className="icon-plus"></i></a> </div>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me m-r-sm pull-left"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <div className="clear text-ellipsis"> <span>Praesent commodo cursus magna</span> <span className="text-muted"> -- 02:25</span> </div>
                </li>
                <li className="list-group-item">
                    <div className="pull-right m-l"> <a href="http://flatfull.com/themes/musik/listen.html#" className="m-r-sm"><i className="icon-cloud-download"></i></a> <a href="http://flatfull.com/themes/musik/listen.html#"><i className="icon-plus"></i></a> </div>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me m-r-sm pull-left"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <div className="clear text-ellipsis"> <span>Curabitur blandit tempus</span> <span className="text-muted"> -- 05:00</span> </div>
                </li>
                <li className="list-group-item">
                    <div className="pull-right m-l"> <a href="http://flatfull.com/themes/musik/listen.html#" className="m-r-sm"><i className="icon-cloud-download"></i></a> <a href="http://flatfull.com/themes/musik/listen.html#"><i className="icon-plus"></i></a> </div>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me m-r-sm pull-left"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <div className="clear text-ellipsis"> <span>Faucibus dolor auctor</span> <span className="text-muted"> -- 03:50</span> </div>
                </li>
                <li className="list-group-item">
                    <div className="pull-right m-l"> <a href="http://flatfull.com/themes/musik/listen.html#" className="m-r-sm"><i className="icon-cloud-download"></i></a> <a href="http://flatfull.com/themes/musik/listen.html#"><i className="icon-plus"></i></a> </div>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me m-r-sm pull-left"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <div className="clear text-ellipsis"> <span>Get lacinia odio sem nec elit cibus dolor auctor sed odio dui mollis ornare</span> <span className="text-muted"> -- 04:05</span> </div>
                </li>
                <li className="list-group-item">
                    <div className="pull-right m-l"> <a href="http://flatfull.com/themes/musik/listen.html#" className="m-r-sm"><i className="icon-cloud-download"></i></a> <a href="http://flatfull.com/themes/musik/listen.html#"><i className="icon-plus"></i></a> </div>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me m-r-sm pull-left"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <div className="clear text-ellipsis"> <span>Faucibus dolor auctor</span> <span className="text-muted"> -- 02:55</span> </div>
                </li>
                <li className="list-group-item">
                    <div className="pull-right m-l"> <a href="http://flatfull.com/themes/musik/listen.html#" className="m-r-sm"><i className="icon-cloud-download"></i></a> <a href="http://flatfull.com/themes/musik/listen.html#"><i className="icon-plus"></i></a> </div>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me m-r-sm pull-left"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <div className="clear text-ellipsis"> <span>Donec sed odio dui</span> <span className="text-muted"> -- 04:35</span> </div>
                </li>
                <li className="list-group-item">
                    <div className="pull-right m-l"> <a href="http://flatfull.com/themes/musik/listen.html#" className="m-r-sm"><i className="icon-cloud-download"></i></a> <a href="http://flatfull.com/themes/musik/listen.html#"><i className="icon-plus"></i></a> </div>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me m-r-sm pull-left"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <div className="clear text-ellipsis"> <span>Urna mollis ornare vel eu leo</span> <span className="text-muted"> -- 05:10</span> </div>
                </li>
                <li className="list-group-item">
                    <div className="pull-right m-l"> <a href="http://flatfull.com/themes/musik/listen.html#" className="m-r-sm"><i className="icon-cloud-download"></i></a> <a href="http://flatfull.com/themes/musik/listen.html#"><i className="icon-plus"></i></a> </div>
                    <a href="http://flatfull.com/themes/musik/listen.html#" className="jp-play-me m-r-sm pull-left"> <i className="icon-control-play text"></i> <i className="icon-control-pause text-active"></i> </a>
                    <div className="clear text-ellipsis"> <span>Vivamus sagittis lacus vel augue</span> <span className="text-muted"> -- 02:35</span> </div>
                </li>
            </ul>
        );
    }
}

export default withStyles(s)(LiveBoard);
