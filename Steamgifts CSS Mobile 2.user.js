// ==UserScript==
// @name        Steamgifts CSS Mobile 2
// @author      KaXaSA
// @namespace   steamgiftmobilecss
// @include     *steamgifts.com*
// @version     1.0
// @downloadURL	https://github.com/KaXaSA/SteamgiftsMOB/blob/master/Steamgifts%20CSS%20Mobile%202.user.js
// @updateURL	https://github.com/KaXaSA/SteamgiftsMOB/blob/master/Steamgifts%20CSS%20Mobile%202.user.js
// @grant       GM_addStyle
// ==/UserScript==
//GM_addStyle(' .global__image-outer-wrap--avatar-small, global__image-inner-wrap { display: none !important; height: 0px; width: 0px; } .sidebar, .giveaway__username, .featured__container, .giveaway__column--group, .featured__column--group { display: none;  } .nav__left-container .nav__button-container:not(:first-child):not(:last-child) { display: none; } .page__outer-wrap { padding-top: 39px important; padding: 5px; } .sidebar__entry-custom { min-width: 65px; } .trade__search-container input, .table__column--width-fill, .trade-feedback-summary, .widget-container > div:not(.sidebar), .page__heading__breadcrumbs, .sidebar__search-input, .sidebar__navigation__item__underline, .nav__left-container, .pagination__results,   .footer__inner-wrap > div:first-child, .comment__summary, .poll__input-fill, .form__key-update input, .form__sync-data, .sidebar__shortcut-inner-wrap > *, .featured__summary, .featured__columns, .featured__table__column, .featured__table__row__left, .form__group__details, .giveaway__column--width-fill, .featured__column--width-fill, .giveaway__summary, .ui-datepicker-buttonpane button, .offers, .offer, .offer__about > div, .offer__about__h2 i { max-width: 753px !important; } .page__heading__button--green, .trade-feedback-icon--positive, .trade-feedback-summary--positive, .trade__search-submit, .giveaway__column--contributor-level--positive { display: none !important; } .page__inner-wrap, nav, .footer__inner-wrap, .featured__inner-wrap, .offer__inner-wrap { margin: 0 auto; max-width: 784px; } .widget-container > div:not(:first-child){ margin-left: 5px !important; padding-left: 5px !important; } .giveaway__heading__name {font: 700 15px "Open Sans",sans-serif; overflow: hidden; position: relative; text-overflow: ellipsis; white-space: nowrap; width: 287px;  color: #324862 !important; } .giveaway__heading__thin { font-size: 14px; font-weight: 300; letter-spacing: 1px; margin-left: 5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 55px; color: #6b7a8c; } .page__inner-wrap { max-width: 922px !important; } .giveaway_image_avatar, .featured_giveaway_image_avatar, .table_image_avatar, .table_image_avatar_missing { display: none !important; } .addgametolist.sidebar__button-style { width: 33px !important; overflow: hidden !important; } .autoentrysettingsdiv { left: 15px !important; margin-top: -200px !important; } .sidebar__entry-insert.sidebar__button-style { width: 42px; overflow: hidden; } #gamelist { width: 530px !important; } #gamelist span { width: 95px !important; } .gamename { overflow: hidden !important; width: 185px !important; white-space: nowrap !important; } #autoentrysettingsdiv { left: 15px !important; width: 530px !important; height: 580px !important; } #autoentrysettingsdiv table { white-space: nowrap; overflow: hidden !important; table-layout: fixed !important; border-collapse: collapse !important; } #addgamename { width: 188px !important; }  #addgamemaxentries { width: 26px !important; } #autoentrysettingsdiv button { height: 35px !important; margin-top: 10px !important; margin-right: 30px !important; width: 100px !important; font-size: 20px !important; } #autoentryordermethod { width: 208px !important; } #autoentrysettingsdiv td { overflow: hidden !important; text-overflow: ellipsis !important; } #addgame { margin-top: 15px !important; margin-bottom: 15px !important; font-size: 20px !important; } #autoentrygameul { font-size: 18px !important; } }');
GM_addStyle( " \
.global__image-outer-wrap--avatar-small, global__image-inner-wrap { display: none !important; height: 0px; width: 0px; } \
.sidebar, .giveaway__username, .featured__container, .giveaway__column--group, .featured__column--group { display: none; } \
.nav__left-container .nav__button-container:not(:first-child):not(:last-child) { display: none; } \
.page__outer-wrap { padding-top: 39px !important; padding: 5px; } \
.sidebar__entry-custom { min-width: 65px; } \
.trade__search-container input, .table__column--width-fill, .trade-feedback-summary, .widget-container > div:not(.sidebar), .page__heading__breadcrumbs, .sidebar__search-input, .sidebar__navigation__item__underline, .nav__left-container, .pagination__results, .footer__inner-wrap > div:first-child, .comment__summary, .poll__input-fill, .form__key-update input, .form__sync-data, .sidebar__shortcut-inner-wrap > *, .featured__summary, .featured__columns, .featured__table__column, .featured__table__row__left, .form__group__details, .giveaway__column--width-fill, .featured__column--width-fill, .giveaway__summary, .ui-datepicker-buttonpane button, .offers, .offer, .offer__about > div, .offer__about__h2 i { max-width: 753px !important; } \
.page__heading__button--green, .trade-feedback-icon--positive, .trade-feedback-summary--positive, .trade__search-submit, .giveaway__column--contributor-level--positive { display: none !important; } \
.page__inner-wrap, nav, .footer__inner-wrap, .featured__inner-wrap, .offer__inner-wrap { margin: 0 auto; max-width: 784px; } \
.widget-container > div:not(:first-child) { margin-left: 5px !important; padding-left: 5px !important; } \
.giveaway__heading__name { font: 700 15px; overflow: hidden !important; position: relative; text-overflow: ellipsis !important; white-space: nowrap !important; width: 287px; color: #324862 !important; } \
.giveaway__heading__thin { font-size: 14px; font-weight: 300; letter-spacing: 1px; margin-left: 5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 55px; color: #6b7a8c; } \
.page__inner-wrap { max-width: 922px !important; } \
.giveaway_image_avatar, .featured_giveaway_image_avatar, .table_image_avatar, .table_image_avatar_missing { display: none !important; } \
.addgametolist.sidebar__button-style { width: 33px !important; overflow: hidden !important; } \
.autoentrysettingsdiv { left: 15px !important; margin-top: -200px !important; } \
.sidebar__entry-insert.sidebar__button-style { width: 42px; overflow: hidden; } \
#gamelist { width: 530px !important; } \
#gamelist span { width: 95px !important; } \
.gamename { overflow: hidden !important; width: 185px !important; white-space: nowrap !important; } \
#autoentrysettingsdiv { left: 15px !important; width: 530px !important; height: 580px !important; } \
#autoentrysettingsdiv table { white-space: nowrap; overflow: hidden !important; table-layout: fixed !important; border-collapse: collapse !important; } \
#addgamename { width: 188px !important; } \
#addgamemaxentries { width: 26px !important; } \
#autoentrysettingsdiv button { height: 35px !important; margin-top: 10px !important; margin-right: 30px !important; width: 100px !important; font-size: 20px !important; } \
#autoentryordermethod { width: 208px !important; } \
#autoentrysettingsdiv td { overflow: hidden !important; text-overflow: ellipsis !important; } \
#addgame { margin-top: 15px !important; margin-bottom: 15px !important; font-size: 20px !important; } \
#autoentrygameul { font-size: 18px !important; } \
" );