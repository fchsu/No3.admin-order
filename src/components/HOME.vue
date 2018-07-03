<template>
  <div class="background">
    <div class="container home">
      <h2>OVERVIEW</h2>
      <div class="row row-pad-y">
        <div class="col-sm-4 col-12 col-pad-y">
          <div class="box"></div>
        </div>
        <div class="col-sm-4 col-12 col-pad-y">
          <div class="box"></div>
        </div>
        <div class="col-sm-4 col-12 col-pad-y">
          <div class="box"></div>
        </div>
      </div>
      <div class="row row-pad-y">
        <div class="col-12">
          <div class="box"></div>
        </div>
      </div>
      <div class="row row-pad-y">
        <div class="col-6">
          <div class="box"></div>
        </div>
        <div class="col-6">
          <div class="box"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="container home">
  	<h2>OVERVIEW</h2>
  	<div class="row row-pad-y">
  		<div class="col-sm-4 col-12 col-pad-y">
  			<div class="box"></div>
  		</div>
  		<div class="col-sm-4 col-12 col-pad-y">
  			<div class="box"></div>
  		</div>
  		<div class="col-sm-4 col-12 col-pad-y">
  			<div class="box"></div>
  		</div>
  	</div>
  	<div class="row row-pad-y">
  		<div class="col-12">
  			<div class="box"></div>
  		</div>
  	</div>
  	<div class="row row-pad-y">
  		<div class="col-6">
  			<div class="box"></div>
  		</div>
  		<div class="col-6">
  			<div class="box"></div>
  		</div>
  	</div>
  </div> -->
</template>

<script>
export default {
  name: 'HOME',
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
  background: $gray-1;
}
.home {
	padding-top: 20px;
	padding-bottom: 32px;
	h2 {
		padding: 10px 0;
		margin-bottom: 0; 
		font-size: $Titele-size;
		font-family: $Titele-font, $font-family-base;
		font-weight: $Titele-weight;
		color: $black;
	}
	.row-pad-y {
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.col-pad-y {
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.box {
		background: #cccccc;
		height: 100px;
	}
}
@media (min-width: 576px) {
	.home {
		.col-pad-y {
			padding-top: 0;
			padding-bottom: 0;
		}
	}
}
</style>
