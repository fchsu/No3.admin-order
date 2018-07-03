<template>
  <div class="background">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="header d-flex align-items-center">
            <h4 class="mr-auto">ADD NEW PRODUCT</h4>
            <i class="fas fa-times"></i>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="content d-md-flex">
            <div class="col-md-6 col-12 mb-3 mb-md-0">
              <div class="input-photo container">
                <div class="row">
                  <div class="col-12">
                    <input type="file" multiple name="file" id="file" class="d-none">
                      <label for="file" class="file d-flex flex-column align-items-center justify-content-center">
                        <i class="fas fa-cloud-upload-alt mb-2"></i>
                        <span>Drag an image or click here to upload…</span>
                      </label>
                  </div>
                </div>
                <div class="row flex-wrap img-container">
                  <div class="col-6 col-sm-4 col-md-6 col-lg-4 mb-3">
                    <div class="upload-img mr-1x2 mr-1x3" style="background-image: url('../../static/img/product-2.png')"></div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-6 col-lg-4 mb-3">
                    <div class="upload-img ml-1x2 mlr-1x3" style="background-image: url('../../static/img/product-3.png')"></div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-6 col-lg-4 mb-3">
                    <div class="upload-img mr-1x2 ml-1x3" style="background-image: url('../../static/img/product-4.png')"></div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-6 col-lg-4 mb-3">
                    <div class="upload-img ml-1x2 mr-1x3" style="background-image: url('../../static/img/product-5.png')"></div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-6 col-lg-4 mb-3">
                    <div class="upload-img mr-1x2 mlr-1x3" style="background-image: url('../../static/img/product-6.png')"></div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-6 col-lg-4 mb-3">
                    <div class="upload-img ml-1x2 ml-1x3" style="background-image: url('')"></div>
                  </div>
                </div>
              </div>
            </div>
            <form class="col-md-6 col-12">
              <div class="product-discription d-flex flex-column">
                <h5 class="mb-2">Product Discription</h5>
                <input type="text" class="form-control mb-2 align-middle pl-3" placeholder="Tiltle">
                <textarea name="" id="" class="form-control mb-2 pl-3 pt-2" placeholder="Discription"></textarea>
              </div>
              <div class="product-discription price">
                <h5 class="mb-2">Price</h5>
                <div class="d-sm-flex">
                  <div class="input-group mb-2 mr-2">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">Original</span>
                    </div>
                    <input type="number" class="form-control text-right w-25 width-control" id="original" aria-describedby="basic-addon1">
                  </div>
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon2">Discount</span>
                    </div>
                    <input type="number" class="form-control text-right w-25 width-control" id="discount" aria-describedby="basic-addon2">
                  </div>
                </div>
              </div>
              <div class="product-discription specification">
                <h5 class="mb-2">Specification</h5>
                <div class="d-sm-flex d-md-block d-lg-flex">
                  <div class="input-group mb-2 mr-2">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon3">Size</span>
                    </div>
                    <select class="form-control text-right w-25 width-control" id="size" aria-describedby="basic-addon1">
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                  </div>
                  <div class="input-group mb-2 mr-2">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon4">Color</span>
                    </div>
                    <input type="text" class="form-control text-right w-25 width-control" id="color" aria-describedby="basic-addon2">
                  </div>
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon5">Inventory</span>
                    </div>
                    <input type="number" class="form-control text-right w-25 width-control" id="inventory" aria-describedby="basic-addon3">
                  </div>
                </div>
                <button type="button" class="btn add-specification">ADD NEW SPECIFICATION<i class="fas fa-plus ml-2"></i></button> 
              </div> 
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/custom.scss';

.background {
  min-height: calc(100vh - 70px);
  background: rgba(0, 0, 0, 0.5);
  padding-top: 20px;
  .box {
    height: 100px;
    background: #fff;
    border: 1px solid $green;
  }
  .header {
    padding: 18px 3.4%;
    background: $black;
    border-radius: 4px 4px 0 0;
    color: $white;
    h4 {
      margin-bottom: 0;
      font-family: $Titele-font, $font-family-base;
      font-size: $Titele-size;
      font-weight: $Titele-weight;
    }
    i {
      font-size: $Titele-size;
    }
  }
  .content {
    width: 100%;
    background: $white;
    padding: 30px 20px;
    @media (max-width: 575px) {
      padding: 30px 5px;
    }
    .input-photo {
      @media (max-width: 767px) {
        padding: 0;
      }
      @media (min-width: 768px) {
        padding-right: 26px;
        margin-left: -10px;
      }
      .file {
        background: #EBEBEB;
        padding: 25px 1rem;
        text-align: center;
        color: $gray-4;
        i {
          font-size: 2rem;
        }
        span {
          font-family: $Placeholder-font, $font-family-base;
          font-size: $Placeholder-size;
          font-weight: $Subtitele-2-weight;
          line-height: 24px;
        }
      }
      .img-container {
        > div {
          @media (max-width: 413px) {
            .mr-1x2 {
              margin-right: -6px;
            }
            .ml-1x2 {
              margin-left: -6px;
            }
          }
          @media (min-width: 768px) and (max-width: 991px) {
            .mr-1x2 {
              margin-right: -6px;
            }
            .ml-1x2 {
              margin-left: -6px;
            }
          }
          @media (min-width: 414px) and (max-width: 767px) {
            flex: 0 0 33.33333%;
            max-width: 33.33333%;
            .mr-1x3 {
              margin-right: -8px;
            }
            .ml-1x3 {
              margin-left: -8px;
            }
            .mlr-1x3 {
              margin-left: -4px;
              margin-right: -4px;
            }
          }
          @media (min-width: 992px) {
            .mr-1x3 {
              margin-right: -8px;
            }
            .ml-1x3 {
              margin-left: -8px;
            }
            .mlr-1x3 {
              margin-left: -4px;
              margin-right: -4px;
            }
          }
          .upload-img {
            padding-top: 100%;
            background-position: 50% 50%;
            background-size: cover;
            margin-bottom: -8px;
          }
          
        }
      }
    }
    form {
      .product-discription {
        @media (min-width: 768px) {
          margin-left: -26px;
        }
        margin-bottom: 12px;
      }
      h5 {
        font-family: $Titele-font, $font-family-base;
        font-size: $Subtitele-2-size;
        font-weight: $Subtitele-2-weight;
        color: $gray-6;
        letter-spacing: 0;
        text-align: left;
      }
      input, textarea, select {
        border-color: #CCCCCC;
        background: $white;
        font-family: $Titele-font, $font-family-base;
        font-size: $Subtitele-2-size;
        letter-spacing: 0;
        text-align: left;
        line-height: $Titele-size;
      }
      input {
        height: 38px;
        outline: none;
      }
      textarea {
        height: 172px;
      }
      .width-control {
        // @media (min-width: 414px) and (max-width: 575px) {
        //   flex: none;
        // }
      }
      .add-specification {
        background: $black;
        font-family: $Titele-font, $font-family-base;
        font-size: $Subtitele-2-size;
        font-weight: $Subtitele-2-weight;
        color:  $white;
        letter-spacing: 0;
        text-align: center;
        line-height: 24px;
        width: 100%;
        @media (max-width: 575px) {
          width: auto;
        }
      }
    }
  }
}
</style>


