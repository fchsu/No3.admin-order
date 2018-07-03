<template>
  <div id="app">
    <nav class="navbar navbar-expand-md">
      <h1><router-link to="/HOME" class="navbar-brand" href="#">Shoptime</router-link></h1>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span><i class="fas fa-bars"></i></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/HOME" class="nav-link active">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ORDERS" class="nav-link">ORDERS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/PRODUCT" class="nav-link">PRODUCT</router-link>
          </li>
        </ul>
        <span class="nav-link">ADMIN</span>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import 'assets/css/Reset';
@import './assets/css/custom.scss';
@import '~bootstrap/scss/bootstrap';

#app {
  font-family: $font-family-base;
  .navbar {
    background: $black;
    padding: 0 4.1%;
    h1 {
      font-size: 1rem;
      margin: 15px 60px 15px 0;
    }
    h1 a {
      color: $white;
      font-size: $Titele-size; 
      font-family: $Titele-font, $font-family-base;
      font-weight: $Titele-weight;
      padding: 0.5rem 0;
      margin: 0;
      line-height: 1;
    }
    ul a {
      color: $gray-5;
      font-size: $Subtitele-2-size; 
      font-family: $Subtitele-2-font, $font-family-base;
      font-weight: $Subtitele-2-weight;
      padding: 23px 16px;
      margin: 0 4px;
    }
    ul a:hover {
      color: $white;
      padding: 23px 16px 19px 16px;
      border-bottom: 4px solid $white;
    }
    ul a.active {
      color: $white;
      padding: 23px 16px 19px 16px;
      border-bottom: 4px solid $white;
    }
    span {
      color: $white;
      font-size: $Subtitele-2-size; 
      font-family: $Subtitele-2-font, $font-family-base;
      font-weight: $Subtitele-2-weight;
      padding: 23px 0;
    }
    .navbar-toggler i {
      font-size: 2rem;
    }
  }
}
</style>
