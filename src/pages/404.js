import React from "react";
import { Layout_404 } from '../components/layout';
import { Link } from "gatsby";

export default function _404() {
  return <Layout_404>
      <div className="main">
          <div className="body four-o-four">
          <p>
              There is nothing here. Please go <Link to="/">back</Link>.
          </p>
          </div>
        </div>
  </Layout_404>;
}
