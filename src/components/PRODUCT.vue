<template>
  <div class="background">
    <div class="container product">
      <div class="select-bar row">
        <div class="col-12 d-flex align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-box d-flex align-items-center"><span class="select"></span></button>
            <button type="button" class="btn dropdown-toggle dropdown-toggle-split select-triangle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu box-menu menu-style">
              <a class="dropdown-item active" href="#">Select All</a>
              <a class="dropdown-item" href="#">Unpublished</a>
              <a class="dropdown-item" href="#">Published</a>
            </div>
          </div>
          <div class="dropdown ml-2 mr-auto">
            <button class="btn tag" type="button" id="dropdownTagButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-tags"></i>
            </button>
            <div class="dropdown-menu tag-menu menu-style" aria-labelledby="dropdownTagButton">
              <h6 class="dropdown-header">Change Status to…</h6>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item active" href="#">Unpublished</a>
              <a class="dropdown-item" href="#">Published</a>
            </div>
          </div>
          <router-link to="/PRODUCT/AddProduct" tag="button" type="button" class="btn add-product">ADD NEW PRODUCT<i class="fas fa-plus ml-2"></i></router-link>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col" class="th-product">Product</th>
              <th scope="col" class="product-original">Original</th>
              <th scope="col" class="product-discount">Discount</th>
              <th scope="col" class="product-size">Size</th>
              <th scope="col" class="product-color">Color</th>
              <th scope="col" class="product-inventory">Inventory</th>
              <th scope="col" class="product-status">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <div class="d-flex align-items-center ml-1">
                  <span class="product-select mr-2"></span>
                  <img src="../../static/img/product-1.png" alt="" class="mr-2">
                  <span >Mauris non tem.</span>
                </div>
              </th>
              <td class="product-original padding-top">$3,200</td>
              <td class="product-discount padding-top">$2,800</td>
              <td class="padding-right-0 padding-top-25">
                <div class="product-size-list">
                  <div>XXL</div>
                  <div class="invisible">L</div>
                </div>
                <div class="product-size-list border-y">
                  <div>M</div>
                  <div class="invisible">M</div>
                </div>
                <div class="product-size-list">
                  <div>S</div>
                  <div class="invisible">S</div>
                </div>
              </td>
              <td class="padding-right-0 padding-top-25 padding-left-0">
                <div class="product-color-list">
                  <div>Gray</div>
                  <div>Black</div>
                </div>
                <div class="product-color-list border-y">
                  <div>Gray</div>
                  <div>Black</div>
                </div>
                <div class="product-color-list">
                  <div>Gray</div>
                  <div>Black</div>
                </div>
              </td>
              <td class="product-inventory padding-top-25 padding-left-0">
                <div class="product-inventory-list">
                  <div>15</div>
                  <div>20</div>
                </div>
                <div class="product-inventory-list border-y">
                  <div>15</div>
                  <div>20</div>
                </div>
                <div class="product-inventory-list">
                  <div>15</div>
                  <div>20</div>
                </div>
              </td>
              <td class="product-status padding-top-161">
                <div class="d-flex align-items-end">
                  <div class="dropdown">
                    <button class="btn dropdown-toggle status-published btn-status-style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      PUBLISHED
                    </button>
                    <div class="dropdown-menu dropdown-menu-right status-menu-style" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Unpublished</a>
                      <a class="dropdown-item active" href="#">Published</a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div class="d-flex align-items-center ml-1">
                  <span class="product-select mr-2"></span>
                  <img src="../../static/img/product-1.png" alt="" class="mr-2">
                  <span >Mauris non tem.</span>
                </div>
              </th>
              <td class="product-original padding-top">$3,200</td>
              <td class="product-discount padding-top">$2,800</td>
              <td class="padding-right-0 padding-top-25">
                <div class="product-size-list">
                  <div>XXL</div>
                  <div class="invisible">L</div>
                </div>
                <div class="product-size-list border-y">
                  <div>M</div>
                  <div class="invisible">M</div>
                </div>
                <div class="product-size-list">
                  <div>S</div>
                  <div class="invisible">S</div>
                </div>
              </td>
              <td class="padding-right-0 padding-top-25 padding-left-0">
                <div class="product-color-list">
                  <div>Gray</div>
                  <div>Black</div>
                </div>
                <div class="product-color-list border-y">
                  <div>Gray</div>
                  <div>Black</div>
                </div>
                <div class="product-color-list">
                  <div>Gray</div>
                  <div>Black</div>
                </div>
              </td>
              <td class="product-inventory padding-top-25 padding-left-0">
                <div class="product-inventory-list">
                  <div>15</div>
                  <div>20</div>
                </div>
                <div class="product-inventory-list border-y">
                  <div>15</div>
                  <div>20</div>
                </div>
                <div class="product-inventory-list">
                  <div>15</div>
                  <div>20</div>
                </div>
              </td>
              <td class="product-status padding-top-161">
                <div class="d-flex align-items-end">
                  <div class="dropdown">
                    <button class="btn dropdown-toggle status-unpublished btn-status-style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      UNPUBLISHED
                    </button>
                    <div class="dropdown-menu dropdown-menu-right status-menu-style" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item active" href="#">Unpublished</a>
                      <a class="dropdown-item" href="#">Published</a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div class="d-flex align-items-center ml-1">
                  <span class="product-select mr-2"></span>
                  <img src="../../static/img/product-1.png" alt="" class="mr-2">
                  <span >Mauris non tem.</span>
                </div>
              </th>
              <td class="product-original padding-top">$3,200</td>
              <td class="product-discount padding-top">$2,800</td>
              <td class="padding-right-0 padding-top-25">
                <div class="product-size-list">
                  <div>XXL</div>
                  <div class="invisible">L</div>
                </div>
                <div class="product-size-list border-y">
                  <div>M</div>
                  <div class="invisible">M</div>
                </div>
                <div class="product-size-list">
                  <div>S</div>
                  <div class="invisible">S</div>
                </div>
              </td>
              <td class="padding-right-0 padding-top-25 padding-left-0">
                <div class="product-color-list">
                  <div>Gray</div>
                  <div>Black</div>
                </div>
                <div class="product-color-list border-y">
                  <div>Gray</div>
                  <div>Black</div>
                </div>
                <div class="product-color-list">
                  <div>Gray</div>
                  <div>Black</div>
                </div>
              </td>
              <td class="product-inventory padding-top-25 padding-left-0">
                <div class="product-inventory-list">
                  <div>15</div>
                  <div>20</div>
                </div>
                <div class="product-inventory-list border-y">
                  <div>15</div>
                  <div>20</div>
                </div>
                <div class="product-inventory-list">
                  <div>15</div>
                  <div>20</div>
                </div>
              </td>
              <td class="product-status padding-top-161">
                <div class="d-flex align-items-end">
                  <div class="dropdown">
                    <button class="btn dropdown-toggle status-unpublished btn-status-style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      UNPUBLISHED
                    </button>
                    <div class="dropdown-menu dropdown-menu-right status-menu-style" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item active" href="#">Unpublished</a>
                      <a class="dropdown-item" href="#">Published</a>
                    </div>
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
  name: 'PRODUCT',
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
.product {
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
    .add-product {
      background: $black;
      font-family: $Titele-font, $font-family-base;
      font-size: $Table-infomation-size;
      font-weight: $Subtitele-2-weight;
      color: $white;
      line-height: 1.125rem;
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
      padding: 9px 12px;
    }
    tbody th, tbody td {
      font-size: $Table-infomation-size;
      font-weight: $Table-infomation-weight;
      color: $black;
      line-height: 1.3125rem;
      padding: 12px 12px;
    }
    tbody th {
      padding-right: 0;
    }
    .th-product {
      padding-left: 38px;
      padding-right: 0;
    }
    .product-select {
      display: inline-block;
			width: 15px;
      height: 15px;
      background: $white;
			border: 1px solid $white;
      border-radius: 3px;
    }
    .product-original {
      text-align: right;
      padding-left: 0;
      padding-right: 18px;
    }
    .product-discount {
      text-align: right;
      padding-left: 12px;
      padding-right: 48px;
    }
    .padding-top {
      padding-top: 33px;
    }
    .padding-right-0 {
      padding-right: 0;
    }
    .padding-left-0 {
      padding-left: 0;
    }
    .border-y {
      border-top: 1px solid $white;
      border-bottom: 1px solid $white;
    }
    .product-size {
      padding-right: 32px;
    }
    .product-size-list {
      padding-top: 8px;
      padding-right: 32px;
      padding-bottom: 8px;
    }
    .product-color {
      padding-right: 2px;
    }
    .product-color-list {
      padding-top: 8px;
      padding-bottom: 8px;
    }
    .product-color-list div {
      padding-left: 12px;
    }
    .product-inventory {
      text-align: right;
      padding-right: 48px;
    }
    .product-inventory-list {
      text-align: right;
      padding-top: 8px;
      padding-bottom: 8px;
    }
    @media (min-width: 992px) {
      .product-status {
        padding-right: 0;
      }
    }
    .padding-top-161 {
      padding-top: 161px;
    }
    .padding-top-25 {
      padding-top: 25px;
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
    .status-published {
      background: $green;
      border: 1px solid $green;
    }
    .status-unpublished {
      background: $gray-5;
      border: 1px solid $gray-5;
    }
  }
}
</style>
