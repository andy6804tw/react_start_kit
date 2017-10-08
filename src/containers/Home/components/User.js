import React, { Component } from 'react';
import PropTypes from 'prop-types';

    class User extends Component {
      // state = {
      //   componentName: 'User'
      // }
      static propTypes = {
        name: PropTypes.string,
        desc: PropTypes.string,
      }

      render() {
        // const { componentName } = this.state;
        const name = this.props.name;
        const desc = this.props.desc;
        return (
          <div>
            <p>component: {name}</p>
            <p>state has componentName: { desc }</p>
          </div>
        );
      }
    }

    export default User;
