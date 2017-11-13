/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Screen from '../../components/Vbox/Screen.js';

async function action({ fetch }) {
  //   const resp = await fetch('/graphql', {
  //     body: JSON.stringify({
  //       query: '{news{title,link,content}}',
  //     }),
  //   });
  //   const { data } = await resp.json();
  //   if (!data || !data.news) throw new Error('Failed to load the news feed.');
  //   
  return {
    chunks: ['play'],
    title: 'Musiq',
    component: (
      <Layout>
        <section className="hbox stretch">
        <aside className="bg-black dk aside hidden-print nav-xs" id="nav"> <section className="vbox"></section> </aside>
        <section className="vbox">
          <section className="w-f-md">
            <section className="hbox stretch bg-black dker">
              <aside className="col-sm-5 no-padder" id="sidebar">
                <section className="vbox animated fadeInUp">
                  <section className="scrollable">
                    <Screen/>
                  </section>
                </section>
              </aside>
              <section className="col-sm-4 no-padder bg">
                <section className="vbox">
                  <section className="scrollable hover">
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
        </section>
      </Layout>
    ),
  };
}

export default action;
