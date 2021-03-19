'use strict';
<template>
  <header :class="[$style.header] [$style.center]">
        <div class="header__left">
            <a href="index.html"><img src="img/logo.svg" alt="logo"></a>
            <a href="#"><img class="header__search" src="img/search.svg" alt="search"></a>
        </div>
        <div class="header__right">
            <input id="switcher" type="checkbox">
            <label for="switcher"><img src="img/menu.svg" alt="menu"></label>
            <nav class="drop">
                <div class="header__box header__box_nav">
                    <img class="header__accoutn" src="img/account.svg" alt="account">
                    <a href="cart.html"><img src="img/cart.svg" alt="cart"></a>
                </div>
                
            </nav>
            <div class="header__box">
                <img class="header__accoutn" src="img/account.svg" alt="account">
                <img src="img/cart.svg" alt="cart">
                {{ quantity }}
            </div>
        </div>
    </header>
</template>

<script>
export default {
  props: {
    quantity: Number
  }
}
</script>

<style module>

.center {
  padding-left: calc(50% - 570px);
  padding-right: calc(50% - 570px); }

.header {
  background-color: #222;
  height: 75px;
  align-items: center;
  position: relative;
  display: flex;
  justify-content: space-between; }
  .header__search {
    margin-left: 41px; }
  .header__accoutn {
    margin-left: 34px;
    margin-right: 34px; }
  .header__right {
    display: flex;
    align-items: center; }
  .header__box {
    display: block; }
    .header__box_nav {
      display: none; }

#switcher {
  position: absolute;
  left: -99999999px;
  visibility: hidden; }
  #switcher:checked ~ .drop {
    opacity: 1;
    visibility: visible; }

.drop {
  background: #FFFFFF;
  box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
  padding: 37px 32px;
  position: absolute;
  top: 75px;
  right: 0;
  opacity: 0;
  visibility: hidden;
  width: 234px;
  height: 768px;
  transition: opacity 0.4s;
  z-index: 1; }
  .drop__box {
    margin-top: 20px; }
  .drop__name {
    font-weight: bold;
    color: #000000; }
  .drop__heading {
    color: #F16D7F;
    transition: all 0.3s; }
    .drop__heading:hover {
      text-decoration: underline; }
  .drop__ul {
    list-style-type: none;
    padding-left: 20px;
    margin-top: 12px; }
  .drop__link {
    color: #6F6E6E;
    margin-bottom: 11px;
    display: block;
    transition: all 0.3s; }
    .drop__link:hover {
      color: #F16D7F; }
</style>
