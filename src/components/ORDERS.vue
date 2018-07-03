<template>
  <div class="background">
    <div class="container orders">
      <div class="select-bar row">
        <div class="col-12 d-flex align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-box d-flex align-items-center"><span class="select"></span></button>
            <button type="button" class="btn dropdown-toggle dropdown-toggle-split select-triangle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu box-menu menu-style">
              <a class="dropdown-item active" href="#">Select All</a>
              <a class="dropdown-item" href="#">Unpaid</a>
              <a class="dropdown-item" href="#">Paid</a>
              <a class="dropdown-item" href="#">Shipping</a>
              <a class="dropdown-item" href="#">Done</a>
            </div>
          </div>
          <div class="dropdown ml-2 mr-auto">
            <button class="btn tag" type="button" id="dropdownTagButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-tags"></i>
            </button>
            <div class="dropdown-menu tag-menu menu-style" aria-labelledby="dropdownTagButton">
              <h6 class="dropdown-header">Change Status to…</h6>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item active" href="#">Unpaid</a>
              <a class="dropdown-item" href="#">Paid</a>
              <a class="dropdown-item" href="#">Shipping</a>
              <a class="dropdown-item" href="#">Done</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="btn btn-edit dropdown-toggle" type="button" id="dropdownStatusButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              EDIT SECTION
            </button>
            <div class="dropdown-menu edit-menu menu-style" aria-labelledby="dropdownStatusButton">
              <a class="dropdown-item d-flex align-items-center" href="#"><span class="select mr-2"></span>Order ID</a>
              <a class="dropdown-item d-flex align-items-center" href="#"><span class="select mr-2"></span>Customer</a>
              <a class="dropdown-item d-flex align-items-center" href="#"><span class="select mr-2"></span>Product List</a>
              <a class="dropdown-item d-flex align-items-center" href="#"><span class="select mr-2"></span>Total</a>
              <a class="dropdown-item d-flex align-items-center" href="#"><span class="select mr-2"></span>Add to Cart</a>
              <a class="dropdown-item d-flex align-items-center" href="#"><span class="select mr-2"></span>Check-out</a>
              <a class="dropdown-item d-flex align-items-center" href="#"><span class="select mr-2"></span>Address</a>
              <a class="dropdown-item d-flex align-items-center" href="#"><span class="select mr-2"></span>Phone</a>
              <a class="dropdown-item d-flex align-items-center" href="#"><span class="select mr-2"></span>Emaill</a>
              <a class="dropdown-item d-flex align-items-center" href="#"><span class="select mr-2"></span>Status</a>
            </div>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Customer</th>
              <th scope="col">Product List</th>
              <th scope="col">Total</th>
              <th scope="col">Add to Cart</th>
              <th scope="col">Check-out</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Emaill</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Ian Medina</td>
              <td>
                <div class="product-list">
                  <div>Vestibulum.</div>
                  <div class="price-num d-flex mr-2">
                    <span class="price mr-auto">$<span>1,400</span></span>
                    <span>1</span>
                  </div>
                </div>
                <div class="product-list">
                  <div>Fusce vehicu.</div>
                  <div class="price-num d-flex mr-2">
                    <span class="price mr-auto">$<span>800</span></span>
                    <span>1</span>
                  </div>
                </div>
              </td>
              <td class="price-total">
                <span>$<span>2,200</span></span>
              </td>
              <td class="time-date">2018/6/8 13:39</td>
              <td class="time-date">2018/6/8 20:23</td>
              <td>386 Windler Drives Apt. 358</td>
              <td>--</td>
              <td>--</td>
              <td>
                <div class="dropdown">
                  <button class="btn dropdown-toggle status-unpaid btn-status-style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    UNPAID
                  </button>
                  <div class="dropdown-menu dropdown-menu-right status-menu-style" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item active" href="#">Unpaid</a>
                    <a class="dropdown-item" href="#">Paid</a>
                    <a class="dropdown-item" href="#">Shipping</a>
                    <a class="dropdown-item" href="#">Done</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Ian Medina</td>
              <td>
                <div class="product-list">
                  <div>Vestibulum.</div>
                  <div class="price-num d-flex mr-2">
                    <span class="price mr-auto">$<span>1,400</span></span>
                    <span>1</span>
                  </div>
                </div>
                <div class="product-list">
                  <div>Fusce vehicu.</div>
                  <div class="price-num d-flex mr-2">
                    <span class="price mr-auto">$<span>800</span></span>
                    <span>1</span>
                  </div>
                </div>
              </td>
              <td class="price-total">
                <span>$<span>2,200</span></span>
              </td>
              <td class="time-date">2018/6/8 13:39</td>
              <td class="time-date">2018/6/8 20:23</td>
              <td>386 Windler Drives Apt. 358</td>
              <td>--</td>
              <td>--</td>
              <td>
                <div class="dropdown">
                  <button class="btn dropdown-toggle status-paid btn-status-style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    PAID
                  </button>
                  <div class="dropdown-menu dropdown-menu-right status-menu-style" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Unpaid</a>
                    <a class="dropdown-item active" href="#">Paid</a>
                    <a class="dropdown-item" href="#">Shipping</a>
                    <a class="dropdown-item" href="#">Done</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Ian Medina</td>
              <td>
                <div class="product-list">
                  <div>Vestibulum.</div>
                  <div class="price-num d-flex">
                    <span class="price mr-auto mr-2">$<span>1,400</span></span>
                    <span>1</span>
                  </div>
                </div>
                <div class="product-list">
                  <div>Fusce vehicu.</div>
                  <div class="price-num d-flex mr-2">
                    <span class="price mr-auto">$<span>800</span></span>
                    <span>1</span>
                  </div>
                </div>
              </td>
              <td class="price-total">
                <span>$<span>2,200</span></span>
              </td>
              <td class="time-date">2018/6/8 13:39</td>
              <td class="time-date">2018/6/8 20:23</td>
              <td>386 Windler Drives Apt. 358</td>
              <td>--</td>
              <td>--</td>
              <td>
                <div class="dropdown">
                  <button class="btn dropdown-toggle status-done btn-status-style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    DONE
                  </button>
                  <div class="dropdown-menu dropdown-menu-right status-menu-style" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Unpaid</a>
                    <a class="dropdown-item" href="#">Paid</a>
                    <a class="dropdown-item" href="#">Shipping</a>
                    <a class="dropdown-item active" href="#">Done</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <changePage></changePage>
    </div>
  </div>
