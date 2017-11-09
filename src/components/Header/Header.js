/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="bg-black lter header header-md navbar navbar-fixed-top-xs">
        <div className="navbar-header aside bg-success nav-xs">
          <a className="btn btn-link visible-xs" data-toggle="class:nav-off-screen,open" data-target="#nav,html"> <i className="icon-list"></i> </a>
          <a href="http://flatfull.com/themes/musik/index.html" className="navbar-brand text-lt"> <i className="icon-earphones"></i>
            <img src="./Musik _ Web Application_files/logo.png" alt="." className="hide" />
            <span className="hidden-nav-xs m-l-sm">Musik</span> </a> <a className="btn btn-link visible-xs" data-toggle="dropdown" data-target=".user"> <i className="icon-settings"></i> </a> </div>
        <ul className="nav navbar-nav hidden-xs">
          <li> <a href="http://flatfull.com/themes/musik/listen.html#nav,.navbar-header" data-toggle="class:nav-xs,nav-xs" className="text-muted"> <i className="fa fa-indent text"></i> <i className="fa fa-dedent text-active"></i> </a> </li>
        </ul>
        <div className="navbar-right ">
          <ul className="nav navbar-nav m-n hidden-xs nav-user user">
            <li className="hidden-xs">
              <a href="http://flatfull.com/themes/musik/listen.html#" className="dropdown-toggle lt" data-toggle="dropdown"> <i className="icon-bell"></i> <span className="badge badge-sm up bg-danger count" >4</span> </a>
              <section className="dropdown-menu aside-xl animated fadeInUp">
                <section className="panel bg-white">
                  <div className="panel-heading b-light bg-light"> <strong>You have <span className="count" >4</span> notifications</strong> </div>
                  <div className="list-group list-group-alt"><a href="#" className="media list-group-item" ><span className="pull-left thumb-sm text-center"><i className="fa fa-envelope-o fa-2x text-success"></i></span><span className="media-body block m-b-none">Sophi sent you a email<br /><small className="text-muted">1 minutes ago</small></span></a><a href="http://flatfull.com/themes/musik/listen.html#" className="media list-group-item" ><span className="pull-left thumb-sm text-center"><i className="fa fa-envelope-o fa-2x text-success"></i></span><span className="media-body block m-b-none">Sophi sent you a email<br /><small className="text-muted">1 minutes ago</small></span></a> <a href="http://flatfull.com/themes/musik/listen.html#" className="media list-group-item"> <span className="pull-left thumb-sm"> <img src="./Musik _ Web Application_files/a0.png" alt="..." className="img-circle" /> </span> <span className="media-body block m-b-none"> Use awesome animate.css<br /> <small className="text-muted">10 minutes ago</small> </span> </a> <a href="http://flatfull.com/themes/musik/listen.html#" className="media list-group-item"> <span className="media-body block m-b-none"> 1.0 initial released<br /> <small className="text-muted">1 hour ago</small> </span> </a> </div>
                  <div className="panel-footer text-sm"> <a href="http://flatfull.com/themes/musik/listen.html#" className="pull-right"><i className="fa fa-cog"></i></a> <a href="http://flatfull.com/themes/musik/listen.html#notes" data-toggle="class:show animated fadeInRight">See all the notifications</a> </div>
                </section>
              </section>
            </li>
            <li className="dropdown">
              <a href="http://flatfull.com/themes/musik/listen.html#" className="dropdown-toggle bg clear" data-toggle="dropdown"> <span className="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm"> <img src="./Musik _ Web Application_files/a0.png" alt="..." /> </span> John.Smith <b className="caret"></b> </a>
              <ul className="dropdown-menu animated fadeInRight">
                <li> <span className="arrow top"></span> <a href="http://flatfull.com/themes/musik/listen.html#">Settings</a> </li>
                <li> <a href="http://flatfull.com/themes/musik/profile.html">Profile</a> </li>
                <li> <a href="http://flatfull.com/themes/musik/listen.html#"> <span className="badge bg-danger pull-right">3</span> Notifications </a> </li>
                <li> <a href="http://flatfull.com/themes/musik/docs.html">Help</a> </li>
                <li className="divider"></li>
                <li> <a href="http://flatfull.com/themes/musik/modal.lockme.html" data-toggle="ajaxModal">Logout</a> </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default withStyles(s)(Header);
