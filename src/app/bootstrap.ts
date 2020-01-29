import './polyfills';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import $ from 'jquery';


$(document).ready(() => {
    console.log('Index init');
    $('body').html('Index Ready');
});