</template>

<script>
import changePage from '@/components/changePage'
export default {
  name: 'ORDERS',
  data () {
    return {
      
    }
  },
  components: { changePage }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/custom.scss';

.background {
  min-height: calc(100vh - 70px);
  background: $gray-1;
}
.orders {
	padding-top: 20px;
	padding-bottom: 32px;
	.select-bar {
		color: $black;
		padding: 10px 0;
    .btn-box {
      padding: 0;
      margin-left: 16px;
      background: transparent;
    }
		.select {
			display: inline-block;
			width: 15px;
			height: 15px;
			border: 1px solid $black;
			border-radius: 2px;
		}
    .select-triangle {
      padding: 0 3px;
      background: transparent;
    }
    .menu-style {
      background: $white;
      box-shadow: 1px 2px 10px 0 $gray-5;
      border-radius: 2px;
      a, h6 {
        font-family: $Titele-font, $font-family-base;
        font-size: 16px;
        color: $black;
        text-align: center;
      }
    }
    .box-menu {
      transform: translate3d(16px, 26px, 0px)!important;
      min-width: 125px;
    }
    .box-menu .active {
      color: $white;
      background-color: $black;
    }
    .tag {
      padding: 0 3px;
      background: transparent;
    }
    .tag-menu .active {
      color: $white;
      background-color: $black;
    }
    .btn-edit {
      padding: 3px 0;
      background: transparent;
      font-family: $Titele-font, $font-family-base;
      font-weight: $Titele-weight;
      font-size: $Table-infomation-size;
      color: $black;
      line-height: 18px;
    }
    .edit-menu {
      min-width: 150px;
      transform: translate3d(-46px, 27px, 0px)!important;
      a {
        text-align: left;
      }
    }
  }
  table {
    margin-bottom: 30px;
  }
  .table-responsive {
    font-family: $Table-infomation-font, $font-family-base;
    thead th {      
      font-size: $Subtitele-2-size;
      font-weight: $Subtitele-2-weight;
      color: $black;
    }
    tbody th, tbody td {
      font-size: $Table-infomation-size;
      font-weight: $Table-infomation-weight;
      color: $black;
      line-height: 1.3125rem;
    }
    .btn-status-style {
      border-radius: 4px;
      font-family: $Titele-font, $font-family-base;
      font-size: 14px;
      color: $white;
      text-align: right;
      line-height: 18px;
      font-weight: $Subtitele-2-weight;
    }
    .active {
      color: $white;
      background-color: $black;
    }
    .status-menu-style {
      background: $white;
      box-shadow: 1px 2px 10px 0 $gray-5;
      border-radius: 2px;
      min-width: 100px;
    }
    .status-unpaid {
      background: $gray-5;
      border: 1px solid $gray-5;
    }
    .status-paid {
      background: $green;
      border: 1px solid $green;
    }
    .status-done {
      background: $blue;
      border: 1px solid $blue;
    }
    .price-total {
      text-align: right;
    }
    .price {
      color: $gray-5;
    }
    .price-num {
      width: 160px;
    }
  }
}
</style>
