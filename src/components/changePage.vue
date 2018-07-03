<template>
  <div aria-label="Page navigation example" id="changePage">
    <ul class="pagination justify-content-end">
      <li class="page-item">
        <router-link to="/ORDERS" class="page-link custom-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </router-link>
      </li>
      <li class="page-item"><router-link to="/ORDERS" class="page-link custom-link">1</router-link></li>
      <li class="page-item active"><router-link to="/ORDERS" class="page-link custom-link">2</router-link></li>
      <li class="page-item"><router-link to="/ORDERS" class="page-link custom-link">3</router-link></li>
      <li class="page-item"><router-link to="/ORDERS" class="page-link custom-link">4</router-link></li>
      <li class="page-item"><router-link to="/ORDERS" class="page-link custom-link">5</router-link></li>
      <li class="page-item">
        <router-link to="/ORDERS" class="page-link custom-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'changePage',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/custom.scss';

#changePage {
  ul {
    margin-bottom: 10px;
  }
  .custom-link {
    width: 40px;
    height: 40px;
    background: $white;
    border: 1px solid $gray-1;
    text-align: center;
    color: $black;
    &:hover {
      background: $gray-3;
    }
  }
  .active .custom-link {
    background: $black;
    border: 1px solid $black;
    color: $white;
  }
}
</style>
