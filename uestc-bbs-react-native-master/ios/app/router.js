import { Navigator } from 'react-native';
import Home from './components/Home';
import Login from './components/Login';
import ForumList from './components/ForumList';
import TopicDetail from './components/TopicDetail';
import ForumDetail from './components/ForumDetail';

let _navigator = null;

export default class Router {
  constructor(navigator) {
    _navigator = navigator;
  }

  _navigateTo(route) {
    let currentRoute = this.getCurrentRoute();
    if (route.id !== currentRoute.id) {
      _navigator.push(route);
    }
  }

  getCurrentRoute() {
    let routeList = _navigator.getCurrentRoutes();
    let currentRoute = routeList[routeList.length - 1];
    return currentRoute;
  }

  isCurrentRoute(routeId) {
    return routeId === this.getCurrentRoute().id;
  }

  pop() {
    _navigator.pop();
  }

  popToHome() {
    _navigator.popToTop();
  }

  toHome() {
    this._navigateTo({
      id: 'home',
      title: '最新',
      component: Home
    });
  }

  toLogin(config) {
    this._navigateTo({
      id: 'login',
      title: '登录',
      component: Login,
      sceneConfig: config.sceneConfig
    });
  }

  toForumList() {
    this._navigateTo({
      id: 'forumList',
      title: '版块',
      component: ForumList
    });
  }

  toTopic(topic) {
    this._navigateTo({
      id: 'topicDetail',
      title: topic.board_name,
      component: TopicDetail,
      passProps: topic
    });
  }

  toForum(forum) {
    this._navigateTo({
      id: 'forumDetail',
      title: forum.board_name,
      component: ForumDetail,
      passProps: forum
    });
  }
}
