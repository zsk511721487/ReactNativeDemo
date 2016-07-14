import React, {
  View,
  Text,
  Component,
  Navigator
} from 'react-native';
import { connect } from 'react-redux/native';
import Router from '../router';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import Home from './Home';
import { getUserFromStorage } from '../actions/authorizeAction';
import { changeRoute } from '../actions/routeAction';

@connect(state => ({
  app: {
    route: state.route
  },
  list: {
    topicList: state.topicList,
    forumList: state.forumList
  },
  entity: {
    user: state.user,
    topicItem: state.topicItem,
    comment: state.comment
  }
}))
export default class Main extends Component {
  componentDidMount() {
    this.props.dispatch(getUserFromStorage());
  }

  configureScene(route) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }

    return Navigator.SceneConfigs.FloatFromRight;
  }

  renderScene(route, navigator) {
    if (!this.router) {
      this.router = new Router(navigator);

      // indicate the current route in side menu
      navigator.navigationContext.addListener('didfocus', e => {
        let route = e.data.route;
        this.props.dispatch(changeRoute(route));
      }.bind(this));
    }

    return <route.component {...this.props} router={this.router} passProps={route.passProps} />;
  }

  render() {
    const menu = <Menu {...this.props} router={this.router} />

    return (
      <SideMenu
        menu={menu}
        touchToClose={true}>
        <Navigator
          initialRoute={{
            id: 'home',
            title: '最新',
            component: Home
          }}
          configureScene={this.configureScene}
          renderScene={this.renderScene.bind(this)}
          ref='navigator' />
      </SideMenu>
    );
  }
}
