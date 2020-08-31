import _ from 'lodash';
import $ from 'jquery';

const dom = $('<div>');
dom.html(_.join(['c','s','xx']));
$('body').append(dom);