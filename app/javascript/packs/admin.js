/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker')
import Rails from 'rails-ujs';
Rails.start()
import * as ActiveStorage from "activestorage"
ActiveStorage.start()
var Turbolinks = require("turbolinks")
Turbolinks.start()
import "jquery";
import "bootstrap";
import '../src/application.scss';
import './view_helper';
import './pages';
import './nav'
import './products'
import './combineProductTable'
import './copyTableHeader'